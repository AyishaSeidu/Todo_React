import React from "react";
import styled from "@emotion/styled";
import Filter from "./Filter";
import ItemsLeft from "./ItemsLeft";
import ClearCompleted from "./ClearCompleted";

const Footer = (props) => {
    const {tasks, setTasks} = props;
    const {filter, setFilter} = props;

    return (  

          <FooterContainer>
          <ItemsLeft tasks={tasks}/>
          <Filter setFilter={setFilter}/>
          <ClearCompleted tasks={tasks} setTasks={setTasks}/>
          </FooterContainer>

    );
}
 
export default Footer;

const FooterContainer = styled.div`
margin-top: 20px;
align-items: center;
height: 30px;
@media (max-width: 500px) {
  font-size: 13px;
 }
`;