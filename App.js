/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {Provider} from "react-redux";
import Main from "./src/Main";
import persist from "./src/config/store";
import { PersistGate } from 'redux-persist/integration/react'

const persistStore = persist();

 class App extends Component<Props> {
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
       <Main/>
       </PersistGate>
      </Provider>
    );
  }
}


export default App;
