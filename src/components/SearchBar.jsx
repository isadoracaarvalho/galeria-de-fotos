import '../assets/styles/searchBar.css'

export default function SearchBar({search, setSearch}) {

    return (
        <div className='search-container'>
            <input type="search" placeholder='Buscar imagem' className='search-input' value={search} onChange={(e) => setSearch(e.target.value)} />

            <button className="search-button">
                <i className='fa-solid fa-magnifying-glass'></i>
            </button>
        </div>
    );
}