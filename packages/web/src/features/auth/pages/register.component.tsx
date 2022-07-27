import { Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormikInput } from '../../../components/form/formik-input/formik-input.component';
import { FormLinks, FormTitle, FormWrapper } from '../../../components/form/styles/form.styles';
import { SubmitButton } from '../../../components/form/submit-button/submit-button.component';
import { FlexContainer } from '../../../components/ui/ui.styles';
import { useAuth } from '../../../hooks/useAuth';
import { registerSchema } from '../schemas/register.schema';

export const Register = () => {
  const { register } = useAuth();
  const history = useHistory();

  return (
    <FlexContainer>
      <FormWrapper>
        <FormTitle>Register</FormTitle>
        <Formik
          initialValues={{
            email: '',
            username: '',
            password: '',
          }}
          validationSchema={registerSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await register(values);
              toast.success('Registered successfully. Please log in with your credentials');
              history.push('/login');
            } catch (error) {
              if (error instanceof Error) {
                toast.error(`Could not register your account: ${error.message}`);
              }
            } finally {
              setSubmitting(false);
            }
          }}>
          {({ isSubmitting, isValid }) => (
            <Form>
              <FormikInput name="email" type="email" label="Email" fullWidth />
              <FormikInput name="username" label="Username" fullWidth />
              <FormikInput name="password" type="password" label="Password" fullWidth />
              <SubmitButton
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                text="Register"
                fullWidth
              />
            </Form>
          )}
        </Formik>
        <FormLinks>
          <Link to="/login">Already have an account?</Link>
        </FormLinks>
      </FormWrapper>
    </FlexContainer>
  );
};
