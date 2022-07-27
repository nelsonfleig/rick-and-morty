import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store';
import { Routes } from './routes/routes.component';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer position="bottom-center" />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
