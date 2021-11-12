import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
}));

function App({ label }) {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
