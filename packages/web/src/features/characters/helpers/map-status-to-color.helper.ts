import { Status } from '../../../ts/character.type';

export const mapStatusToColor = (status: Status) => {
  switch (status) {
    case Status.Alive:
      return 'rgb(85, 204, 68)';
    case Status.Dead:
      return 'rgb(214, 61, 46)';
    default:
      return 'rgb(158, 158, 158)';
  }
};
