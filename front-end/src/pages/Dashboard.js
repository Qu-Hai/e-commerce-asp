import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    backgroundColor: "#3f51b5",
  },
}));
const data = [
  { title: "TOTAL MONEY", value: "24000", icon: <AttachMoneyIcon /> },
  { title: "CUSTOMERS", value: "240", icon: <PersonOutlineOutlinedIcon /> },
  { title: "PRODUCTS", value: "200", icon: <LabelImportantOutlinedIcon /> },
  { title: "TOTAL MONEY", value: "24000", icon: <AttachMoneyIcon /> },
];
export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Grid container md={12} spacing={3} style={{ marginTop: 10 }}>
        {data.map((el, i) => (
          <Grid item md={3}>
            <Card key={i}>
              <CardContent className={classes.cardContent}>
                <div className={classes.divider}>
                  <Typography
                    variant="overline"
                    color="textSecondary"
                    gutterBottom
                  >
                    {el.title}
                  </Typography>

                  <Typography variant="h4" color="textSecondary" gutterBottom>
                    {el.value}
                  </Typography>
                </div>
                <Avatar className={classes.avatar}>{el.icon}</Avatar>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
