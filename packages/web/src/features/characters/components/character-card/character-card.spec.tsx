import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from '../../../../redux/store';
import { theme } from '../../../../theme';
import { stubCharacter } from '../../../../__tests__/mocks/characters.mocks';
import { CharacterCard } from './character-card.component';

describe('CharacterCard', () => {
  const Providers = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
  test('renders the character name', () => {
    render(
      <Providers>
        <CharacterCard character={stubCharacter} />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const name = screen.getByText(stubCharacter.name);

    expect(name).toBeInTheDocument();
  });
  test('renders the character image', () => {
    render(
      <Providers>
        <CharacterCard character={stubCharacter} />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
  });

  test('not to render type of not given', () => {
    render(
      <Providers>
        <CharacterCard character={stubCharacter} />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const typeLabel = screen.queryByText(/type/i);
    expect(typeLabel).not.toBeInTheDocument();
  });
});
