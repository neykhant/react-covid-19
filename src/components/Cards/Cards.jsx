import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from 'react-countup';
// import styles from "./Cards.module.css";

import style from "./Cards.module.css";
import cx from 'classnames';

const Cards = ( { data: {confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return 'Loading...';
    }
//   console.log(props);
  return (
    <div className={style.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={ 12} md={3} className={cx(style.card, style.infected)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected </Typography>
            <Typography variant="h5"><Countup start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              {" "}
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={ 12} md={3} className={cx(style.card, style.recovered)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered  </Typography>
            <Typography variant="h5">
            <Countup start={0} end={recovered.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              {" "}
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={ 12} md={3} className={cx(style.card, style.deaths)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
            <Countup start={0} end={deaths.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              {" "}
              Number of Deaths caused by  COVID-19
            </Typography>
          </CardContent>
        </Grid>

      </Grid>
    </div>
  );
};

export default Cards;
