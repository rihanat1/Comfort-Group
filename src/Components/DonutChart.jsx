// A round chart (donut) made with plain CSS, plus a list next to it.
// Props:
//   segments - list like [{ label: "Medication Support", percent: 40, amount: 74000, color: "#0be200" }]
//   total    - the number shown in the middle
const DonutChart = ({ segments, total }) => {
  // Build the colours for the ring, for example:
  // "#0be200 0% 40%, #002657 40% 65%, ..."
  let stops = "";
  let start = 0;
  for (const segment of segments) {
    const end = start + segment.percent;
    stops = stops + `${segment.color} ${start}% ${end}%, `;
    start = end;
  }
  stops = stops.slice(0, -2); // remove the last ", "

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      {/* the ring */}
      <div
        className="relative h-44 w-44 shrink-0 rounded-full"
        style={{ background: `conic-gradient(${stops})` }}
      >
        {/* white circle on top = the hole in the middle */}
        <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-white">
          <p className="font-bold text-secondary/70">₦{total.toLocaleString()}</p>
          <p className="text-sm text-secondary/60">Total Donated</p>
        </div>
      </div>

      {/* the list */}
      <div className="flex flex-col gap-3">
        {segments.map((segment) => (
          <div key={segment.label}>
            <p className="flex items-center gap-2 text-sm font-semibold text-secondary/70">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              {segment.label}
            </p>
            <p className="pl-[18px] text-sm text-secondary/60">
              {segment.percent}% &nbsp;&nbsp; ₦{segment.amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
