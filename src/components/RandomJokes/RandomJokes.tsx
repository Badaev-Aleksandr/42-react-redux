import Button from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import {
  JekeCard,
  JokesContainer,
  RandomJokesWrapper,
  JokeText,
  ButtonWrapper,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  randomJokesSliceAction,
  randomJokesSliceSelectors,
} from "../../store/redux/randomJokes/randomJokesSlice"
import { v4 } from "uuid"
import type { JOKE } from "../../store/redux/randomJokes/types"

function RandomJokes() {
  const dispatch = useAppDispatch()
  const { data, error, status } = useAppSelector(
    randomJokesSliceSelectors.jokeData,
  )

  const getJoke = () => {
    dispatch(randomJokesSliceAction.getJoke())
  }

  const deleteJokes = () => {
    dispatch(randomJokesSliceAction.deleteAllJokes())
  }

  const jokeDelete = (id: string) => {
    dispatch(randomJokesSliceAction.deleteJokeById(id))
  }

  console.log(data)

  const jokes = data.map((joke: JOKE) => {
    return (
      <JokeText key={v4()}>
        {joke.joke}
        <ButtonWrapper>
          <Button name="Delete" onClick={()=> jokeDelete(joke.id)} />
        </ButtonWrapper>
      </JokeText>
    )
  })

  return (
    <RandomJokesWrapper>
      <JekeCard>
        <Button name="GET JOKES" onClick={getJoke} />
        {status === "loading" && <Spinner />}
        <JokesContainer>{jokes}</JokesContainer>
        <Button name="DELETE JOKES" onClick={deleteJokes} />
      </JekeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes
