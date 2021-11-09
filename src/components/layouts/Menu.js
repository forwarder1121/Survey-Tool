import { Home, CreateNewFolder } from "@material-ui/icons";

function Menu() {
    return (
        <div className="menu-wrapper">
            <div className="menu-title">이름(UI form?)</div>
            <div className="menu-userInfo">
                <div style={{ marginBottom: "5px" }}>사용자 이름</div>
                <div className="user-email">email_ID@gmail.com</div>
            </div>
            <div className="menu-project">
                <span>Project </span>
                <span style={{ color: "gray" }}>3</span>
                <div style={{ float: "right" }}>
                <CreateNewFolder color="action" />
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>기본 프로젝트</li>
                </ul>
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