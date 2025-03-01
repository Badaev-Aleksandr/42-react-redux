import Button from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import {
  JekeCard,
  JokesContainer,
  RandomJokesWrapper,
  JokeWrapper,
  ButtonWrapper,
  JokeText,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  randomJokesSliceAction,
  randomJokesSliceSelectors,
} from "../../store/redux/randomJokes/randomJokesSlice"
import type { RandomJoke } from "../../store/redux/randomJokes/types"

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

  console.log(data)

  const jokes = data.map((joke: RandomJoke) => {
    const deleteJoke = () => {
      dispatch(randomJokesSliceAction.deleteJokeById(joke.id))
    }

    return (
      <JokeWrapper key={joke.id}>
        <JokeText>{joke.joke}</JokeText>
        <ButtonWrapper>
          <Button name="Delete" onClick={deleteJoke} />
        </ButtonWrapper>
      </JokeWrapper>
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
