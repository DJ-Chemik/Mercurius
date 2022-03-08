import { render } from "@testing-library/react";
import React from "react";
import './Title.styled.ts';
import {TitleLook} from "./Title.styled";



interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => {
  return( 
    <TitleLook> {props.title} </TitleLook>);
}

export default Title;
