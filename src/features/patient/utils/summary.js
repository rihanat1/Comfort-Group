const isCompleted = (s) => s.status === "completed";

export function summarizeAllocation(allocation, supports) {
  const used = supports.filter(isCompleted).reduce((sum, s) => sum + s.amount, 0);
  const remaining = Math.max(allocation.total - used, 0);
  const usedPercent = allocation.total ? Math.round((used / allocation.total) * 100) : 0;
  return { total: allocation.total, used, remaining, usedPercent };
}

// Groups completed supports by category. `total` decides what the percent
// is "out of" (the allocation on My Allocation, total received on History).
export function breakdownByCategory(supports, total) {
  const groups = {};
  for (const s of supports.filter(isCompleted)) {
    groups[s.category] ??= { category: s.category, amount: 0, count: 0 };
    groups[s.category].amount += s.amount;
    groups[s.category].count += 1;
  }
  return Object.values(groups)
    .map((g) => ({ ...g, percent: total ? Math.round((g.amount / total) * 100) : 0 }))
    .sort((a, b) => b.amount - a.amount);
}

export function getNextSupport(supports) {
  return (
    supports
      .filter((s) => s.status === "scheduled" && new Date(s.date) > new Date())
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0] ?? null
  );
}

export function daysUntil(date) {
  return Math.max(Math.ceil((new Date(date) - Date.now()) / 86_400_000), 0);
}