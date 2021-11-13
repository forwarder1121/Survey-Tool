import '../../App.css';
import Search from "material-ui-search-bar";

function SearchBar() {
    return (
        <header>
            <div className="header-search">
                <Search 
                    placeholder="제목 또는 내용을 검색하세요."
                />
            </div>
        </header>
    );
}
export default SearchBar;

/* 
<SearchBar
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => doSomethingWith(this.state.value)}
/>
*/