import { useEffect, useState } from "react";
import './Form.css';

const ProductForm = ({ editing, productToEdit, save }) => {

    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState({
        name: '',
        code: '',
        category_id: 1,
        option1: '',
        option2: '',
        avaliable: 0,
        in_stock: 0,
        incoming: 0,
        image: null,
        price: 0.00,
        sold: 0
    });

    useEffect(() => {
        fetchCategories();
        if (editing) {
            setProduct(productToEdit);
        }
    }, [editing, productToEdit])

    const fetchCategories = async () => {
        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/categories`);
        const data = await res.json();
        setCategories(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        save(product);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setProduct(prev => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form" id='product-form'>
            <div className="form-group">
                <label>Name</label>
                <input value={product.name} name='name' onChange={handleChange} type='text' />
            </div>
            <div className="form-group">
                <label>Code</label>
                <input value={product.code} name='code' onChange={handleChange} type='text' />
            </div>
            <div className="form-group">
                <label>Option 1</label>
                <input value={product.option1} name='option1' onChange={handleChange} type='text' />
            </div>
            <div className="form-group">
                <label>Option 2</label>
                <input value={product.option2} name='option2' onChange={handleChange} type='text' />
            </div>
            <div className="form-group">
                <label>Available</label>
                <input type='number' name='avaliable' onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>In stock</label>
                <input value={product.in_stock} name='in_stock' onChange={handleChange} type='number' />
            </div>
            <div className="form-group">
                <label>Incoming</label>
                <input value={product.incoming} name='incoming' onChange={handleChange} type='number' />
            </div>
            <div className="form-group">
                <label>Category</label>
                <select onChange={handleChange} value={product.category_id} name='category_id'>
                    {categories.map(category =>
                        <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input name='price' onChange={handleChange} value={product.price} type='number' />
            </div>
            {editing && <div className="form-group">
                <label>Sold</label>
                <input name='sold' onChange={handleChange} value={product.sold} type='number' />
            </div>}
            <button type="submit">{editing ? 'Save changes' : 'Add product'}</button>
        </form>
    )
}

export default ProductForm;
