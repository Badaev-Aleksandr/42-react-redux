import styled from "@emotion/styled";

interface MainButtonProps {
  disabled: boolean;
}

export const MainButton = styled.button<MainButtonProps>`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  border: none;
  outline: none;
  gap: 10px;
  background-color: ${({ disabled }) => (disabled ? "#adacb0" : "#1f27f5")};
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 20px;
  align-items: center;
  color: #ffffff;
  line-height: 30px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 5px #666;
  transition: all 0.1s ease-in-out;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:active {
    box-shadow: ${({ disabled }) => (disabled ? "none" : " 0 2px #666")};
    transform: ${({ disabled }) => (disabled ? "unset" : "translateY(3px)")};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  }
`;
