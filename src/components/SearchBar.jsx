import '../assets/styles/searchBar.css'

export default function SearchBar() {

    return (
        <div className='search-container'>
            <input type="text" placeholder='Buscar imagem' className='search-input'/>

            <button className="search-button">
                <i className='fa-solid fa-magnifying-glass'></i>
            </button>
        </div>
    );
}