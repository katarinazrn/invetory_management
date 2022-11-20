import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import distinctColors from 'distinct-colors';
import { useEffect, useState } from 'react';

const CustomPieChart = ({ data }) => {

  const [colors, setColors] = useState([]);
  const [size, setSize] = useState({});

  useEffect(() => {
    setColors(distinctColors({ count: data.length }));

    let chartsElement = document.getElementById('charts');
    setSize({ width: chartsElement.offsetWidth / 2 - 20, height: chartsElement.offsetWidth / 2 - 20 })

  }, [data]);

  return (
    <ResponsiveContainer>
      <PieChart >
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Pie
          data={data}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          nameKey="name"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default CustomPieChart;