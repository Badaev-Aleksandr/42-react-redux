import Button from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import {
  JekeCard,
  JokesContainer,
  RandomJokesWrapper,
  JokeText,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  randomJokesSliceAction,
  randomJokesSliceSelectors,
} from "../../store/redux/randomJokes/randomJokesSlice"
import { v4 } from "uuid"

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

  const jokes = data.map((joke: any) => {
    return (
      <JokeText key={v4()}>
        {joke.setup} - {joke.punchline}
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
