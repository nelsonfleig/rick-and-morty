import { MessageContainer } from './error-message.styles';

type ErrorMessageProps = {
  statusCode?: number;
  message: string;
};

export const ErrorMessage = ({ statusCode, message }: ErrorMessageProps) => (
  <MessageContainer>
    {statusCode && <h2>{statusCode}</h2>}
    <p>{message}</p>
  </MessageContainer>
);
