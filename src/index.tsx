import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi', numberOfLike: '2 likes' },
  { id: 2, message: 'I am cat', numberOfLike: '5 likes' },
  { id: 2, message: 'Mяу', numberOfLike: '10 likes' },
];

let dialogs = [
  { id: 1, name: 'Victoriya' },
  { id: 2, name: 'Nikita' },
  { id: 3, name: 'Dima' },
  { id: 4, name: 'Alisa' },
  { id: 5, name: 'Nastya' },
  { id: 6, name: 'Luis' },
];

let messages = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'Do u know IT-KAMASUTRA?' },
  { id: 3, message: 'Do u know Serebrynka-city?!' },
  { id: 4, message: 'Yo!' },
  { id: 5, message: 'Hi, Viktor' },
  { id: 6, message: 'Полетели!' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} doalogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
