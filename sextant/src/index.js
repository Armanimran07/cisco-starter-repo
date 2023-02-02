import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// banner start component 

const Banner = () => (
  <header>
    <h1>Welcome To Cisco</h1>
  </header>
);

export default Banner;

// banner component end 

// exhibit component start

const Exhibit = ({ heading, children }) => {
  return (
    <div className="exhibit">
      <h3 className="exhibit-heading">{heading}</h3>
      <div className="exhibit-children">
        {children}
      </div>
    </div>
  );
};

// exhibit component end 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
