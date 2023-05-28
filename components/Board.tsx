"use client";
import { useBoardStore } from "@/store/BoradStore";
import { ViewColumnsIcon } from "@heroicons/react/24/solid";
import { stat } from "fs";
import { get } from "http";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
