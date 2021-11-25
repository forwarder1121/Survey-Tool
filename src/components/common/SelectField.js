import * as React from 'react';
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import OutlinedInput from "@material-ui/core/OutlinedInput"

function SelectField(props) {
    const [item, setItem] = React.useState('');
    const handleChange = (event) => {
        setItem(event.target.value);
        props.setItem(event.target.value);
        console.log(1);
    };
    return (//props -> items, setItem, disabled, placeholder, selectedIndex 
        <div style={{ padding: "10px 20px 20px 20px" }}>
            {item}
            이부분 초기화 필요함
            <FormControl fullWidth>
              <Select value={ props.disabled ? -1 : item } disabled={props.disabled} onChange={handleChange} input={<OutlinedInput />}>
                <MenuItem disabled value="-1">
                  {props.placeholder && props.placeholder}
                </MenuItem>
                {props.items.map((item, index) => (
                  <MenuItem key={index} value={index} disabled={item==='-----'}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
        </div>
    );
}
export default SelectField;