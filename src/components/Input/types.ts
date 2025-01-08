import { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: "text" | "email" | "password" | "tel" | "checkbox";
  placeholder?: string;
  id?: string;
  label?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
}
