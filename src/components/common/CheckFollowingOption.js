import * as React from 'react';
import Switch from "@material-ui/core/Switch"

function CheckFollowingOption(props) {
    const handleChecked = (event) => {
        props.checkedChange(event.target.checked);
        console.log(event.target.checked);
    }
    return (//props -> name, checked, checkedChange, option
        <div>
            <div style={{ display: "flex" }}>
                <div className="menu-sub-text">{props.name}</div>
                <div className="menu-right-align">
                  <Switch color="primary" checked={props.checked} onChange={handleChecked} />
                </div>
            </div>
            { props.checked && props.option }
        </div>
    );
}
export default CheckFollowingOption;