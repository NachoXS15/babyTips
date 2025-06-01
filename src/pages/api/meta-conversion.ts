// import type { APIRoute } from 'astro';
// const accessToken = import.meta.env.ACCESS_TOKEN;
// const pixelId = import.meta.env.PIXEL_ID;

// export const POST: APIRoute = async ({ request }) => {
//   const body = await request.json();
//   const event_id = body.event_id;
//   const event_source_url = body.event_source_url;
//   const client_user_agent = request.headers.get('user-agent') || '';

//   const payload = {
//     data: [
//       {
//         event_name: "PageView",
//         event_time: Math.floor(Date.now() / 1000),
//         event_id: event_id,
//         event_source_url: event_source_url,
//         client_user_agent: client_user_agent,
//         action_source: "website"
//       }
//     ]
//   };

//   const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload)
//   });

//   const result = await response.json();
//   return new Response(JSON.stringify(result), { status: 200 });
// };