import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
//import { UserContextProvider } from "./context/userContext";
//import "./styles/index.scss";

//REDUX
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
    </Provider>,
  //document.getElementById('root')
);