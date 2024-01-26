import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { store } from './redux/store';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <App />
    <ToastContainer autoClose={2000} />
  </BrowserRouter>

  // </Provider>
);
