import styled from 'styled-components';

export const PaginationItems = styled.ul`
  display: inline-block;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;

  .page-item {
    display: inline;
  }
  .page-item:first-child .page-link {
    margin-left: 0;
    border-bottom-left-radius: ${({ theme }) => theme.styles.borderRadius};
    border-top-left-radius: ${({ theme }) => theme.styles.borderRadius};
  }
  .page-item:last-child .page-link {
    border-bottom-right-radius: ${({ theme }) => theme.styles.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.styles.borderRadius};
  }
  .page-item.active .page-link,
  .page-item.active .page-link:focus,
  .page-item.active .page-link:hover {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .page-item.disabled .page-link,
  .page-item.disabled .page-link:focus,
  .page-item.disabled .page-link:hover {
    color: #818a91;
    pointer-events: none;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }
  .page-link {
    position: relative;
    float: left;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .page-link:focus,
  .page-link:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #eceeef;
    border-color: #ddd;
  }
`;
