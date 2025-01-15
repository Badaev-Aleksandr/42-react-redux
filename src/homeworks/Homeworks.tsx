import {
  Homework,
  HomeworksPage,
  HomeworksWrapper,
  HomeworkTitle,
  StyledLink
} from "./styled"

function Homeworks() {
  return (
    <HomeworksPage>
      <HomeworkTitle>Homeworks</HomeworkTitle>
      <HomeworksWrapper>
        <Homework>
          <StyledLink to="*">Homework16</StyledLink>
        </Homework>
        <Homework>
          <StyledLink to="homework17">Homework17</StyledLink>
        </Homework>
        <Homework>
          <StyledLink to="homework18">Homework18</StyledLink>
        </Homework>
        <Homework>
          <StyledLink to="homework19">Homework19</StyledLink>
        </Homework>
        <Homework>
          <StyledLink to="homework20">Homework20</StyledLink>
        </Homework>
      </HomeworksWrapper>
    </HomeworksPage>
  )
}

export default Homeworks
