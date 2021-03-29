import React from "react";
import styled from "@emotion/styled/macro";

const TodoList = (props) => {
  const { tasks, setTasks } = props;
  const { list } = props;

  //changing task status
  const changeStatus = (itm) => {
    let stat = "";
    let id = itm.id;

    if (itm.isCompleted === false) {
      stat = true;
    } else if (itm.isCompleted === true) {
      stat = false;
    }

    let newItem = { id: itm.id, task: itm.task, isCompleted: stat, edit: itm.edit };
    //replace the item with the new one created
    tasks.splice(id, 1, newItem);
    setTasks([...tasks]);
  };
  //changing task status on double click
  const makeEditable = (itm) => {
    let id = itm.id;

    let stat = true;

    let newItem = {
      id: itm.id,
      task: itm.task,
      isCompleted: itm.isCompleted,
      edit: stat,
    };
    //replace the item with the new one created
    tasks.splice(id, 1, newItem);
    setTasks([...tasks]);
  };

  //editTask
  const updateTask = (itm, newTaskName, keyTyped) => {
    let id = itm.id;
    let editStatus = itm.edit;
    console.log(keyTyped);

    if ((keyTyped === 13) || (keyTyped=='none')) {
      editStatus = false;
    }

    let newItem = {
      id: itm.id,
      task: newTaskName,
      isCompleted: itm.isCompleted,
      edit: editStatus,
    };
    //replace the item with the new one created
    tasks.splice(id, 1, newItem);
    setTasks([...tasks]);
  };

  //remove Item from list
  const removeItem = (itmID) => {
    let newTsk = tasks.filter((item) => {
      return item.id != itmID;
    });
    //  let newTsk = tasks.splice(itm.id,1);
    setTasks([...newTsk]);
  };

  return (
    <div>
      <ListItem>
        {list.map((item) => (
          <div key={item?.id}>
            {item?.edit ? (
              <div>
                <EditableTask
                  type="text"
                  onBlur={(e) => updateTask(item, e.target.value, 'none')}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      updateTask(item, e.target.value, e.keyCode);
                    }
                  }}
                  onChange={(e) => {
                    e.preventDefault();
                    updateTask(item, e.target.value, e.keyCode);
                  }}
                  value={item?.task}
                ></EditableTask>
              </div>
            ) : (
              <TaskContainer>
                <div style={{ display: "flex" }}>
                  <TextContainer
                    // htmlFor={`item ${item?.id}`}
                    onDoubleClick={() => makeEditable(item)}
                    onClick={(e) => e.preventDefault()}
                  compStatus={item.isCompleted}>
                    {/* <Checkbox
                      type="checkbox"
                      id={`item ${item?.id}`}
                      checked="checked"
                    /> */}
                    <Checkmark onClick={() => changeStatus(item)} compStatus = {item?.isCompleted}></Checkmark>
                    {item?.task}
                  </TextContainer>
                </div>
                <DeleteButton onClick={() => removeItem(item?.id)} buttonColor="#cc9a9a">
                  x
                </DeleteButton>
              </TaskContainer>
            )}
          </div>
        ))}
      </ListItem>
    </div>
  );
};

export default TodoList;

const DeleteButton = styled.span`
  margin-right: 20px;
  //color: ${props=> props.buttonColor};
  color: white;
`;

const ListItem = styled.div`
  //text-decoration: line-through;
  font-family: Sans-serif;
  list-style-type: none;
  display: block;
`;
const Checkbox = styled.input`
  //float: left;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;


const Checkmark = styled.div`
  margin-left: -40px;
  position: fixed;
  height: 25px;
  width: 25px;
  border: 0.5px solid grey;
  border-radius: 50px;
  & :checked {
    background-color: grey;
  }
  ${({ compStatus }) => compStatus && `
  border-color: green;
    &:after {
      content: '\\2713';
      font-size: 20px;
      position: absolute;
      top: 0px;
      left: 4px;
      bottom: 1px;
     // margin: 1px;
      color: green;
    }
  `}
`;

const TextContainer = styled.div`
  //float: left;
  font-size: 25px;
  opacity: 0.7;
  // border-style: solid;
  margin-left: 30px;
  //display: inline;
  position: relative;
  padding-left: 20px;
  color: ${props=> props.compStatus? "lightgrey": "black"};
  text-decoration: ${props=> props.compStatus? "line-through": "none"};
  // &:hover ${Checkbox} ~.${Checkmark} {
  //   background-color: grey;
  // }
  //height: 200%;
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
const TaskContainer = styled.div`
  height: 50px;
  align-items: center;
  border-width: 0.5px 0px 0.5px 0px;
  border-color: lightgrey;
  border-style: solid;
  display: flex;
  justify-content: space-between;
 &:hover ${DeleteButton} {
   color: #cc9a9a;
   font-weight: 200;
   cursor: context-menu;
 }
`;
