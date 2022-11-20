import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Content from "../../UI/content/Content";
import MainContent from "../../UI/mainContent/MainContent";
import ProductForm from "../productForm/ProductForm";

const EditProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct();
    }, [id])

    const fetchProduct = async () => {
        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/products/${id}`);
        const data = await res.json();
        setProduct(data);
    }

    const save = (product) => {
        fetch(`${process.env.REACT_APP_DOMAIN}/products/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, ...product })
        }).then(
            res => {
                if (res.status == 200) {
                    navigate('/products');
                }
            })
    }

    return (
        <Content title='Edit Product'>
            <MainContent>
                <ProductForm editing={true} productToEdit={product} save={save} />
            </MainContent>
        </Content>
    )
}

export default EditProduct;