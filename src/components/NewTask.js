
import React, { useState,  } from "react";
import styled from "@emotion/styled";

const NewTask = (props) => {
    const {tasks, setTasks} = props;     
    const [item, setItem] = useState("");

    const addTask = (tsk) => {
        setTasks([
          ...tasks,
          {
            id: tasks.length,
            task: tsk,
            isCompleted: false,
            edit: false,
          },
        ]);
      };

    return ( 

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask(item);
            document.getElementById("taskInput").value = "";
          }}
        >
          <InputField
            id="taskInput"
            placeholder="What needs to be done?"
            onChange={(e) => {
              e.preventDefault();
              setItem(e.target.value);
            }}
            type="text"
          ></InputField>
        </form>
     );
}
 
export default NewTask;

const InputField = styled.input`
 line-height: 1.4em;
  margin: 0;
  font-size: 30px;
  background-color: white;
  top: 100px;
  border: 1px solid white;
  box-sizing: border-box;
  width: 80%;
  &::placeholder {
    font-size: 25px;
    font-style: italic;
    color: grey;
    backgound: white;
    opacity: 0.3;
  }
  &:focus {
    outline: none;
  }
`;