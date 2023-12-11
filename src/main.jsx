import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { WebWorld } from './WebWorld';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <WebWorld />
    </BrowserRouter>
  // </React.StrictMode>
)
