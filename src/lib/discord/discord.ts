async function sendMessage(message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('DISCORD_WEBHOOK_URL is not set');
  }
  const response = await fetch(webhookUrl, {
    method: 'POST',
    body: JSON.stringify({ content: message }),
  });
  return response.json();
}

export default sendMessage;
