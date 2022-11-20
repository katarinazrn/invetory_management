import { useNavigate } from "react-router-dom";
import Content from "../../UI/content/Content";
import ProductForm from "./ProductForm";

const NewProduct = () => {

    const navigate = useNavigate();

    const save = (product) => {
        fetch(`${process.env.REACT_APP_DOMAIN}/products`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        }).then(
            res => {
                if (res.status == 201) {
                    navigate('/products');
                }
            })
    }

    return (
        <Content title='New Product'>
            <ProductForm editing={false} productToEdit={null} save={save} />
        </Content>
    )
}

export default NewProduct;