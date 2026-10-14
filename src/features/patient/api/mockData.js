// Dates are relative to today so countdowns never go stale.
const daysFromNow = (days, hour = 10) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(hour, 24, 0, 0);
  return d.toISOString();
};

export const mockPatient = {
  id: "pat_001",
  fullName: "Guy Hawkins",
  email: "guyhawkins@gmail.com",
  phone: "+234 801 234 5678",
  location: "Lagos, Nigeria",
  joinedAt: "2026-08-01",
  photoUrl: null,
};

export const mockAllocation = {
  id: "alloc_001",
  status: "active",              // active | expired
  total: 100000,
  periodStart: daysFromNow(-20),
  periodEnd: daysFromNow(345),
  nextAllocationAt: daysFromNow(12),
};

// Every support the patient has received, is waiting on, or has coming up.
export const mockSupports = [
  { id: "sup_007", reference: "SUP-2026-007", category: "medical",   amount: 20000, status: "scheduled", date: daysFromNow(5) },
  { id: "sup_006", reference: "SUP-2026-006", category: "equipment", amount: 10000, status: "pending",   date: daysFromNow(-2) },
  { id: "sup_005", reference: "SUP-2026-005", category: "medical",   amount: 15000, status: "completed", date: daysFromNow(-1) },
  { id: "sup_004", reference: "SUP-2026-004", category: "food",      amount: 15000, status: "completed", date: daysFromNow(-4) },
  { id: "sup_003", reference: "SUP-2026-003", category: "medical",   amount: 20000, status: "completed", date: daysFromNow(-9) },
  { id: "sup_002", reference: "SUP-2026-002", category: "education", amount: 10000, status: "completed", date: daysFromNow(-13) },
  { id: "sup_001", reference: "SUP-2026-001", category: "food",      amount: 5000,  status: "completed", date: daysFromNow(-18) },
];

export const mockActivity = [
  { id: "act_3", title: "Support used", description: "Medical Support (₦15,000)", at: daysFromNow(-1) },
  { id: "act_2", title: "Document uploaded", description: "Medical_Report.pdf", at: daysFromNow(-6) },
  { id: "act_1", title: "Allocation successful", description: "₦100,000 allocated to your account", at: daysFromNow(-20) },
];
