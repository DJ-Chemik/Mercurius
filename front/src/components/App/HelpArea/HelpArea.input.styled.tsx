import styled from "styled-components";

export const HelpAreaInputStyled = styled.div`
  .Question {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .Question label {
    text-align: left;
    display: block;
  }

  .Question h2 {
    font-size: calc(10px + 2vmin);
    color: white;
    margin-bottom: 30px;
  }
  .Question select, .Question input {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }

`
