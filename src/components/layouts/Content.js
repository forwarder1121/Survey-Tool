import '../../App.css';
import { Container } from "@material-ui/core";
import FormBox from '../FormBox';
import { Link } from 'react-router-dom';

function Content() {

    return (
        <Container>
            <h4 style={{color:"rgb(120, 120, 120)"}}>Workspace</h4>
            <Link to="/formPage">
                <FormBox />
            </Link>
        </Container>
    );
}
export default Content;