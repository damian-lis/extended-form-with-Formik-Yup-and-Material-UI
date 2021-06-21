import React from 'react';
import Header from 'components/Header';
import { Form, Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { TextField, Select, DateTimePicker, Checkbox, Button } from 'components/FormsUI';
import { INITIAL_FORM_STATE, FORM_VALIDATION } from 'config/form';
import countries from 'data/countries.json';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <div className={classes.formWrapper}>
              <Formik
                initialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => console.log(values)}>
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>Your details</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField name="firstName" label="First Name" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField name="lastName" label="Last Name" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField name="email" label="Email" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField name="phone" label="Phone" />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>Address</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField name="addressLine1" label="Address Line 1" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField name="addressLine2" label="Address Line 2" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField name="city" label="City" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField name="state" label="State" />
                    </Grid>

                    <Grid item xs={12}>
                      <Select name="country" label="Country" options={countries} />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>Booking information</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <DateTimePicker name="arrivealDate" label="Arrival Date" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <DateTimePicker name="departureDate" label="Departure Date" />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField name="message" label="Message" multiline={true} rows={4} />
                    </Grid>

                    <Grid item xs={12}>
                      <Checkbox name="termsOfService" legend="Terms Of Service" label="I agree" />
                    </Grid>

                    <Grid item xs={12}>
                      <Button>Submit Form</Button>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
