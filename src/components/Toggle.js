import React, { useState } from "react";
import styled from "@emotion/styled";

const Toggle = (props) => {
const {tasks, setTasks} = props;
const [color, setColor] = useState("lightgrey");
  //set all tasks to either active or completed on click
  const toggleAll = () => {
    
    let hasActive = tasks.some((itm) => {
      return itm.isCompleted === false;
    });

    if (hasActive) {
     tasks.forEach((itm) => {
      let newItem = { id: itm.id, task: itm.task, isCompleted: true, edit: itm.edit };
      //replace the item with the new one created
      tasks.splice(itm.id, 1, newItem);
      setTasks([...tasks]);
      setColor("grey");
     })

    }

    else {
            tasks.forEach((itm) => {
       let newItem = { id: itm.id, task: itm.task, isCompleted: false, edit: itm.edit };
       //replace the item with the new one created
       tasks.splice(itm.id, 1, newItem);
       setTasks([...tasks]);
       setColor("lightgrey");
      })
     
    }

  }

const ToggleButton = styled.span`
display: inline-block;
//width: 20%;
// width: 150px;
// height: 80px;
font-weight: 100;
font-size: 20px;
cursor: context-menu;
-ms-transform: rotate(90deg);
transform: rotate(90deg);
-webkit-transform: rotate(90deg);
color: ${color};
`;


    return ( 
<ToggleButton onClick={()=>{toggleAll()}}>❯</ToggleButton>
     );
}
 
export default Toggle;

