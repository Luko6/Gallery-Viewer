import './App.css';

import { Routes, Route } from 'react-router-dom';

import List from './pages/List/List';
import Navbar from './layouts/Navbar/Navbar';

import './assets/App.scss';

import store from './store/index';
import * as Links from './routes';
import Favorites from './pages/Favorites/Favorites';
import Detail from './pages/Detail/Detail';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className='app-container'>
          <Navbar />
          <main>
            <Routes>
              <Route index element={<List />} />
              <Route path={Links.Favorites} element={<Favorites />} />
              <Route path={Links.Details + '/:id'} element={<Detail />} />
              <Route path='*' element={<List />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
