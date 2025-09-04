export default function WeatherCard({ label, value, icon }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg flex flex-col items-center text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-xl">{value}</p>
    </div>
  );
}
