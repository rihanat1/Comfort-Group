// Placeholder data for building the patient screens before the backend exists.
// Shapes here are the proposed API contract — agree them with the backend.

export const mockPatient = {
  id: "pat_001",
  fullName: "Adaeze Okafor",
  phone: "+234 803 000 0000",
  email: "adaeze@example.com",
  // self | family — who is filling the account in
  applicantRelation: "self",
  hospital: "Lagos University Teaching Hospital (LUTH)",
  // unverified | pending | verified
  verificationStatus: "verified",
};

export const mockRequests = [
  {
    id: "req_1042",
    reference: "REQ-2026-1042",
    supportType: "food",
    title: "Meals during admission",
    description: "Lunch and dinner for 5 days while on admission in Ward C2.",
    hospital: "LUTH",
    ward: "Ward C2",
    estimatedAmount: 30000,
    status: "approved",
    vendorName: "Mama Tolu Kitchen",
    createdAt: "2026-10-03T09:12:00Z",
    timeline: [
      { status: "submitted", at: "2026-10-03T09:12:00Z" },
      { status: "under_review", at: "2026-10-03T14:00:00Z" },
      { status: "approved", at: "2026-10-04T10:30:00Z", note: "A vendor will deliver from tomorrow." },
    ],
  },
  {
    id: "req_1051",
    reference: "REQ-2026-1051",
    supportType: "medication",
    title: "Post-surgery prescription",
    description: "Antibiotics and pain relief prescribed after surgery.",
    hospital: "LUTH",
    ward: "Ward C2",
    estimatedAmount: 18500,
    status: "needs_info",
    createdAt: "2026-10-07T11:00:00Z",
    timeline: [
      { status: "submitted", at: "2026-10-07T11:00:00Z" },
      { status: "under_review", at: "2026-10-07T16:20:00Z" },
      {
        status: "needs_info",
        at: "2026-10-08T09:05:00Z",
        note: "Please upload a clear photo of the prescription.",
      },
    ],
  },
  {
    id: "req_0987",
    reference: "REQ-2026-0987",
    supportType: "food",
    title: "Meals for 3 days",
    description: "Breakfast and lunch for 3 days.",
    hospital: "LUTH",
    ward: "Ward A1",
    estimatedAmount: 12000,
    status: "fulfilled",
    vendorName: "Mama Tolu Kitchen",
    createdAt: "2026-09-20T08:00:00Z",
    timeline: [
      { status: "submitted", at: "2026-09-20T08:00:00Z" },
      { status: "under_review", at: "2026-09-20T12:00:00Z" },
      { status: "approved", at: "2026-09-21T09:00:00Z" },
      { status: "fulfilled", at: "2026-09-24T13:00:00Z" },
    ],
  },
];
