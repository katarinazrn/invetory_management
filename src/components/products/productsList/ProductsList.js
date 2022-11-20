import { useState } from "react";
import Pagination from "../../UI/pagination/Pagination";
import Modal from "../../UI/modal/Modal";
import ProductListItem from "../productListItem/ProductListItem";
import './ProductsList.css';

const ProductsList = ({ products }) => {

    const [items, setItems] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToBeDeleted, setProductToBeDeleted] = useState(-1);

    const deleteProduct = () => {
        fetch(`${process.env.REACT_APP_DOMAIN}/products/${productToBeDeleted}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setItems(items.filter(item => item.id != productToBeDeleted));

            setProductToBeDeleted(-1);
            setShowDeleteModal(false);
        });
    }

    return (
        <div id='products'>
            <table id='products-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Available</th>
                        <th>In stock</th>
                        <th>Incoming</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(product =>
                        <ProductListItem setProductToBeDeleted={setProductToBeDeleted} setShowDeleteModal={() => setShowDeleteModal(true)}
                            key={product.id} product={product} />)}
                </tbody>
            </table>
            <Pagination items={products} limitPerPage={10} setItems={setItems} />
            <Modal message='Are you sure you want to delete this product?'
                confirm={deleteProduct} cancel={() => setShowDeleteModal(false)} show={showDeleteModal} />
        </div>
    )
}

export default ProductsList;