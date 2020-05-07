import React from 'react';

import SignIn from './pages/SignIn';
import AppProvider from './hooks';

import ToastContainer from './components/ToastContainer';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
