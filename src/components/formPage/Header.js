import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";

function Header() {
    return (
        <header>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={2}>
                    <div style={{ fontWeight: "600" }}>프로젝트명 / 현재설문이름</div>
                </Grid>
                <Grid item xs={12} sm={1}>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div className="header-menu">
                        <Link to="/form/create">
                            <div className="header-menu-element">제작/설계</div>
                        </Link>
                        <Link to="/form/preview">
                            <div className="header-menu-element">미리보기</div>
                        </Link>
                        <Link to="/form/share">
                            <div className="header-menu-element">공유/배포</div>
                        </Link>
                        <Link to="/form/result">
                            <div className="header-menu-element">결과확인</div>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </header>
    );
  }
  export default Header;