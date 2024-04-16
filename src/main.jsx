import react from 'react';
import reactDom from 'react-dom/client';
import App from './App';

const element = document.getElementById('root');
const root = reactDom.createRoot(element);
root.render(<App />);