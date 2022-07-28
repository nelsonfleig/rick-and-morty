import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { vi } from 'vitest';
import { store } from '../../../../redux/store';
import { theme } from '../../../../theme';
import { mockCharacterList } from '../../../../__tests__/mocks/characters.mocks';
import { Characters } from './characters.component';
import { useGetCharactersListQuery } from '../../../../redux/characters/character.api';

describe('Characters', () => {
  const Providers = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );

  test('show an empty message if data array is empty', () => {
    render(
      <Providers>
        <Characters />
      </Providers>,
      { wrapper: BrowserRouter }
    );

    vi.spyOn(useGetCharactersListQuery, 'useGetCharactersListQuery').mockImplementationOnce(
      async () => ({
        data: {
          meta: mockCharacterList.meta,
          data: [],
        },
      })
    );

    const errorMsg = screen.getByText(/no items/);

    expect(errorMsg).toBeInTheDocument();
  });
});
