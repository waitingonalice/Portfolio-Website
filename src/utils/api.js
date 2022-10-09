const token = process.env.GATSBY_BOT_TOKEN;
const chat_id = process.env.GATSBY_USER_ID;

const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;
const endpointEnv =
  process.env.NODE_ENV === "development"
    ? endpoint
    : `https://cors-anywhere.herokuapp.com/${endpoint}`;

export const sendTelegramMessage = async (text) => {
  const unescapeMessage = {
    ...text,
    message: text.message.replace(/(\r\n|\n|\r)/g, " "),
  };
  try {
    const response = await fetch(endpointEnv, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ chat_id, text: unescapeMessage }, null, 2),
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
