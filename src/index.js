import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./styles/index.scss";

//REDUX
import {Provider} from 'react-redux';
import store from './redux/store';


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