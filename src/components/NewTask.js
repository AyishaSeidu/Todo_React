
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
          autoComplete='off' 
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
  line-height: 2em;
  margin-left: 15px;
  font-size: 25px;
  background-color: white;
  top: 100px;
  border: 1px solid white;
  box-sizing: border-box;
  width: 100%;
  /* @media (max-width: 480px) {
  font-size: 15px;
  //width: 50%;
} */
  &::placeholder {
    font-size: 24px;
    font-style: italic;
    color: grey;
    width: 100%;
    opacity: 0.3;
  /* @media (max-width: 480px) {
  font-size: 15px;
  width: 50%;
} */
  }
  &:focus {
    outline: none;
  }
`;