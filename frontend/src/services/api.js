const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const wakeUpBackend = async () => {
  try {
    await fetch(`${API_BASE_URL}/api`);
  } catch (error) {
    // silently fail
  }
};

export const sendContactMessage = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message');
    }

    return result;
  } catch (error) {
    throw error;
  }
};
