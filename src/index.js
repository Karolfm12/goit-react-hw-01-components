import { App } from 'components/App';
import { FriendList } from 'components/FriendList';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import statData from './jsons/data.json';

// const tasks = [App, Profile];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics title="Upload stats" stats={statData} />
    <FriendList />
    <App />
  </React.StrictMode>
  // <BrowserRouter basename="/Karolfm12/">
  //   <App />
  // </BrowserRouter>
);
