import '../../App.css';
import SearchBar from "material-ui-search-bar";

function Header() {
    return (
        <header>
            <div className="header-search">
                <SearchBar 
                    placeholder="제목 또는 내용을 검색하세요."
                />
            </div>
        </header>
    );
}
export default Header;

/* 
<SearchBar
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => doSomethingWith(this.state.value)}
/>
*/