import '../../App.css';
import { Button, Container } from "@material-ui/core";


function Content() {

    return (
        <Container>
            <div className="content">
                <h1> 1. 귀하의 '성별'은 무엇입니까?</h1>
                <div className="select">
                    <Button variant="outlined" color="secondary" 
                            style={{padding: "20px", fontSize: "20px", width: "150px"}}>
                        남자
                    </Button>
                    <Button variant="outlined" color="secondary"
                            style={{padding: "20px", fontSize: "20px", width: "150px"}}>
                        여자
                    </Button>
                </div>
            </div>
        </Container>
    );
}
export default Content;