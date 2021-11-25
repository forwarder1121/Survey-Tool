import TextField from "@material-ui/core/TextField"

function SetTimeField(props) {
    const handleButtonTextChange = (event) => {
        props.setButtonText(event.target.value);
    };
    return (
        <div>
            <div className="menu-sub-text">버튼내용설정 { props.buttonText }</div>
            <div style={{ padding: "10px 20px 20px 20px" }}>
              <TextField id="outlined-basic" label="버튼내용을 입력하세요" variant="outlined" onChange={handleButtonTextChange} fullWidth />
            </div>
        </div>
    );
}
export default SetTimeField;