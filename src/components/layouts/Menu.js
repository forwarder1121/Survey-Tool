import { Home } from "@material-ui/icons";

function Menu() {
    return (
        <div className="menu-wrapper">
            <div className="workspace">Workspace</div>
            <hr />
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