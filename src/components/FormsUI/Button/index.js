import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({ children, ...restProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...restProps,
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
