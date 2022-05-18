import React, { useState } from "react";
import Container from "../Container";

const GridItem = () => {
  return (
    <div className="rounded-[12px] bg-blue-teal animate-pulse w-full h-20"></div>
  );
};

const GridWrapper = ({ title, children }) => {
  return (
    <div className="py-2">
      <h3 className="pb-2">{title}</h3>
      {children}
    </div>
  );
};

const Grid = () => {
  const [columns, setColumns] = useState("0");
  const [gridCols, setGridCols] = useState("grid-cols-1");
  const [gridGap, setGridGap] = useState("gap-0");

  const handleColumns = (e) => {
    setColumns(e.target.value);
    setGridCols(`grid-cols-${e.target.value}`);
  };

  const gridItems = Array.from(Array(parseInt(columns)).keys());

  console.log("Grid items is: ", gridItems);
  return (
    <div>
      <Container>
        <div className="flex space-x-2">
          <input
            placeholder="columns"
            type="number"
            onChange={handleColumns}
            className="border border-blue-teal h-10 p-2 rounded-[12px]"
          />

          <input
            placeholder="gap"
            type="number"
            onChange={(e) => setGridGap(`gap-${e.target.value}`)}
            className="border border-blue-teal h-10 p-2 rounded-[12px]"
          />
        </div>

        <GridWrapper title="Grid">
          <div className={`grid ${gridCols} ${gridGap}`}>
            {gridItems.map(() => (
              <GridItem />
            ))}
          </div>
        </GridWrapper>
      </Container>
    </div>
  );
};

export default Grid;
