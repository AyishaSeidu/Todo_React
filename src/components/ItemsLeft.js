import React from "react";
import styled from "@emotion/styled";

const ItemsLeft = (props) => {
const {tasks} = props;
let strng = "items"

let remainder = tasks.filter((item) => {
  return item.isCompleted === false;
}).length

if (remainder<=1) {
  strng="item";
}
    return (  
                 <Container>
                {`${remainder} ${strng} left `}
              </Container>
    );
}
 
export default ItemsLeft;

const Container = styled.span`
//  padding-left: 0px;;
  margin-right: 20px;
  cursor: context-menu;
  color: grey;
`;