import { useSelector, useDispatch } from 'react-redux';

import reactLogo from './assets/react.svg';
import './App.css';

import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const valueIncrement = 5;

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(valueIncrement))}>
          Increment by {valueIncrement}
        </button>
      </div>
    </div>
  );
}

export default App;
