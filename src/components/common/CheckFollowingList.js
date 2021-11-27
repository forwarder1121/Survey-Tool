import * as React from 'react';
import Switch from "@material-ui/core/Switch"
import SelectField from "./SelectField"

function CheckFollowingList(props) {
    const handleChecked = (event) => {
        props.checkedChange(event.target.checked);
    }
    const handleList = (option) => {
        props.listChange(option);
    }
    return (//props -> checked, listItems, listSelected, checkedChange, listChange
        <div>
            <div style={{ display: "flex" }}>
                <div className="menu-sub-text">시간설정</div>
                <div className="menu-right-align">
                  <Switch color="primary" checked={props.checked} onChange={handleChecked} />
                </div>
            </div>
            { props.checked && <SelectField items={props.listItems} setItem={handleList} selected={props.listSelected} /> }
        </div>
    );
}
export default CheckFollowingList;