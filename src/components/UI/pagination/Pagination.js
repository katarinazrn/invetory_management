import { useEffect, useState } from "react";
import './Pagination.css';

const Pagination = ({ items, limitPerPage, setItems }) => {

    const [previous, setPrevious] = useState(0);
    const [current, setCurrent] = useState(1);
    const [next, setNext] = useState(2);
    const [last, setLast] = useState('');

    useEffect(() => {
        setLast(Math.ceil(items.length / limitPerPage));
        updateItems(1);
    }, [items])

    const updateCurrent = (value) => {
        setCurrent(value);
        setPrevious(value - 1);
        setNext(value + 1);
        updateItems(value);
    }

    const updateItems = (currentValue) => {
        let firstItem = limitPerPage * (currentValue - 1);
        let lastItem = firstItem + limitPerPage;
        setItems(items.slice(firstItem, lastItem));
    }

    if (items.length <= limitPerPage) return;

    return (
        <div id='pagination'>
            {last > 2 && previous != last && 1 != current && 1 != previous && <div><button id='first' onClick={() => updateCurrent(1)}>1</button><span>...</span></div>}
            {previous > 0 && <button id='previous' onClick={() => updateCurrent(previous)}>{previous}</button>}
            <button id='current'>{current}</button>
            {next <= last && <button id='next' onClick={() => updateCurrent(next)}>{next}</button>}
            {last > 2 && last != next && current != last && <div><span>...</span><button id='last' onClick={() => updateCurrent(last)}>{last}</button></div>}
        </div>
    )

}

export default Pagination;