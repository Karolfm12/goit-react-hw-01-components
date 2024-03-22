import { App } from 'components/App';
import { FriendList } from 'components/FriendList';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { TransactionHistory } from 'components/TransactionHistory';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import statData from './jsons/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics title="Upload stats" stats={statData} />
    <FriendList />
    <TransactionHistory />
    <App />
  </React.StrictMode>
  // <BrowserRouter basename="/Karolfm12/">
  //   <App />
  // </BrowserRouter>
);
