import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import Delete from '@material-ui/icons/DeleteOutlineRounded';
import './KanbanBoard.scss';

const KanbanBoard = ({ board, setTrackerModal, setShowModal, setCurrentClub }) => {
  
  const [appTrackerColumns, setColumns] = useState({
    columns: {
      "column-1": {
        id: "column-1",
        name: "Interested",
        clubIds: board.interested_clubs,
      },
      "column-2": {
        id: "column-2",
        name: "Applied",
        clubIds: board.applied_clubs,
      },
      "column-3": {
        id: "column-3",
        name: "Interview",
        clubIds: board.interviewed_clubs,
      }
    },
    columnOrder: ["column-1", "column-2", "column-3"]
  });
  
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = appTrackerColumns.columns[source.droppableId];
    const finish = appTrackerColumns.columns[destination.droppableId];

    if (start === finish) {
      const newClubIds = Array.from(start.clubIds);
      newClubIds.splice(source.index, 1);
      newClubIds.splice(destination.index, 0, appTrackerColumns.columns[source.droppableId].clubIds[source.index]);

      const newColumn = {
        ...start,
        clubIds: newClubIds
      };

      const newAppTrackerColumns = {
        ...appTrackerColumns,
        columns: {
          ...appTrackerColumns.columns,
          [newColumn.id]: newColumn
        }
      }

      setColumns(newAppTrackerColumns);
      return;
    } else {
      const startColumnIds = Array.from(start.clubIds);
      startColumnIds.splice(source.index, 1);
      const newStart = {
        ...start,
        clubIds: startColumnIds,
      };

      const finishColumnIds = Array.from(finish.clubIds);
      finishColumnIds.splice(destination.index, 0, appTrackerColumns.columns[source.droppableId].clubIds[source.index]);
      const newFinish = {
        ...finish,
        clubIds: finishColumnIds,
      };

      const newAppTrackerColumns = {
        ...appTrackerColumns,
        columns: {
          ...appTrackerColumns.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      }
      setColumns(newAppTrackerColumns);
      return;
    }
  }

  function deleteClub(club, index, column) {
    const start = appTrackerColumns.columns[column.id];

    const startColumnIds = Array.from(start.clubIds);
    startColumnIds.splice(index, 1);
    const newStart = {
      ...start,
      clubIds: startColumnIds,
    };

    const newAppTrackerColumns = {
      ...appTrackerColumns,
      columns: {
        ...appTrackerColumns.columns,
        [newStart.id]: newStart,
      }
    }
    setColumns(newAppTrackerColumns);
    return;
  }

  return (
    <div className="dashboard-app-tracker-content">
      <DragDropContext
        onDragEnd = {onDragEnd}>
        {appTrackerColumns.columnOrder.map((columnId) => {
          const column = appTrackerColumns.columns[columnId];
            return(
              <div key={column.id}>
                <h3>{column.name}</h3>
                <Droppable droppableId = {column.id}>
                  {provided => (
                    <div
                    className="dashboard-app-tracker-list"
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                      {column.clubIds.length > 0 ? (
                        column.clubIds.map((club, index) => {
                          return (
                            <Draggable key={club.name} draggableId={club.name} index={index}>
                              {provided =>
                                <div className="dashboard-clubcard"
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <div className="dashboard-clubcard-section-left"
                                    onClick={() =>  {
                                      setShowModal(true);
                                      setCurrentClub(club);
                                      }
                                    }
                                  >
                                    <div className="dashboard-clubcard-title">
                                      <img
                                        className="dashboard-clubicon"
                                        src={club.icon || require('../assets/default_logo.jpg')}
                                        alt="icon"
                                      />
                                      <h4 className="dashboard-clubcard-clubname">{club.name}</h4>
                                    </div>
                                  </div>
                                  <div className="dashboard-clubcard-section-right">
                                    <div className="dashboard-clubcard-btns">
                                      <button className="dashboard-clubcard-remove">
                                        <Delete className="dashboard-clubcard-delete" 
                                          onClick={() => deleteClub(club, index, column)}
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              }
                            </Draggable>
                            )
                          })
                        ) : (
                          <span>No clubs.</span>
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <div>
                  {column.id === "column-1" &&
                  <button
                    className="dashboard-add-interested"
                    onClick={() => setTrackerModal(true)}>
                    + New
                  </button>}
                </div>
              </div>
            )})}
      </DragDropContext>
    </div>
  )
}

export default KanbanBoard;
