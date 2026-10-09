// Every patient screen gets its data through these functions. They return
// mock data for now; when the backend is ready, replace the bodies with real
// requests and keep the function names and return shapes the same.
import { mockPatient, mockRequests } from "./mockData.js";

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));
const clone = (value) => structuredClone(value);

export async function getPatientProfile() {
  await delay();
  return clone(mockPatient);
}

export async function getRequests() {
  await delay();
  return clone(mockRequests);
}

export async function getRequest(id) {
  await delay();
  const request = mockRequests.find((r) => r.id === id);
  if (!request) throw new Error("Request not found");
  return clone(request);
}

export async function createRequest(input) {
  await delay(800);
  const now = new Date().toISOString();
  const request = {
    id: `req_${Date.now()}`,
    reference: `REQ-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`,
    ...input,
    status: "submitted",
    createdAt: now,
    timeline: [{ status: "submitted", at: now }],
  };
  mockRequests.unshift(request);
  return clone(request);
}
