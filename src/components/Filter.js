import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";

const Filter = (props) => {
const {setFilter} = props;
const [allBorder, setAllBorder] = useState("rgba(175, 45, 45, 0.3)");
const [activeBorder, setActiveBorder] = useState("none");
const [completedBorder, setCompltedBorder] = useState("none");

//styling
const All = styled.span`
  margin-left: 20px;
  border: 0.5px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  color: grey;
  border-color: ${allBorder};
  padding: 0px 5px;
  &:hover {
    border: 0.5px solid transparent;
    border-radius: 3px;
    border-color: ${allBorder};
  } 
`;

const Active = styled.span`
 margin-left: 20px;
   border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  color: grey;
  border-color: ${activeBorder};
  padding: 0px 5px;
`;

const Completed = styled.span`
  margin-left: 20px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  color: grey;
  border-color: ${completedBorder};
  padding: 0px 5px;
`;

//browser output

    return ( 

      <span>
              <All
                onClick={() => {
                  setFilter("All");
                  setAllBorder("rgba(175, 45, 45, 0.3)");
                  setActiveBorder("none");
                  setCompltedBorder("none");
                }}
              >
                All
            </All>
              <Active
                onClick={() => {
                  setFilter(false);
                  setAllBorder("none");
                  setActiveBorder("rgba(175, 45, 45, 0.3)");
                  setCompltedBorder("none");
                }}
              >
                Active
            </Active>
              <Completed
                onClick={() => {
                  setFilter(true);
                  setAllBorder("none");
                  setActiveBorder("none");
                  setCompltedBorder("rgba(175, 45, 45, 0.3)");
                }}
              >
                Completed
            </Completed>

</span>
     );
}
 
export default Filter;