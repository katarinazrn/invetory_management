import { useEffect, useState } from 'react';
import CategoriesList from '../components/categories/categoriesList/CategoriesList';
import NewCategory from '../components/categories/newCategory/NewCategory';
import Content from '../components/UI/content/Content';
import Modal from '../components/UI/modal/Modal';
import Options from '../components/UI/options/Options';
import MainContent from '../components/UI/mainContent/MainContent';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [categoryToBeDeleted, setCategoryToBeDeleted] = useState(-1);

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = async () => {
        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/categories`);
        const data = await res.json();
        setCategories(data);
    }

    const addCategory = (newCategory) => {
        setCategories(prev => {
            return [newCategory, ...prev]
        })
    }

    const deleteProductsFromCategory = async (id) => {
        let res = await fetch(`${process.env.REACT_APP_DOMAIN}/products?category_id=${id}`);
        let data = await res.json();

        data.forEach(product => deleteProduct(product.id));
    }

    const deleteProduct = (id) => {
        fetch(`${process.env.REACT_APP_DOMAIN}/products/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => console.log('deleted', id))
    }

    const deleteCategory = () => {
        fetch(`${process.env.REACT_APP_DOMAIN}/categories/${categoryToBeDeleted}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            deleteProductsFromCategory(categoryToBeDeleted);
            setCategories(categories.filter(item => item.id != categoryToBeDeleted));
            setShowDeleteModal(false);
            setCategoryToBeDeleted(-1);
        });
    }

    return (
        <Content title='Categories'>
            <Modal show={showDeleteModal}
                message='Are you sure you want to delete this category and all associated products?'
                confirm={deleteCategory} cancel={() => setShowDeleteModal(false)} />
            <Options>
                <NewCategory addCategory={addCategory} />
            </Options>
            <MainContent>
                <CategoriesList setCategoryToBeDeleted={setCategoryToBeDeleted}
                    showModal={setShowDeleteModal} categories={categories} />
            </MainContent>
        </Content>
    )
}

export default Categories;