import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "../components/UI/search/Search";
import Options from "../components/UI/options/Options";
import Content from "../components/UI/content/Content";
import MainContent from "../components/UI/mainContent/MainContent";
import ProductsList from '../components/products/productsList/ProductsList';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [title, setTitle] = useState('Products');

    const { categoryId } = useParams();

    useEffect(() => {
        fetchProducts();
        if (categoryId) {
            setCategoryNameAsTitle();
        }
        else {
            setTitle('Products');
        }
    }, [categoryId]);


    const setCategoryNameAsTitle = async () => {
        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/categories/${categoryId}`);
        const data = await res.json();
        setTitle(data.name);
    }

    const fetchProducts = async () => {
        let url = `${process.env.REACT_APP_DOMAIN}/products`;
        let res = await fetch(categoryId ? `${url}?category_id=${categoryId}` : url);
        let data = await res.json();

        setProducts(data);
        setSearchResults(data);
    }

    return (
        <Content title={title}>
            <Options>
                <Search items={products} setResults={setSearchResults} />
                <Link to='/new-product' className="btn">Create new product</Link>
            </Options>
            <MainContent>
                {searchResults.length > 0 && <ProductsList products={searchResults} />}
                {searchResults.length == 0 && <b>No results</b>}
            </MainContent>
        </Content>
    )
}

export default Products;