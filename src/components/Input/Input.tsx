import type { InputProps } from "./types";
import { InputLabelWrapper, Label, InputElement, ErrorMessage } from "./styles";

function Input({ name, type = "text", placeholder, id, label, required, onChange, value, error }: InputProps) {
  // console.log("Input render or re-render");
  const hasError = !!error;
  
  return (
    <InputLabelWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required = {required}
        hasError = {hasError}
      />
      <ErrorMessage>{error}</ErrorMessage>
      {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </InputLabelWrapper>
  );
}

export default Input;
