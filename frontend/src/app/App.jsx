// @ts-nocheck
import React, { useState, useEffect } from "react";

const App = () => {
  const [targetIndices, setTargetIndices] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/level1/1/level2/10/level3/1", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setTargetIndices(data.data);
          console.log(data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function NestedList({ depth, items, targetIndices, colorName }) {
    if (depth === 0) {
      return null;
    }
  
    return (
      <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
        {items.map((item, index) => {
          return (
            targetIndices[3 - depth] === index + 1?
            <>
          <li key={index} style={depth === 1?{ color: colorName }:{color: "black"}}>
            {depth === 1 ? (
              item.value
            ) : (
              <>
              {item.value}
              <NestedList depth={depth - 1} items={item.children} targetIndices={targetIndices} colorName={colorName}/>
              </>
            )}
          </li>
          </>
          :
          <>
          <li key={index} style={{ color: "black" }}>
            {depth === 1 ? (
              item.value
            ) : (
              <>
              {item.value}
              <NestedList depth={depth - 1} items={item.children} targetIndices={targetIndices} colorName={"black"}/>
              </>
            )}
          </li>
          </>
        )}
        
        )}
      </ul>
    );
  }

  function generateItems(depth, count) {
    if (depth === 0) {
      return [];
    }

    const items = [];
    for (let i = 0; i < count; i++) {
      const children = generateItems(depth - 1, count);
      items.push({
        value: `Item ${i + 1}`,
        children: children,
      });
    }
    return items;
  }

  const depth = 3;
  const count = 10;
  const nestedList = generateItems(depth, count);

  return (
    <>
      <div>
        <h1>Nested List</h1>
        <NestedList depth={depth} items={nestedList} targetIndices={targetIndices} colorName={"red"}/>
      </div>
    </>
  );
};

export default App;
