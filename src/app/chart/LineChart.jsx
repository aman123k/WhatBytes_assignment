import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function LineChartComponent() {
  const lineData = [
    { percentile: 0, value: 2 },
    { percentile: 10, value: 3 },
    { percentile: 25, value: 5 },
    { percentile: 40, value: 15 },
    { percentile: 50, value: 25 },
    { percentile: 60, value: 45 },
    { percentile: 70, value: 90 },
    { percentile: 80, value: 40 },
    { percentile: 90, value: 20 },
    { percentile: 95, value: 15 },
    { percentile: 100, value: 10 },
  ];

  // Custom Tooltip component for the line chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-lg rounded border">
          <p className="text-sm">numberOfStudent: {payload[0].value}</p>
          <p className="text-sm">Percentile: {payload[0].payload.percentile}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white px-6 pt-6 rounded-lg  border">
      <h3 className="text-lg font-bold mb-4">Comparison Graph</h3>
      <p className="text-gray-600 mb-4">
        <strong> You scored 30% percentile </strong> which is lower than the
        average percentile 72% of all the engineers who took this assessment
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <XAxis
              dataKey="percentile"
              type="number"
              domain={[0, 100]}
              tickCount={5}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ r: 3, fill: "#6366F1" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChartComponent;
