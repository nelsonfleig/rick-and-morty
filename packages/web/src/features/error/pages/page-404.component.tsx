import { FlexContainer } from '../../../components/ui/ui.styles';
import { ErrorMessage } from '../components/error-message.component';

export const Page404 = () => (
  <FlexContainer fullHeight>
    <ErrorMessage
      statusCode={404}
      message={"We're sorry. We can't find the page you're looking for."}
    />
  </FlexContainer>
);
