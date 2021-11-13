import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Menu from "./layouts/Menu";
import { Grid } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <Menu />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Header />
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;