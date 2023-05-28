"use client";
import { useBoardStore } from "@/store/BoradStore";
import { get } from "http";
import { useEffect } from "react";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //   <Droppable droppabledId="board" direection="horizontal" type="column">
    //     {(provided) => {
    //       <div>{/* renderin all the columns */}</div>;
    //     }}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
