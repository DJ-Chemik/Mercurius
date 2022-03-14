import React from "react";
import { CustomInputWrapper, InputWidth } from "./Input.styled";

interface InputProps {
  maxLength?: number;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  min?: string;
  max?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
  value?: string;
}

const CustomInput = (props: InputProps) => {
  return (
    <CustomInputWrapper>
      <InputWidth
      maxLength = {props.maxLength}
      name = {props.name}
      type = {props.type}
      defaultValue = {props.defaultValue}
      min = {props.min}
      max = {props.max}
      value = {props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      />
    </CustomInputWrapper>
  );
}

export default CustomInput;