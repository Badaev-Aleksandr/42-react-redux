import styled from "@emotion/styled";

interface MainInputProp {
  hasError: boolean;
}

export const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Label = styled.label`
  font-family: "Times New Roman", Times, serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6f6f6f;
`;

export const InputElement = styled.input<MainInputProp>`
  padding: 12px;
  gap: 10px;
  border: 1px solid
    ${({ hasError }) => (hasError ? "rgb(252, 0, 0)" : "3f3f3f")};
  border-radius: 4px;
  background: #ffffff;

  &::placeholder {
    opacity: 40%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1e1e1e;
  }
`;
export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 16px;
`;
