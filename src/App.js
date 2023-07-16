import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div >
     
     <h2>{count}</h2>
     <button onClick={() => dispatch(decrement())}>Decrease</button>
     <button onClick={() => dispatch(increment())} >Increase</button>
     <button onClick={() => dispatch(incrementByAmount(50))} >incrementByAmount</button>

    </div>
  );
}

export default App;


//redux toolkit
