import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import DataContext from '../context/DataContext';

const BarChartComp = () => {

  const { totalPricePerCategory } = useContext(DataContext)

  // mapping the object into a format
  function mapData(originalData) {
    const result = [];

    for (const [category, value] of Object.entries(originalData)) {
      for (let i = 0; i < 1; i++) {
        const split_name = category.split(" ");
        const initials = split_name[0]
        const pricePerCategory = parseInt(value);
        result.push({
          name: initials,
          pricePerCategory: pricePerCategory
        });
      }
    }

    return result;
  }

  const mappedData = mapData(totalPricePerCategory);

  return (
    <div>
      <BarChart
        width={850}
        height={500}
        data={mappedData}
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
          contentStyle={{ backgroundColor: 'black', color: 'white' }}
          itemStyle={{ color: 'white' }}
        />
        <Legend />
        <Bar dataKey="pricePerCategory" fill="#fff" barSize={15} shape={<RoundedBar />} />
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