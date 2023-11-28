import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui'
import { getCounterValue } from '../model/selectors'
import { counterActions } from '../model/slice/counterSlice'

/* eslint-disable i18next/no-literal-string */
export const Counter = () => {
  const counterValue = useSelector(getCounterValue)
  const dispatch = useDispatch()

  const inc = () => {
    dispatch(counterActions.increment())
  }

  const dec = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid='counterValue'>value = {counterValue}</h1>
      <Button
        data-testid='incrementBtn'
        onClick={inc}
      >
        inc
      </Button>
      &nbsp;
      <Button
        data-testid='decrementBtn'
        onClick={dec}
      >
        dec
      </Button>
    </div>
  )
}