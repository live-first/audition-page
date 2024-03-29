import React from 'react';
import { TextField } from '@mui/material';

interface TextFieldProps {
  required?: boolean;
  placeholder?: string;
  label?: React.ReactNode;
  type?: React.InputHTMLAttributes<unknown>['type'];
  autoComplete?: string;
  id?: string;
}

const CustomTextField = (props: TextFieldProps) => {
  const {required,placeholder,label,type,autoComplete,id} = props;
  return (
    <TextField
      required={required}
      fullWidth
      id={id}
      label={label}
      type={type}
      autoComplete={autoComplete}
      size='small'
      margin='dense'
      placeholder={placeholder}
      {...props}
    />
  );
}

export default CustomTextField;
