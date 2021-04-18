import React from "react";
import styled from "@emotion/styled/macro";
import {css} from "@emotion/react";

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
                <Checkmark onClick={() => changeStatus(item)} compStatus = {item?.isCompleted}></Checkmark>
                    
                  <TextContainer
             
                    // htmlFor={`item ${item?.id}`}
                    onDoubleClick={() => makeEditable(item)}
                    onClick={(e) => e.preventDefault()}
                  compStatus={item.isCompleted}>
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
  font-family: Sans-serif;
  list-style-type: none;
  display: block;
`;
const Checkmark = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  position: fixed;
  height: 25px;
  width: 25px;
  border: 0.5px solid lightgrey;
  border-radius: 50px;
  align-items: center;
  & :checked {
    background-color: grey;
  }
  ${({ compStatus }) => compStatus && css`
  border-color: rgba(0,180,0, 0.2);
    &:after {
      content: '\\2713';
      font-size: 20px;
      position: absolute;
      color: rgba(0,180,0, 0.8);;
      margin-top: -10px;
      margin-right: -5px;
      margin-left: -5px;
      margin-bottom: 10px;
    }
  `}

  /* @media (max-width: 480px) {
  font-size: 16px;
  width: 14px;
  height:14x;
  } */
  `;

const TextContainer = styled.div`
  font-size: 24px;
  opacity: 0.7;
  margin-left: 50px;
  position: relative;
  padding-left: 20px;
  height: 100%;
  color: ${props=> props.compStatus? "lightgrey": "black"};
  text-decoration: ${props=> props.compStatus? "line-through": "none"};

  /* @media (max-width: 480px) {
  font-size: 16px;
  } */
`;



const EditableTask = styled.input`
  font-size: 25px;
  border: 0.5px solid lightgrey;
  outline: none;
  width: 90%;
  top: 30px;
`;
const TaskContainer = styled.div`
  line-height: 3em;
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
 /* @media (max-width: 480px) {
  font-size: 16px;
 } */
 `;
