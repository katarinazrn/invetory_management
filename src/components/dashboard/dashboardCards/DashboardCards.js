import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import './DashboardCards.css';

const DashboardCards = ({ products, categories }) => {

    const [data, setData] = useState({
        totalProducts: 0,
        totalCategories: 0,
        lowInStock: 0,
        outOfStock: 0
    })

    useEffect(() => {
        setData({
            totalProducts: products.length,
            totalCategories: categories.length,
            lowInStock: getLowInStock(),
            outOfStock: getOutOfStock()
        }
        )
    }, [products, categories])

    const getLowInStock = () => {
        const stockMinLimit = 5;
        return products.filter(product => product.in_stock < stockMinLimit).length;
    }

    const getOutOfStock = () => {
        return products.filter(product => product.in_stock == 0).length;
    }

    return (
        <div id="dashboard-cards">
            <InfoCard text='Total products' value={data.totalProducts} />
            <InfoCard text='Total categories' value={data.totalCategories} />
            <InfoCard text='Low stock products' value={data.lowInStock} />
            <InfoCard text='Out of stock products' value={data.outOfStock} />
        </div>
    )
}

export default DashboardCards;