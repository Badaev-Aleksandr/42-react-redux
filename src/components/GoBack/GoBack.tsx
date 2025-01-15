import Button from "components/Button/Button";

import { GoBackWrapper } from "./styles";

import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
      <GoBackWrapper>
        <Button name="Go back" onClick={goBack} />
      </GoBackWrapper>
  );
}

export default GoBack;