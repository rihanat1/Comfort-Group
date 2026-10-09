// Shared labels for the patient feature, so status text is identical on
// every screen. Keys must match what the backend sends.

export const SUPPORT_TYPES = {
  medication: "Medication",
  food: "Food",
  other: "Other support",
};

// Request lifecycle:
// submitted -> under_review -> approved -> fulfilled
//                           -> needs_info (patient must respond) -> under_review
//                           -> rejected
export const REQUEST_STATUSES = {
  submitted: { label: "Submitted", tone: "neutral" },
  under_review: { label: "Under review", tone: "info" },
  needs_info: { label: "Action needed", tone: "warning" },
  approved: { label: "Approved", tone: "success" },
  fulfilled: { label: "Support received", tone: "success" },
  rejected: { label: "Not approved", tone: "danger" },
};

export const ACTIVE_STATUSES = ["submitted", "under_review", "needs_info", "approved"];
