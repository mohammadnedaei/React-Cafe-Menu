import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "./assets/components/Header/Header";

function App() {

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={4}>
            <div>2</div>
          </Grid>
          <Grid item xs={4}>
            <div>3</div>
          </Grid>
          <Grid item xs={8}>
            <div>4</div>
          </Grid>
        </Grid>
      </Box>
  )
}

export default App
