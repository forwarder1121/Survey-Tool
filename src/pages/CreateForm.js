import Header from '../components/formPage/Header'
import { Grid } from "@material-ui/core"

function CreateForm() {
  return (
    <div>
        <Header action="create" />
        <Grid container spacing={1}>
            <Grid item sm={2}>
              <div className="menu-wrapper">
                <div className="hor-menu-wrapper">
                  <div className="hor-menu">
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <div className="hor-menu-ele-act2">내용추가</div>
                      </Grid>
                      <Grid item sm={4}>
                        로직설계
                      </Grid>
                      <Grid item sm={4}>
                        설문설정
                      </Grid>
                    </Grid>
                  </div>
                </div>



                  <div className="bold-title">
                      <div style={{ float: "left" }}>Project <span style={{ color: "gray" }}>3</span></div>
                      <div className="icon-right">
                      </div>
                  </div>
                  <div className="menu">
                      <ul>
                          <li> 기본 프로젝트</li>
                      </ul>
                  </div>
                  <div className="menu">
                      <ul className="menu-bottom">
                          <li> 삭제된 문서 </li>
                          <li> 문의 및 피드백 </li>
                          <li> UI form 사용법 </li>
                          <li> 업데이트 노트 </li>
                      </ul>
                  </div>
              </div>
            </Grid>
            <Grid item sm={10}>
            content 영역
            </Grid>
        </Grid>
    </div>
  );
}
export default CreateForm;