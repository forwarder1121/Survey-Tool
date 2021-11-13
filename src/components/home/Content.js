import '../../App.css';
import { Container, Button } from "@material-ui/core";
import NewForm from '../home/NewForm';
import FormBox from '../home/FormBox';
import { Link } from 'react-router-dom';
import { MoreHoriz } from "@material-ui/icons";

function Content() {
    return (
        <div className="content">
            <Container>
                <div>
                    <div className="content-header">
                        <div style={{ float: "left" }}>기본 프로젝트</div>
                        <div style={{ marginLeft: "150px" }}>
                            <MoreHoriz color="action" fontSize="small" />
                        </div>
                        <div>
                            <Button variant="contained" style={{ backgroundColor: "black", color: "white" }}>템플릿 갤러리</Button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="bold-title">Forms <span style={{ color: "gray" }}>0</span></div>
                <div className="form-list">
                    <Link to="/formPage">
                        <NewForm />
                    </Link>
                    <FormBox />
                    <FormBox />
                </div>
            </Container>
        </div>
    );
}
export default Content;