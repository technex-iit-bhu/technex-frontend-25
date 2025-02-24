const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function sendOTP(email) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/user/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    return await res.json();
  } catch (error) {
    return { error: error.message };
  }
}

export async function verifyOTP(email, otp) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/user/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp: parseInt(otp, 10) }),
    });

    return await res.json();
  } catch (error) {
    return { error: error.message };
  }
}

export async function resetPassword(email, newPassword) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/user/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword }),
    });
    return await res.json();
  } catch (error) {
    return { error: error.message };
  }
}

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

export async function getAllWorkshops() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/workshops`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch workshops");
    }
    const data = await response.json();
    return data.workshops;
  } catch (error) {
    console.error("Error fetching workshops:", error);
    return [];
  }
}

export async function getEventById(id) {
  const res = await fetch(`${API_BASE_URL}/api/events/getEventByID?id=${id}`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch event: " + res.statusText);
  }
  const data = await res.json();
  return data;
}

export async function getSubEventByName(eventId, subEventName) {
  const url = `${API_BASE_URL}/api/events/subevents?id=${eventId}&name=${subEventName}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch subEvent: ${res.statusText}`);
  }
  const data = await res.json();
  return data.subEvent;
}

/**
 * For convenience, create a helper function to fetch user info
 * or just reuse the fetchProfile logic from the Profile page.
 */
export async function fetchProfile(token) {
  const res = await fetch(`${API_BASE_URL}/api/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch profile: ${res.statusText}`);
  }
  const data = await res.json();
  return data.data; // { name, username, institute, ... }
}
/**
 * Helper to patch user data:
 */
export async function patchUserProfile(token, payload) {
  const res = await fetch(`${API_BASE_URL}/api/user/update`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Update failed");
  }

  return await res.json();
}
