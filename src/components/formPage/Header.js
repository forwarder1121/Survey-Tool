import { Grid } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import MenuElement from "./MenuElement"
function Header() {
    return (
        <header>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={2}>
                    <div style={{ fontWeight: "600" }}>프로젝트명 / 현재설문이름</div>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <div className="material-icons">
                        <ArrowBack />
                        <ArrowForward />
                    </div>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div className="header-menu">
                        <MenuElement name="제작/설계" />
                        <MenuElement name="미리보기" />
                        <MenuElement name="공유/배포" />
                        <MenuElement name="결과확인" />
                    </div>
                </Grid>
            </Grid>
        </header>
    );
  }
  export default Header;