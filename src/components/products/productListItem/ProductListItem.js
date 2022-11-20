import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ProductListItem.css';

const ProductListItem = ({ product, setShowDeleteModal, setProductToBeDeleted }) => {

    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        setCategoryNameFromId();
    }, [product])

    const setCategoryNameFromId = async () => {
        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/categories/${product.category_id}`);
        const data = await res.json();
        setCategoryName(data.name);
    }

    return (
        <React.Fragment>
            <tr className="item">
                <td>{product.id}</td>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.option1}</td>
                <td>{product.option2}</td>
                <td>{product.avaliable}</td>
                <td>{product.in_stock}</td>
                <td>{product.incoming}</td>
                <td>{categoryName}</td>
                <td>{product.price}</td>
                <td>{product.sold}</td>
                <td>
                    <Link to={`/edit-product/${product.id}`} className='edit-button'>
                        <span title='edit' className="material-icons">edit</span>
                    </Link>
                    <button onClick={() => {
                        setShowDeleteModal();
                        setProductToBeDeleted(product.id)
                    }} className='delete-button'>
                        <span title='delete' className="material-icons">delete</span>
                    </button>
                </td>
            </tr>

        </React.Fragment>
    )
}

export default ProductListItem;