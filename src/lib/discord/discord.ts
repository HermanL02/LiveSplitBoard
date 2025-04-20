import { logger } from '@/libs/Logger';

async function sendMessage(message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('DISCORD_WEBHOOK_URL is not set');
  }

  if (!message || message.trim() === '') {
    logger.error('Empty message provided to sendMessage, skipping');
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Discord webhook error: ${response.status} - ${errorText}`);
    }
    logger.info('Message sent to Discord');
    return true;
  } catch (error) {
    logger.error('Error sending message to Discord:', error);
    throw error;
  }
}

export default sendMessage;
