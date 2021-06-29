import React, { memo } from "react";
import styled from "styled-components";

import If from "../template/If";

const Button = styled.button`
  margin-right: 5px;
`;

const IconButton = (props) => {
  return (
    <If test={!props.hide}>
      <Button className={`btn btn-${props.type}`} onClick={props.onClick}>
        <i className={`fa fa-${props.icon}`}></i>
      </Button>
    </If>
  );
};

export default memo(IconButton);
