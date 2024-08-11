import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { data, options } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  return (
    <div style={{ width: "100%", height: "700px", marginTop: "70px" }}>
      <Line data={data} options={{ ...options, maintainAspectRatio: false }} />
    </div>
  );
};

export default LineChart;
