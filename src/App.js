import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "@emotion/styled";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";

function App() {
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
        return item.status === filter;
      });

      setList(f);
    }
  };

  //changing task status on double click
  const changeEditStatus = (itm) =>{
    let id = itm.id;

    let stat = false;
  
      let newItem = { id: itm.id, task: itm.task, status: itm.status, readOnlyStatus: stat };
      //replace the item with the new one created
      tasks.splice(id, 1, newItem);
      setTasks([...tasks]);

};

//editTask
const updateTask = (itm,updatedTask) => {
  let id = itm.id;
  
  let newItem = { id: itm.id, task: updatedTask, status: itm.status, readOnlyStatus: itm.itm.readOnlyStatus };
  //replace the item with the new one created
  tasks.splice(id, 1, newItem);
  setTasks([...tasks]);
};

  //changing task status
  const changeStatus = (itm) => {
    let stat = "";
    let id = itm.id;

    if (itm.status === "Active") {
      stat = "Completed";
    } else if (itm.status === "Completed") {
      stat = "Active";
    }

    let newItem = { id: itm.id, task: itm.task, status: stat };
    //replace the item with the new one created
    tasks.splice(id, 1, newItem);
    setTasks([...tasks]);
  };

  //delete completed tasks

  const clearCompleted = () => {
    let f = tasks.filter((item) => {
      return item.status === "Active";
    });

    setTasks(f);
  };
  //browser output

  if (tasks.length == 0) {
    return (
      <Canvas>
        <div className="App">
          <TittleContainer>todos</TittleContainer>
<NewTask tasks={tasks} setTasks={setTasks}/>
        </div>
      </Canvas> 
    );
  } else {
    return (
      <Canvas>
        <div className="App">
          <TittleContainer>todos</TittleContainer>
          <div>
          <NewTask tasks={tasks} setTasks={setTasks}/>

          <ListItem>
        {list.map((item) => (
          <li key={item?.id}>
            <Checkmark
              type="checkbox"
              onClick={() => changeStatus(item)}
            />
            <Task
              id={item?.id}
            >{item?.task}</Task>
       
          </li>
        ))}
        
      </ListItem>
            <Footer>
            <ItemsLeft>
              {` ${
                tasks.filter((item) => {
                  return item.status === "Active";
                }).length
              } Item(s) Left `}
            </ItemsLeft>

            <FilterItem
              onClick={() => {
                setFilter("All");
              }}
            >
              All
            </FilterItem>
            <FilterItem
              onClick={() => {
                setFilter("Active");
              }}
            >
              Active
            </FilterItem>
            <FilterItem
              onClick={() => {
                setFilter("Completed");
              }}
            >
              Completed
            </FilterItem>
            <RemoveCompleted
              onClick={() => {
                clearCompleted();
              }}
            >
              Clear Completed
            </RemoveCompleted>
            </Footer>
          </div>
        </div>
      </Canvas>
    );
  }
}

export default App;

//CSS
const TittleContainer = styled.div`
  color: rgba(175, 47, 47, 0.25);
  top: -10px;
  width: 100%;
  font-size: 90px;
  font-weight: 500;
  text-align: center;
`;

const Canvas = styled.div`
  width: 500px;
 // box-shadow: 2px 2px grey;
  position: absolute;
  top: 20%;
  bottom: 20%;
  left: 30%;
  right: 50%;
  margin: -25px 0 0 -25px
  backgroud-color: white;
`;
const InputField = styled.input`
  top: 10px;
 // border: 1px solid #ffffff;
  //box-shadow: 0.5px grey;
  line-height: 1.4em;
  border-color: white;
  outline: none;
  margin: 0;
  font-size: 30px;
  top: 100px;
  border: none;
  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
  box-sizing: border-box;
  width: 100%;
`;

const ItemsLeft = styled.span`
  padding-left: -5px;;
  margin-right: 20px;
  cursor: pointer;
`;

const RemoveCompleted = styled.span`
  margin-left: 20px;
  margin-right: 40px;
  background-color: lightblue;
  cursor: pointer;
`;

const FilterItem = styled.span`
  margin-left: 20px;
  background-color: lightblue;
  cursor: pointer;

`;

const Footer = styled.div`
width: 100%;
`;
const ListItem = styled.ul`
  //text-decoration: line-through;
  font-family: Sans-serif;
  list-style-type: none;
`;

const Task = styled.div`
  text-align: left
  font-size: 25px;
  border-style: solid;
  border-width: 0px 0px 0.5px 0px;
  //border-color: grey;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
  box-sizing: border-box;
  top: 30px;
`;

const EditableTask = styled.input`
  font-size: 25px;
  border-style: solid;
  border-width: 0px 0px 0.5px 0px;
  border-color: grey;
  width: 100%;
  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
  box-sizing: border-box;
  top: 30px;
`;

const Checkmark = styled.input`
  float: left;
  border-width: 2px;
  border-color: rgba(50, 50, 50, 0.7)
  border-radius: 5px;
  border-style: solid;
  border-width: 0px 0px 0.5px 0px;
  border-color: grey;
`;


