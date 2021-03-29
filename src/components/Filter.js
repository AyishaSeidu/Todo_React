import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";

const Filter = (props) => {
const {setFilter} = props;
const [allBorder, setAllBorder] = useState("rgba(175, 45, 45, 0.3)");
const [activeBorder, setActiveBorder] = useState("white");
const [completedBorder, setCompltedBorder] = useState("white");

//styling
const All = styled.span`
  margin-left: 20px;
 // margin: 3px;
  border: 0.5px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  color: grey;
  border-color: ${allBorder};
  padding: 0px 5px;
  &: hover {
    border: 0.5px solid transparent;
    border-radius: 3px;
    border-color: ${allBorder};
  } 
`;

const Active = styled.span`
 margin-left: 20px;
 // margin: 3px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  color: grey;
  border-color: ${activeBorder};
  padding: 0px 5px;
`;

const Completed = styled.span`
  margin-left: 20px;
 // margin: 3px;
  // padding: 3px 7px;
  // text-decoration: none;
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
                  setActiveBorder("white");
                  setCompltedBorder("white");
                }}
              >
                All
            </All>
              <Active
                onClick={() => {
                  setFilter(false);
                  setAllBorder("white");
                  setActiveBorder("rgba(175, 45, 45, 0.3)");
                  setCompltedBorder("white");
                }}
              >
                Active
            </Active>
              <Completed
                onClick={() => {
                  setFilter(true);
                  setAllBorder("white");
                  setActiveBorder("white");
                  setCompltedBorder("rgba(175, 45, 45, 0.3)");
                }}
              >
                Completed
            </Completed>

</span>
     );
}
 
export default Filter;

const FilterContainer = styled.span`

`;