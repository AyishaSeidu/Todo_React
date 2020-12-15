import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "@emotion/styled";

function App() {
  //create an empty array to hold all tasks
  const [tasks, setTasks] = useState([]);
  const [item, setItem] = useState("");
  const [filter, setFilter] = useState("All");
  //this array is what gets displayed depending on the filter
  const [list, setList] = useState([]);

  useEffect(() => {
    filterList(filter);
  }, [filter, tasks]);

  //function to add a new task to the array when an input is submitted
  const addTask = (tsk) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        task: tsk,
        status: "Active",
      },
    ]);
  };

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
        </div>
      </Canvas>
    );
  } else {
    return (
      <Canvas>
        <div className="App">
          <TittleContainer>todos</TittleContainer>
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

            <ListItem>
              {list.map((item) => (
                <li key={item?.id}>
                  <Checkmark
                    type="checkbox"
                    onClick={() => changeStatus(item)}
                  />
                  <Task
                    id={`item${item?.id}`}
                    value={item?.task}
                    readOnly={true}
                    onDoubleClick={() =>
                      (document.getElementById(
                        `item${item?.id}`
                      ).readOnly = false)
                    }
                  ></Task>
                </li>
              ))}
            </ListItem>
            <FooterItem>
              {` ${
                tasks.filter((item) => {
                  return item.status === "Active";
                }).length
              } Item(s) Left `}
            </FooterItem>

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
            <FooterItem
              onClick={() => {
                clearCompleted();
              }}
            >
              Clear Completed
            </FooterItem>
          </div>
        </div>
      </Canvas>
    );
  }
}

export default App;

//Formatting
const TittleContainer = styled.div`
  color: rgba(175, 47, 47, 0.25);
  top: -10px;
  width: 100%;
  font-size: 110px;
  font-weight: 400;
  text-align: center;
`;

const Canvas = styled.div`
  width: 500px;
  background-color: rgba(30, 30, 30, 0.03);
  box-shadow: 2px 2px grey;
`;
const InputField = styled.input`
  top: -10px;
  border-style: none;
  font-size: 30px;
  top: 100px;
`;

const FooterItem = styled.span`
  margin-left: 10px;
`;

const FilterItem = styled.span`
  margin-left: 10px;
`;
const ListItem = styled.ul`
  //text-decoration: line-through;
  font-family: Sans-serif;
  list-style-type: none;
`;

const Task = styled.input`
  font-size: 30px;
  border-style: solid;
  border-width: 0px 0px 0.5px 0px;
  border-color: grey;
`;

const Checkmark = styled.input`
  border-width: 2px;
  border-color: rgba(50, 50, 50, 0.7)
  border-radius: 5px;
  border-style: solid;
  border-width: 0px 0px 0.5px 0px;
  border-color: grey;
`;
