import { decrement, increment, incrementByAmount } from './redux-test/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store'

export function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const decCount = useSelector((state: RootState) => state.counter.value)
  const countByAmount = useSelector((state: RootState) => state.counter.value2);
  const dispatch = useDispatch();
  let amount = 10;

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span role='contentinfo'>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span role='textbox'>{decCount}</span>
      </div>
      <div>
        <span aria-label='amount value'>{amount}</span>
        <button
          aria-label="Increment value by amount"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Increment By Amount
        </button>
        <span aria-label='amount counter'>{countByAmount}</span>
      </div>
    </div>
  )
}