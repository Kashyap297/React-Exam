import logo from './logo.svg';
import './App.css';
import Test from './Test/Test';
import { Provider } from 'react-redux';
import store from './Redux/Storem';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Test />
      </Provider>
    </>
  );
}

export default App;
