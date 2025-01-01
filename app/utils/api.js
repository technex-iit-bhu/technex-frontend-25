const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/user/login/password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const getAllEvents = async () => {
  const response = await fetch(`${API_BASE_URL}/api/events`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.events;
};

export const getEventById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/events/getEventByID/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch event: ${response.statusText}`);
  }

  const data = await response.json();
  return data.event; // Assuming the response contains an 'event' object
};
