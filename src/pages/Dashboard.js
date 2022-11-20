import { useEffect, useState } from "react";
import DashboardCards from "../components/dashboard/dashboardCards/DashboardCards";
import Charts from "../components/dashboard/dashboardCharts/Charts";
import Content from "../components/UI/content/Content";
import MainContent from "../components/UI/mainContent/MainContent";

const Dashboard = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, [])

    const fetchProducts = async () => {
        let res = await fetch(`${process.env.REACT_APP_DOMAIN}/products`);
        let data = await res.json();

        setProducts(data);
    }

    const fetchCategories = async () => {
        let res = await fetch(`${process.env.REACT_APP_DOMAIN}/categories`);
        let data = await res.json();

        setCategories(data);
    }
    return (
        <Content title='Dashboard'>
            <MainContent>
                <DashboardCards products={products} categories={categories} />
            </MainContent>
            <MainContent>
                <Charts products={products} categories={categories} />
            </MainContent>
        </Content>
    )
}

export default Dashboard;