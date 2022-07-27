import { FlexContainer } from '../../../components/ui/ui.styles';
import { ErrorMessage } from '../components/error-message.component';

export const Page401 = () => (
  <FlexContainer fullHeight>
    <ErrorMessage statusCode={401} message={"We're sorry. We can't let you access this page"} />
  </FlexContainer>
);
