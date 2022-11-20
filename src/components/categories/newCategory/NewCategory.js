import { useRef } from "react";
import './NewCategory.css';

const NewCategory = ({ addCategory }) => {

    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        fetch(`${process.env.REACT_APP_DOMAIN}/categories`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })
        }).then(
            res => {
                if (res.status == 201) {
                    return res.json();
                }
            })
            .then(data => {
                addCategory(data);
                nameRef.current.value = '';
            })
    }

    return (
        <form id='new-category' onSubmit={handleSubmit}>
            <input placeholder="New category name" type='text' ref={nameRef} />
            <button type="submit">Create category</button>
        </form>
    )
}

export default NewCategory;