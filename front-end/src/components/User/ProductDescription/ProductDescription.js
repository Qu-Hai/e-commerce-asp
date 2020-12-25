import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));
export default function ProductDescription() {
  const classes = useStyles();
  return (
    <Paper variant="outlined">
      <Typography variant="subtitle2" className={classes.root}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minus
        corrupti in praesentium dignissimos at, officia cum nihil veniam placeat
        enim optio facere, sapiente, esse magnam incidunt. Corrupti amet
        perferendis aliquam voluptas. Architecto inventore earum pariatur sequi
        necessitatibus quos doloremque asperiores. Cum, optio, accusamus ratione
        asperiores itaque odio ullam sed soluta necessitatibus consequatur quasi
        ipsum! Voluptas odit laborum animi iusto quae rerum, ad amet cumque
        dolorum eum, reiciendis cum repellendus repudiandae architecto officiis
        incidunt? Exercitationem ipsa voluptas, quaerat aliquid quidem labore
        aut delectus a sit inventore eligendi distinctio odio excepturi
        voluptatibus in est eveniet porro fugiat temporibus, vitae nostrum
        necessitatibus itaque dolorem! Eius tempore dolores odit magni? Harum
        ratione tempora culpa nesciunt necessitatibus vitae iusto corrupti
        aperiam voluptas. Repellat, quaerat.
      </Typography>
    </Paper>
  );
}
