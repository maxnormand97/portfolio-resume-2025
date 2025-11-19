import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  type DragEndEvent,
  type DragOverEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable';
import { KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { css, keyframes } from '@emotion/react';

const languages = [
  { id: '1', name: 'JavaScript' },
  { id: '2', name: 'Python' },
  { id: '3', name: 'Java' },
  { id: '4', name: 'C++' },
  { id: '5', name: 'TypeScript' },
  { id: '6', name: 'Go' },
  { id: '7', name: 'Ruby' },
];

// TODO:
// 1. Make them floating so they don't sort through each other
export default function CodeRevealer() {
  const [items, setItems] = useState(languages);
  const [combiningId, setCombiningId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null); // Track the current "over" item

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragOver = (event: DragOverEvent) => {
    const { over } = event;
    setOverId(over?.id ? String(over.id) : null); // Update the "over" state
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setOverId(null); // Reset the "over" state

    if (!over) return;

    if (active.id !== over.id) {
      setCombiningId(String(over.id)); // Set the combining state to the target item's ID

      setTimeout(() => {
        setItems((prev) => {
          const activeIndex = prev.findIndex((item) => item.id === active.id);
          const overIndex = prev.findIndex((item) => item.id === over.id);

          // Combine items if dropped on another item
          if (overIndex !== -1) {
            const combinedItem = {
              id: `${prev[overIndex].id}-${prev[activeIndex].id}`,
              name: `${prev[overIndex].name} + ${prev[activeIndex].name}`,
            };

            const newItems = prev.filter(
              (_, index) => index !== activeIndex && index !== overIndex
            );

            newItems.splice(overIndex, 0, combinedItem);
            return newItems;
          }

          // Otherwise, reorder items
          return arrayMove(prev, activeIndex, overIndex);
        });

        setCombiningId(null); // Reset the combining state after the animation
      }, 300); // Match the duration of the CSS animation
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragOver={handleDragOver} // Handle drag over events
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map((item) => item.id)}>
        <Box sx={{ width: '100%', p: 4 }}>
          {items.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id}
              name={item.name}
              isCombining={combiningId === item.id}
              isOver={overId === item.id} // Pass the "over" state
            />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
}

function SortableItem({
  id,
  name,
  isCombining,
  isOver,
}: {
  id: string;
  name: string;
  isCombining: boolean;
  isOver: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  const combiningAnimation = keyframes`
    0% { transform: scale(1); background-color: #e0e0e0; }
    50% { transform: scale(1.1); background-color: #ffcc80; }
    100% { transform: scale(1); background-color: #e0e0e0; }
  `;

  const combiningStyle = isCombining
    ? css`
        animation: ${combiningAnimation} 0.3s ease-in-out;
      `
    : undefined;

    const overStyle = isOver
    ? {
        backgroundColor: '#ffc0cb', // Use backgroundColor instead of bgcolor
      }
    : {};

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      sx={{
        ...style,
        ...combiningStyle,
        ...overStyle,
        p: 2,
        mb: 2,
        backgroundColor: 'grey.300',
        borderRadius: 2,
        cursor: 'grab',
        boxShadow: 1,
      }}
    >
      <Typography>{name}</Typography>
    </Box>
  );
}