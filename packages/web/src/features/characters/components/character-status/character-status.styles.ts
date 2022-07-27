import styled from 'styled-components';
import { flex } from '../../../../theme';
import { Status } from '../../../../ts/character.type';
import { mapStatusToColor } from '../../helpers/map-status-to-color.helper';

export const CharacterStatusWrapper = styled.div`
  font-size: 14px;
  ${flex('row', 'flex-start', 'center')};
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Circle = styled.span<{ status: Status }>`
  height: 10px;
  width: 10px;
  display: block;
  border-radius: 50%;
  background-color: ${({ status }) => mapStatusToColor(status)};
`;
