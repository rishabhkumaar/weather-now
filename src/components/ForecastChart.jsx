import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function ForecastChart({ labels, temps, hums }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "#facc15",
        backgroundColor: "rgba(250, 204, 21, 0.2)",
        yAxisID: "y1",
      },
      {
        label: "Humidity (%)",
        data: hums,
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6, 182, 212, 0.2)",
        yAxisID: "y2",
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: { mode: "index", intersect: false },
    stacked: false,
    scales: {
      y1: {
        type: "linear",
        position: "left",
        ticks: { color: "#facc15" },
      },
      y2: {
        type: "linear",
        position: "right",
        ticks: { color: "#06b6d4" },
        grid: { drawOnChartArea: false },
      },
    },
    plugins: {
      legend: { labels: { color: "#fff" } },
    },
  };

  return <Line data={data} options={options} />;
}
