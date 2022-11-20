const Search = ({ items, setResults }) => {

    const search = (e) => {
        const searchTerm = e.target.value.trim().toLowerCase();

        if (searchTerm == '') setResults(items);
        else {
            let results = items.filter(item => {

                for (const key in item) {
                    const value = item[key].toString().toLowerCase();
                    if (value.includes(searchTerm)) return true;
                }
                return false;
            })
            setResults(results);
        }
    }

    return (
        <input type='search' placeholder="Search" onChange={search} />
    )

}

export default Search;