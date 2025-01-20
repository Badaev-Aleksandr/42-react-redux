import {
  Lesson,
  LessonsPage,
  LessonsTitle,
  LessonsWrapper,
  StyledLink,
} from "./styled"

function Lessons() {
  return (
    <LessonsPage>
      <LessonsTitle>Lessons</LessonsTitle>
      <LessonsWrapper>
        <Lesson>
          <StyledLink to="lesson16">Lesson16</StyledLink>
        </Lesson>
        <Lesson>
          <StyledLink to="lesson17">Lesson17</StyledLink>
        </Lesson>
        <Lesson>
          <StyledLink to="lesson18">Lesson18</StyledLink>
        </Lesson>
      </LessonsWrapper>
    </LessonsPage>
  )
}

export default Lessons
