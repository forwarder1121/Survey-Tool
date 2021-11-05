import '../../App.css';
import { Container } from "@material-ui/core";
import FormBox from '../FormBox';

function Content() {

    return (
        <Container>
            <h4 style={{color:"rgb(120, 120, 120)"}}>Workspace</h4>
            <FormBox />
        </Container>
    );
}
export default Content;