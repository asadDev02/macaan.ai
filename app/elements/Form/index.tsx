import React from 'react';
import { FormProps } from './props';

export const Form = ({ onSubmit, children, ...restProps }: FormProps) => {
  return (
    <React.Fragment>
      <form onSubmit={onSubmit} {...restProps}>
        {children}
      </form>
    </React.Fragment>
  );
};

export default Form;
