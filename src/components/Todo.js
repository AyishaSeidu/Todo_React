import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import NewTask from "./NewTask";
import TodoList from "./TodoList";
import Footer from "./Footer";
import Toggle from "./Toggle";

function Todo() {
  //create an empty array to hold all tasks
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  //this array is what gets displayed depending on the filter
  const [list, setList] = useState([]);

  useEffect(() => {
    filterList(filter);
  }, [filter, tasks]);

  //filtering the list of items to be displayed
  const filterList = (filter) => {
    if (filter === "All") {
      setList([...tasks]);
    } else {
      let f = tasks.filter((item) => {
        return item.isCompleted === filter;
      });

      setList(f);
    }
  };

  //browser output

  if (tasks.length === 0) {
    return (
      <div>
        <TittleContainer>todos</TittleContainer>
        <Canvas>
          <NewTask tasks={tasks} setTasks={setTasks} />
        </Canvas>
      </div>
    );
  } else {
    return (
      <div>
        <TittleContainer>todos</TittleContainer>
        <Canvas>
          <InputandToggle>
            <Toggle tasks={tasks} setTasks={setTasks} />
            <NewTask tasks={tasks} setTasks={setTasks} />
          </InputandToggle>
          <TodoList tasks={tasks} setTasks={setTasks} list={list} />
          <Footer
            tasks={tasks}
            setTasks={setTasks}
            filter={filter}
            setFilter={setFilter}
          />
        </Canvas>
      </div>
    );
  }
}

export default Todo;

//CSS
const TittleContainer = styled.div`
  color: rgba(175, 47, 47, 0.2);
  font-size: 100px;
  font-weight: 500;
  text-align: center;
  opacity: 0.7;
`;

const Canvas = styled.div`
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  background: white;
`;

const InputandToggle = styled.div`
  display: flex;
`;
