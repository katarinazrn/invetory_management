import './CategoriesList.css';
import { Link } from "react-router-dom";

const CategoriesList = ({ categories, showModal, setCategoryToBeDeleted }) => {

    return (
        <ul id='categories-list'>
            {categories.map(category => <li key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
                <button className='material-icons delete-button' onClick={() => {
                    showModal(true)
                    setCategoryToBeDeleted(category.id)
                }}>delete</button>
            </li>)}
        </ul>
    )
}

export default CategoriesList;