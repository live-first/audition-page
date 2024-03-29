import React from 'react';
import { Grid } from '@mui/material';
import Strings from '../const/strings.tsx';

interface Logo {
  data: Array<string>;
}

const SponsorshipView = (props: Logo) => {
  const {data} = props;

  if (!data || !data.length) {
    return (
      <Grid container spacing={2} style={{margin: '0', width: '100%'}}>
        {Strings.noData}
      </Grid>
    );
  }
  return (
    <Grid container style={{margin: '0', alignItems: 'center', justifyContent: 'center'}}>
      {Object.values(data).map((data, index) => {
        return (
          <Grid item xs={4} sm={2} key={index}>
            <img style={{width: '100%'}} alt='' src={data} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SponsorshipView;
