// Every patient screen gets its data through these functions. They return
// mock data for now; when the backend is ready, replace the bodies with real
// requests and keep the function names and return shapes the same.
import { mockActivity, mockAllocation, mockPatient, mockSupports } from "./mockData.js";
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));
const clone = (value) => structuredClone(value);

export async function getPatientProfile() { await delay(); return clone(mockPatient); }
export async function getAllocation()     { await delay(); return clone(mockAllocation); }
export async function getSupports()       { await delay(); return clone(mockSupports); }
export async function getActivity()       { await delay(); return clone(mockActivity); }