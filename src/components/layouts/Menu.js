import { Home } from "@material-ui/icons";

function Menu() {
    return (
        <div className="menu-wrapper">
            <div className="menu-title">이름(UI form?)</div>
            <div className="menu-userInfo">
                <div style={{ marginBottom: "5px" }}>사용자 이름</div>
                <div className="user-email">email_ID@gmail.com</div>
            </div>
            <div className="menu">
                <ul>
                    <li><Home />My workspace</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
        </div>
    );
  }
  export default Menu;