import { useEffect, useState } from 'react';
import CustomPieChart from './CustomPieChart';
import './Charts.css';
import CustomBarChart from './CustomBarChart';

const Charts = ({ products, categories }) => {

  const [productsNameSold, setProductsNameSold] = useState([]);
  const [productsInCategory, setProductsInCategory] = useState([]);

  useEffect(() => {
    [].sort()
    const sortedProducts = products.sort((p1, p2) => p1.sold > p2.sold ? -1 : 1);
    let bestSelers = sortedProducts.slice(0, 5);
    const restSold = sortedProducts.slice(5).reduce((sum, element) => sum + element.sold, 0);

    bestSelers = bestSelers.map(product => { return { name: product.name, value: +product.sold } });
    bestSelers.push({ name: 'rest', value: restSold });
    setProductsNameSold(bestSelers);
    setProductsInCategory(categories.map(category => {
      return {
        name: category.name,
        value: products.filter(product => product.category_id == category.id).length
      }
    }).sort((c1, c2) => c1.value > c2.value ? -1 : 1));

  }, [products, categories]);

  return (
    <div id='charts'>
      <div className='chart-container'>
        <h5>Best selers</h5>
        <div className='chart'>
          <CustomPieChart data={productsNameSold} />
        </div>
      </div>
      <div className='chart-container'>
        <h5>Products count by category</h5>
        <div className='chart'>
          <CustomBarChart data={productsInCategory} />
        </div>
      </div>
    </div>
  )
}

export default Charts;