import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormikInput } from '../../../components/form/formik-input/formik-input.component';
import { FormLinks, FormTitle, FormWrapper } from '../../../components/form/styles/form.styles';
import { SubmitButton } from '../../../components/form/submit-button/submit-button.component';
import { FlexContainer } from '../../../components/ui/ui.styles';
import { useAuth } from '../../../hooks/useAuth';
import { loginSchema } from '../schemas/login.schema';

export const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  return (
    <FlexContainer>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <Formik
          initialValues={{
            usernameOrEmail: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await login(values);
              toast.success('You are logged in');
            } catch (error) {
              if (error instanceof Error) {
                toast.error(error.message);
              }
            } finally {
              setSubmitting(false);
            }
          }}>
          {({ isSubmitting, isValid }) => (
            <Form>
              <FormikInput name="usernameOrEmail" label="Username or Email" fullWidth />
              <FormikInput name="password" type="password" label="Password" fullWidth />
              <SubmitButton
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                text="Login"
                fullWidth
              />
            </Form>
          )}
        </Formik>
        <FormLinks>
          <Link to="/register">Don't have an account?</Link>
        </FormLinks>
      </FormWrapper>
    </FlexContainer>
  );
};
