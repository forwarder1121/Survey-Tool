import { Link } from 'react-router-dom'
import { Grid, Button } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"


function Header(props) {
    const action = props.action;
    return (
        <header>
            <Grid container spacing={1}>
                <Grid item sm={3}>
                    <div style={{ fontWeight: "600" }}>메인 웹사이트 / 타임폼즈</div>
                </Grid>
                <Grid item sm={6}>
                    <div className="hor-menu">
                        <Link to="/form/create">
                            <div className={ action === "create" ? "hor-menu-ele-act" : "hor-menu-ele" }>제작/설계</div>
                        </Link>
                        <Link to="/form/preview">
                            <div className={ action === "preview" ? "hor-menu-ele-act" : "hor-menu-ele" }>미리보기</div>
                        </Link>
                        <Link to="/form/share">
                            <div className={ action === "share" ? "hor-menu-ele-act" : "hor-menu-ele" }>공유/배포</div>
                        </Link>
                        <Link to="/form/result">
                            <div className={ action === "result" ? "hor-menu-ele-act" : "hor-menu-ele" }>결과확인</div>
                        </Link>
                    </div>
                </Grid>
                <Grid item sm={3} style={{ textAlign:"right" }}>
                    <Button variant="contained" color="primary" size="small">회사정보</Button>
                    <span style={{ padding: "0px 10px", position: "relative", top: "13px"}}>
                        <AccountCircle  fontSize="large" />
                    </span>
                </Grid>
            </Grid>
        </header>
    );
  }
  export default Header;