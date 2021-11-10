import '../App.css';
import { NoteAddOutlined } from "@material-ui/icons";

function FormBox() {
    return (
        <div className="form-box">
            <div className="new-form-box">
                <NoteAddOutlined color="action" fontSize="small" />Easy form 만들기
            </div>
        </div>
    );
}
export default FormBox;