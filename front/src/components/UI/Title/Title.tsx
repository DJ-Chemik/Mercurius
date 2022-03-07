import React from "react";

interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => <div className="App-title"> {props.title} </div>;

export default Title;
