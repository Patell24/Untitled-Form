export default async function spamDetect(message) {
  const response = await fetch("https://vector.profanity.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });
  const data = await response.json();
  return data;
}