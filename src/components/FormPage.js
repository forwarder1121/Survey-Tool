import { Grid } from "@material-ui/core";
import Header from './formPage/Header';

function FormPage() {
  return (
    <div>
      <Header />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          menu 영역
        </Grid>
        <Grid item xs={12} sm={9}>
          content 영역
        </Grid>
      </Grid>
    </div>
  );
}
export default FormPage;