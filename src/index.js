import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormProvider from './contexts/FormProvider';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <FormProvider>
    <Toaster />
    <App />
  </FormProvider>
  // </React.StrictMode>
);

