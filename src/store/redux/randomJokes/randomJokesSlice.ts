import axios from "axios"
import { createAppSlice } from "../../createAppSlice"
import type { JOKE, RandomJokesSliceState } from "./types"
import { v4 } from "uuid"

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokesInitialState,
  //1. middleware создаем в объекте reducers вместе с обычными редьюсерами
  reducers: create => ({
    //2. Создаем middleware с помощью метода asyncThunk из объекта create
    // метод asyncThunk принимает два аргумента
    // 1-й аргумент асинхронная функция для отправки запроса
    // 2-й аргумент - объект с 3-я методами, которые обрабатывают результат выполнения асинхронноой функции
    getJoke: create.asyncThunk(
      // асинхронная функция, которая может принимать два аргумента
      //1-й - arg, он позволяет передавать данные из компонента в асинхронную функцию, например, для отправки данныъ на сервер
      // при работе с методом post
      // 2-й - thunkApi, объект, который содержит вспомогательные функции для работы с асинхронными функциями
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )
          // 3. В случае успешного завершения запроса, возвращаем полученные данные, для того,
          // чтобы получить их в обработчике fulfilled
          return result.data
        } catch (error) {
          // 4. В случае ошибки, отправляем ее в обработчик rejected с помощью метода rejectWithValue из thunkApi
          thunkApi.rejectWithValue(error)
        }
      },
      {
        // 5. Обрабатываем событие ожидания ответа
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        // 6. Обработка успешного результата
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.status = "success"
          const { id, setup, punchline } = action.payload
          const jokeObject: JOKE = { id, joke: `${setup} - ${punchline}` }
          state.data = [...state.data, jokeObject]
        },
        // 7. Обработка ошибки
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
    deleteAllJokes: create.reducer(() => randomJokesInitialState),
    deleteJokeById: create.reducer((state: RandomJokesSliceState, action: {payload: string})=>{
       state.data = state.data.filter((joke: JOKE) => joke.id !== action.payload)
    })
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state,
  },
})

export const randomJokesSliceAction = randomJokesSlice.actions
export const randomJokesSliceSelectors = randomJokesSlice.selectors
