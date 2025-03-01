import Button from "../Button/Button"
import { CounterContainer, CounterResult, ButtonWrapper } from "./styles"
// 9. Импортируем хуки для диспатча и селекторов
import { useAppDispatch, useAppSelector } from "../../store/hooks"
// 10. Импортируем экшены и селекторы, которые были созданы и экспортированы в файле со слайсом
import {
  counterSliceActions,
  counterSliceSelectors,
} from "../../store/redux/counter/counterSlice"

function Counter() {
  // 11. Забираем значение count из store
  const count = useAppSelector(counterSliceSelectors.count)
  console.log(count)

  const countMinusValue = 5;

  // 12. Сохраняем функции dispatch, которую возвращает хук useAppDispatch
  const dispatch = useAppDispatch()

  const onMinus = () => {
    // 13. Диспатчить экшен (индетификатор действия), который вызовет соответствующий редьюсер
    dispatch(counterSliceActions.minus(countMinusValue))
  }

  const onPlus = () => {
    // 13. Диспатчить экшен (индетификатор действия), который вызовет соответствующий редьюсер
    dispatch(counterSliceActions.plus())
  }

  return (
    <CounterContainer>
      <ButtonWrapper>
        <Button name="-" onClick={onMinus} />
      </ButtonWrapper>
      <CounterResult>{count}</CounterResult>
      <ButtonWrapper>
        <Button name="+" onClick={onPlus} />
      </ButtonWrapper>
    </CounterContainer>
  )
}

export default Counter
