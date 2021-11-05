import '../App.css';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

function FormBox() {
    return (
        <div className="form-box">
            <div className="form-box-title">New From</div>
            <AddRoundedIcon fontSize="large" style={{ color:"rgb(80, 80, 80)", margin: "35px 40px" }} />
        </div>
    );
}
export default FormBox;