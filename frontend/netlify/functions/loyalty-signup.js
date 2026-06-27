// Netlify Function: loyalty-signup  (Upper Deck Batting Range)
// Receives the Upper Deck Club membership form and writes it to Airtable.
// Env var required in Netlify (batting-range site): LOYALTY_AIRTABLE_TOKEN
//   = a Personal Access Token scoped to base app7DZA0yHuSW2lGH with data.records:write.

const AIRTABLE_BASE = "app7DZA0yHuSW2lGH";   // Upper Deck — Loyalty
const AIRTABLE_TABLE = "Signups";

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers };
  if (event.httpMethod !== "POST")
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  const token = process.env.LOYALTY_AIRTABLE_TOKEN;
  if (!token) return { statusCode: 500, headers, body: JSON.stringify({ error: "Server not configured" }) };

  let data;
  try { data = JSON.parse(event.body || "{}"); }
  catch { return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) }; }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  if (!name || !email)
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Name and email are required" }) };

  const allowed = ["Cage Time", "Lessons / Coaching", "Parties & Events", "Teams / Leagues", "Film & TV"];
  const interests = Array.isArray(data.interests) ? data.interests.filter(i => allowed.includes(i)) : [];

  const fields = {
    "Name": name,
    "Email": email,
    "Phone": (data.phone || "").trim(),
    "Email Consent": data.emailConsent !== false,
    "SMS Consent": !!data.smsConsent,
    "Source": data.source === "In-Store QR" ? "In-Store QR" : "Website",
    "Signup Date": new Date().toISOString().slice(0, 10),
    "Status": "New",
  };
  if (data.birthday) fields["Birthday"] = data.birthday;
  if (interests.length) fields["Interests"] = interests;

  try {
    const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${encodeURIComponent(AIRTABLE_TABLE)}`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ records: [{ fields }], typecast: true }),
    });
    if (!res.ok) {
      const detail = await res.text();
      return { statusCode: 502, headers, body: JSON.stringify({ error: "Airtable error", detail }) };
    }
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 502, headers, body: JSON.stringify({ error: "Request failed" }) };
  }
};
