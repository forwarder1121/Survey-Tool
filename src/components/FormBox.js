import '../App.css';
import { MoreHoriz } from "@material-ui/icons";

function FormBox() {
    return (
        <div className="form-box">
            <div className="form-box-title">설문지 이름</div>
            <hr />
            <div className="form-box-footer">
                <div className="form-box-footer-text">응답개수 <span>1</span></div>
                <div><MoreHoriz color="action" fontSize="small" /></div>
            </div>
        </div>
    );
}
export default FormBox;