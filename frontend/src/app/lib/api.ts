import { Filters, Registration } from "./types";
import { createRegistration } from "./validation";
import { api } from "./axios";

export async function registerEvent(data: createRegistration) {
  const res = await api.post<Registration>("/registration", data);
  return res.data;
}

export async function getRegistrations(filters: Filters) {
  const res = await api.get<Registration[]>("/registration", {
    params: filters,
  });
  return res.data;
}
