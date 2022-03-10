import React from "react";
import { CustomInputWrapper } from "./Input.styled";

interface CustomInputProps {
  maxLength?: number;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  min?: string;
  max?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <CustomInputWrapper>
      <input
      maxLength = {props.maxLength}
      name = {props.name}
      type = {props.type}
      defaultValue = {props.defaultValue}
      min = {props.min}
      max = {props.max}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      />
    </CustomInputWrapper>
  );
}

export default CustomInput;