import React from "react";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import GoogleButton from "react-google-button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(theme => ({
  logo: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  logoImg: {
    cursor: "pointer",
    width: 100,
  },
  share: {
    display: "flex",
    alignItems: "center",
  },
  divider: {
    flexGrow: 1,
  },
  typo: {
    margin: theme.spacing(2),
  },
}));
export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/");
  };
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid container justify="center" className={classes.logo}>
          <img
            src="logo_qh.png"
            alt="logo"
            className={classes.logoImg}
            onClick={handleRedirect}
          />
        </Grid>
        <Card>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Login
            </Typography>

            <Grid container direction="column" justify="center" spacing={3}>
              <Grid item>
                <GoogleButton
                  label="Login with Google"
                  type="light"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item className={classes.share}>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2" className={classes.typo}>
                  OR
                </Typography>

                <Divider className={classes.divider} />
              </Grid>
              <Grid item>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" fullWidth>
                  LOGIN
                </Button>
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="/resigter">Create new account</Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
