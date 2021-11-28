import Divider from "@material-ui/core/Divider"
import Switch from "@material-ui/core/Switch"
import FormControl from "@material-ui/core/FormControl"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import TextField from "@material-ui/core/TextField"
import CheckFollowingOption from "../common/CheckFollowingOption"

function ExitField(props) {
    const handleExitChecked = (event) => {
        props.exitCheckedChange(event);
    }
    const handleExitLink = (event) => {
        props.exitLinkChange(event.target.value);
    }
    const handleExitCustomLink = (event) => {
        props.exitCustominkChange(event.target.value);
    }
    return (
        <div>
            <Divider />
            <CheckFollowingOption name="출구버튼링크" checked={props.data.exitChecked} checkedChange={handleExitChecked} 
                option={ props.data.exitChecked && 
                    <div style={{ paddingLeft: "20px" }}>
                        <FormControl component="fieldset">
                        <RadioGroup defaultValue="기본값" name="radio-buttons-group" onChange={handleExitLink}>
                            <FormControlLabel value="기본값" control={<Radio />} label="기본값" />
                            <FormControlLabel value="사용자 지정" control={<Radio />} label="사용자 지정" />
                        </RadioGroup>
                        </FormControl>
                        { props.data.exitCustomLinkChecked &&     
                        <div style={{ padding: "10px 20px 20px 20px" }}>
                        <TextField value={props.data.exitCustomLink} id="outlined-basic" label="URL을 입력하세요" variant="outlined" onChange={handleExitCustomLink} fullWidth />
                </div>}
            </div> } />
        </div>
    );
}
export default ExitField;