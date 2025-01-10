// libraries / utilites
import { createRoot } from 'react-dom/client';

// components
import { React, StrictMode } from 'react'
import App from './App.jsx'

// styles
import './main.css';


const root = createRoot(document.getElementById('root'));

// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );

root.render(
    <App />
);
