//1. импортируем функцию, с помощью которой создаем slice
import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../createAppSlice"
import type { CounterStateSlice } from "./types"

//4.1 Создаем объект с первоночальным состоянием, который мы потом передаем в initialState
const counterInitialState: CounterStateSlice = {
  count: 0,
}

//2. Создание slice для counter
export const counterSlice = createAppSlice({
  // 3. задаем имя, под которым будет храниться объект соо значением каунтера (state) в глобальном state
  name: "COUNTER",
  // 4. Задаем объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  // 5. Создаем объект, внутри которого будут храниться редьюсеры(функции, которые отвечают за изменение состояния)
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer(
      (state: CounterStateSlice, action: PayloadAction<number>) => {
        state.count = state.count - action.payload
      },
    ),
  }),
  // 6. Создаем селекторы, которые позволяют забрать данные из стейта в компонент
  selectors: {
    count: (state: CounterStateSlice) => state.count,
  },
})

// 7. Экспорт экшена и селекторов для возможности их использования в компонентах
export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors
