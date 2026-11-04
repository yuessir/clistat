import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_BASE_URL =
  process.env.UPSTREAM_API_BASE_URL || "https://api.tkbk.online";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const apiKey = (body.apiKey || "").trim();

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "請提供 API Key" },
        { status: 400 }
      );
    }

    if (!apiKey.startsWith("cr_")) {
      return NextResponse.json(
        { success: false, error: "API Key 格式不正確，必須以 'cr_' 開頭" },
        { status: 400 }
      );
    }

    // Step 1: 取得 apiId
    const keyIdRes = await fetch(`${UPSTREAM_BASE_URL}/apiStats/api/get-key-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ apiKey }),
      cache: "no-store",
    });

    if (!keyIdRes.ok) {
      const errData = await keyIdRes.json().catch(() => ({}));
      return NextResponse.json(
        {
          success: false,
          error: errData.message || errData.error || "找不到此 API Key 或金鑰無效",
        },
        { status: keyIdRes.status || 401 }
      );
    }

    const keyIdData = await keyIdRes.json();
    const apiId = keyIdData?.data?.id;

    if (!apiId) {
      return NextResponse.json(
        { success: false, error: "無法解析此金鑰的 API 識別碼" },
        { status: 404 }
      );
    }

    // Step 2: 查詢 user-stats
    const statsRes = await fetch(`${UPSTREAM_BASE_URL}/apiStats/api/user-stats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ apiId }),
      cache: "no-store",
    });

    if (!statsRes.ok) {
      const errData = await statsRes.json().catch(() => ({}));
      return NextResponse.json(
        {
          success: false,
          error: errData.message || errData.error || "獲取 API 統計資料失敗",
        },
        { status: statsRes.status || 500 }
      );
    }

    const statsData = await statsRes.json();
    const data = statsData.data;

    if (data) {
      // 依使用者需求：徹底移除 description 字段（防止洩露上游訂單資訊）
      delete data.description;

      // 依使用者需求：過濾受限模型清單中含有的供應商專屬內部名稱
      if (data.restrictions && Array.isArray(data.restrictions.restrictedModels)) {
        data.restrictions.restrictedModels = data.restrictions.restrictedModels.filter(
          (m: string) => !m.toLowerCase().includes("tkbk")
        );
      }
    }

    return NextResponse.json({
      success: true,
      apiId,
      data,
    });
  } catch (error: any) {
    console.error("API Stats Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "伺服器內部錯誤，請稍後再試",
      },
      { status: 500 }
    );
  }
}
