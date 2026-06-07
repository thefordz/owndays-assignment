import { Registration } from "./types";
import { createRegistration } from "./validation";
import { api } from "./axios";

export async function registerEvent(data: createRegistration) {
  const res = await api.post<Registration>("/registration", data);
  return res.data;
}
