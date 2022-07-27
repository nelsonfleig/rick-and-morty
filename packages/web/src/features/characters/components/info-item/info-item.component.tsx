import { InfoItemWrapper } from './info-item.styles';

export type InfoItemProps = {
  label: string;
  content: string | number;
};

export const InfoItem = ({ label, content }: InfoItemProps) => (
  <InfoItemWrapper>
    <span>{label}</span>
    <p>{content}</p>
  </InfoItemWrapper>
);
