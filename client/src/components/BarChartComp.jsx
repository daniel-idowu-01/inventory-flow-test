import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "M",
    uv: 60,
    pv: 2400,
    amt: 2400
  },
  {
    name: "T",
    uv: 20,
    pv: 1398,
    amt: 2210
  },
  {
    name: "W",
    uv: 40,
    pv: 9800,
    amt: 2290
  },
  {
    name: "T",
    uv: 30,
    pv: 3908,
    amt: 2000
  },
  {
    name: "F",
    uv: 20,
    pv: 4800,
    amt: 2181
  },
  {
    name: "S",
    uv: 30,
    pv: 3800,
    amt: 2500
  },
  {
    name: "S",
    uv: 40,
    pv: 4300,
    amt: 2100
  }
];

const BarChartComp = () => {
  return (
    <div>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 50,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip
          contentStyle={{ backgroundColor: 'black', color: 'white' }} // Customize tooltip background and text color
          itemStyle={{ color: 'white' }}
        />
        <Legend />
        <Bar dataKey="uv" fill="#fff" barSize={15} shape={<RoundedBar />} />
      </BarChart>
    </div>
  );
}

const RoundedBar = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={10} ry={10} fill="#fff" />
    </g>
  );
};

export default BarChartComp;