const token = process.env.GATSBY_BOT_TOKEN;
const chat_id = process.env.GATSBY_USER_ID;
const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;

export const sendTelegramMessage = async (text) => {
  await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text }, null, 2),
  }).then((response) => response.json());
};
