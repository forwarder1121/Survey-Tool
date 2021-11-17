import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";

function Header(props) {
    const action = props.action;
    return (
        <header>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={2}>
                    <div style={{ fontWeight: "600" }}>프로젝트명 / 현재설문이름</div>
                </Grid>
                <Grid item xs={12} sm={1}>
                </Grid>
                <Grid item xs={12} sm={9}>
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
            </Grid>
        </header>
    );
  }
  export default Header;