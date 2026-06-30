const BASE_URL = import.meta.env.VITE_API_URL;


export interface RegisterData {
  fullname: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Trip {
  id: number;
  title: string;
  location: string;
  days: number;
  price: number;
  image: string;
}

export function saveToken(token: string) {
  localStorage.setItem("token", token);
}


export function getToken(): string | null {
  return localStorage.getItem("token");
}


export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function isLoggedIn(): boolean {
  return getToken() !== null;
}


export async function registerUser(data: RegisterData) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }

  
  saveToken(result.token);
  localStorage.setItem("user", JSON.stringify(result.user));

  return result;
}

export async function loginUser(data: LoginData) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }

  saveToken(result.token);
  localStorage.setItem("user", JSON.stringify(result.user));

  return result;
}
export async function fetchTrips(): Promise<Trip[]> {
  const response = await fetch(`${BASE_URL}/trips`);
  const result = await response.json();


  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch trips");
  }
  return result.trips;
}
