import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';
import AuthProvider from './context/AuthContext.context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <Router>
          <App />
        </Router>
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);
