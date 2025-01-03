const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/api/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/api/user/login/password`, {
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

export async function getEventById(id) {
  console.log("ID recieved = ", id);
  const res = await fetch(`${API_BASE_URL}/api/events/getEventByID?id=${id}`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch event: " + res.statusText);
  }
  const data = await res.json();
  console.log("data recieved = ", data);
  return data;
}

export async function getSubEventByName(eventId, subEventName) {
  const url = `http://localhost:6969/api/events/subevents?id=${eventId}&name=${encodeURIComponent(
    subEventName
  )}`;

  console.log("GET =>", url);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch subEvent: ${res.statusText}`);
  }
  const data = await res.json();
  console.log("data is =", data);
  console.log("subEvent is =", data.subEvent);
  return data.subEvent;
}
