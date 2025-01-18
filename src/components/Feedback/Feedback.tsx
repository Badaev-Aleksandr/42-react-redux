import {
  Dislike,
  DislikeWrapper,
  FeedbackContainer,
  Like,
  LikeWrapper,
  Result,
} from "./styles"

import LikeIcon from "../../assets/like.jpg"
import DislikeIcon from "../../assets/dislike.png"

import { useAppDispatch, useAppSelector } from "../../store/hooks"

import {
  feedbackLikesSliceActions,
  feedbackLikesSliceSelectors,
} from "../../store/redux/feedback/feedbackLikesSlice"
import Button from "../Button/Button"

function Feedback() {
  const {like, dislike} = useAppSelector(feedbackLikesSliceSelectors.feedbackData)

  const dispatch = useAppDispatch()

  const addLike = () => {
    dispatch(feedbackLikesSliceActions.addLike())
  }

  const addDislike = () => {
    dispatch(feedbackLikesSliceActions.addDislike())
  }

  const resetResult = () => {
    dispatch(feedbackLikesSliceActions.resetLikes())
  }
  return (
    <FeedbackContainer>
      <LikeWrapper>
        <Like src={LikeIcon} alt="like" onClick={addLike} />
        <Result>{like}</Result>
      </LikeWrapper>
      <DislikeWrapper>
        <Dislike src={DislikeIcon} alt="dislike" onClick={addDislike} />
        <Result>{dislike}</Result>
      </DislikeWrapper>
      <Button name="Reset Results" onClick={resetResult} />
    </FeedbackContainer>
  )
}

export default Feedback
