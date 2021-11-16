import SearchBar from "../components/home/SearchBar";
import Content from "../components/home/Content";
import Menu from "../components/home/Menu";
import { Grid } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={2}>
          <Menu />
        </Grid>
        <Grid item sm={10}>
          <SearchBar />
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;