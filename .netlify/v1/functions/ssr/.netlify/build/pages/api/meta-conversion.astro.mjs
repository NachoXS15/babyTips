export { renderers } from '../../renderers.mjs';

const accessToken = "EAAJzJUa1ZAvoBO34i00QBGgQtdbhZCccZBOEc4p78EwFSC8EwJ9NGr3eqXTtJX4GliXRy323qkD5ZCpxiHUeehTcHmqZBCkGjwAQrFmVdOA4YuSp7eZBwTZA65FpfVmK4bYgR43Gvq1ugy1vW3n8bb5Xn139DuehcVKRmkI3CsIiwUAgQSPZCRQnxGUTcSQGf0wwBgjkaeh0Cc8yv0O2hdzmHZBfQ";
const pixelId = "1420940242374982";
const POST = async ({ request }) => {
  const body = await request.json();
  const event_id = body.event_id;
  const event_source_url = body.event_source_url;
  const client_user_agent = request.headers.get("user-agent") || "";
  const payload = {
    data: [
      {
        event_name: "PageView",
        event_time: Math.floor(Date.now() / 1e3),
        event_id,
        event_source_url,
        client_user_agent,
        action_source: "website"
      }
    ]
  };
  const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const result = await response.json();
  return new Response(JSON.stringify(result), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
