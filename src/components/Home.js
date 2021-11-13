import SearchBar from "./home/SearchBar";
import Content from "./home/Content";
import Menu from "./home/Menu";
import { Grid } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <Menu />
        </Grid>
        <Grid item xs={12} sm={9}>
          <SearchBar />
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;