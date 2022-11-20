import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

const CustomBarChart = ({ data }) => {

    return (
        <ResponsiveContainer maxHeight={450} >
            <BarChart data={data}>
                <Bar dataKey="value" fill="lightblue" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )
}
export default CustomBarChart;