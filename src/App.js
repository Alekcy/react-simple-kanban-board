import React from 'react';
import { Provider } from 'react-redux';

import { store } from "store";
import { MainPage } from './pages/MainPage'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
