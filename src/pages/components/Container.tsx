import React from "react";
import styled from "styled-components";

type ContainerProps = {
  background?: string;
  width?: string | number;
};

const Container = styled.main<ContainerProps>`
  width: ${(props) => props.width};
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.background};
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export default Container;
