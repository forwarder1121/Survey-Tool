import Header from '../components/formPage/Header';
import { Grid } from "@material-ui/core";

function CreateForm({match}) {
  console.log(match);
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
export default CreateForm;