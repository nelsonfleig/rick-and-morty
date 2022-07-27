import { FieldHookConfig, useField } from 'formik';
import { FormGroup, FormikFieldError, FormLabel } from '../styles/form.styles';
import { FormInputField } from './formik-input.styles';

interface FormikInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

export const FormikInput = ({ label, ...props }: FormikInputProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <FormGroup fullWidth>
      <FormLabel>{label}</FormLabel>
      <FormInputField
        {...field}
        {...props}
        autoComplete="new-password"
        error={meta.touched && Boolean(meta.error)}
      />
      <FormikFieldError>{meta.touched && meta.error}</FormikFieldError>
    </FormGroup>
  );
};
