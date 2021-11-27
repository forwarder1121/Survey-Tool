import Button from "@material-ui/core/Button"
import { DeleteOutlineOutlined } from "@material-ui/icons"

function SetImageField(props) {
    const handleChangeImage = (event) => {
        props.setImage(event.target.value);
    };
    return (
        <div>
            { 0 ? 
                <div>
                    <Button variant="contained" color="primary" style={{ width: "75%", left: "5%" }} onClick={test}>수정하기</Button>
                    <DeleteOutlineOutlined className="material-icons" style={{ left: "10%" }} />
                </div>
                :
                <div style={{ paddingLeft: "20px" }}>
                    <input type="file" onChange={handleChangeImage} />
                </div>
            }
        </div>
    );
}
export default SetImageField;
{/*<Button variant="contained" color="primary" style={{ width: "90%", left: "5%" }} onClick={test}>
        추가하기
</Button>*/}