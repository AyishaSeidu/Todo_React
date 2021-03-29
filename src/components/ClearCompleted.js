import React, { useState  } from "react";
import styled from "@emotion/styled";

const ClearCompleted = (props) => {

    const {tasks, setTasks} = props;

    const clearCompleted = () => {
        let f = tasks.filter((item) => {
          return item.isCompleted === false;
        });
    
        setTasks(f);
      };

    return (  

              <RemoveCompleted
                onClick={() => {
                  clearCompleted();
                }}
              >
                Clear Completed
            </RemoveCompleted>

    );
}
 
export default ClearCompleted;

const RemoveCompleted = styled.span`
  margin-left: 20px;
  margin-right: 40px;
 // background-color: lightblue;
  cursor: pointer;
  color: grey;
  &: hover {
  text-decoration: underline;
  } 
`;