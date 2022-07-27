import React from 'react';
import { Loader } from '../../ui/ui.styles';
import { StyledButton } from './submit-button.styles';

interface Props {
  disabled: boolean;
  loading: boolean;
  text?: string;
  fullWidth?: boolean;
}

export const SubmitButton = ({ disabled, loading, text, fullWidth }: Props) => (
  <StyledButton type="submit" disabled={disabled} fullWidth={fullWidth}>
    {loading ? <Loader /> : text}
  </StyledButton>
);
