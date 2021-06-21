import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const CheckboxWrapper = ({ name, label, legend, ...restProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { checked } = e.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...restProps,
    ...field,
    onChange: handleChange
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox {...configCheckbox} />} label={label} />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
