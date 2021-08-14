

const Search=(props)=>(
    <div id="SearchBar">
    <form action="/All/1" method="get" >
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="search"
            autoComplete="off"
            onChange={(e)=>props.onChange(e)}
        />
    </form>
    </div>
)

export default Search;