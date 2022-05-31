import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { lightTheme } from './components/Themes';
import GlobalStyle from './globalStyle';

// components
import About from './components/About';
import Main from './components/Main';
import MySkils from './components/MySkils';
import Work from './components/Work';
import { AnimatePresence } from 'framer-motion';
import Soundbar from './subComponents/Soundbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Soundbar />

        <AnimatePresence exitBeforeEnter>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/About" element={<About />} />
              <Route path="/MySkils" element={<MySkils />} />
              <Route path="/Work" element={<Work />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
