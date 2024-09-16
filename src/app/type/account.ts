export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number | null;
  token: string | null;
}

interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

interface Name {
  firstname: string;
  lastname: string;
}

export interface AccountResponse {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}
