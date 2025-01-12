import styled from "@emotion/styled"

const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  margin: 10px;
`
export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`
export const DislikeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`
export const Dislike = styled(StyledImg)``

export const Like = styled(StyledImg)``

export const Result = styled.p`
  margin: 5px;
  font-size: 36px;
`
