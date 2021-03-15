
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
            status: "Active",
            readOnly: true,
          },
        ]);
      };

    return ( 

        <div>
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
      </div>
     );
}
 
export default NewTask;

const InputField = styled.input`
  top: 10px;
 // border: 1px solid #ffffff;
  //box-shadow: 0.5px grey;
  line-height: 1.4em;
  border-color: white
  margin: 0;
  font-size: 30px;
  top: 100px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
  box-sizing: border-box;
  width: 100%;
`;