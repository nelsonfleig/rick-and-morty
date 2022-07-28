import { clsx } from 'clsx';
import { PaginationItems } from './pagination.styles';

type PaginationItemProps = {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PaginationItem = ({ page, currentPage, onPageChange }: PaginationItemProps) => {
  const clsxProps = {
    'page-item': true,
    active: page === currentPage,
  };
  return (
    <li className={clsx(clsxProps)}>
      <button type="button" onClick={() => onPageChange(page)}>
        <span className="page-link">{page}</span>
      </button>
    </li>
  );
};

const range = (start: number, end: number) => [...Array(end).keys()].map((el) => el + start);

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = range(1, totalPages);

  return (
    <PaginationItems>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          page={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}
    </PaginationItems>
  );
};
