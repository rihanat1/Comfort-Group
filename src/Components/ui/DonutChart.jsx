const DonutChart = ({ segments, total, size = 140, thickness = 16, label, children }) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const sum = total ?? segments.reduce((t, s) => t + s.value, 0);

  // Work out where each segment starts and how long it is.
  const arcs = segments.reduce((list, s) => {
    const prev = list[list.length - 1];
    const start = prev ? prev.start + prev.length : 0;
    const length = sum ? (s.value / sum) * circumference : 0;
    return [...list, { ...s, start, length }];
  }, []);

  return (
    <div role="img" aria-label={label} className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={thickness} className="stroke-green/10" />
        {arcs.map((arc) => (
          <circle
            key={arc.key}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={arc.color}
            strokeWidth={thickness}
            strokeDasharray={`${arc.length} ${circumference - arc.length}`}
            strokeDashoffset={-arc.start}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{children}</div>
    </div>
  );
};

export default DonutChart;