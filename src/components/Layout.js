import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Menu from "./layouts/Menu";

function Layout() {
  return (
    <div className="layout">
        <Header />
        <div className="wrapper">
          <Menu />
          <Content />
        </div>
    </div>
  );
}
export default Layout;