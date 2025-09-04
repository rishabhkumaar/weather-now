export default function ForecastGrid({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
      {items.map((hour, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center shadow-md"
        >
          <p className="text-sm">{hour.time}</p>
          <img src={hour.icon} alt={hour.desc} className="w-10 mx-auto" />
          <p>{hour.temp}°C</p>
          <p className="text-sm">{hour.humidity}%</p>
        </div>
      ))}
    </div>
  );
}
