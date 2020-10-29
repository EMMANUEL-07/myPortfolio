import React from 'react';
import Outline from './screens/Outline'
import Content from './screens/Content'
import './App.css';
import {Provider} from 'react-redux'
import {createStore } from 'redux'
import reducer from './store/reducer'

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Outline  />
        <Content />
      </div>
    </Provider>
    
  );
}

export default App;
