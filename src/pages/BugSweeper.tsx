import React from 'react';
import Tile from '../components/bug-sweeper/Tile'

const BugSweeper: React.FC = () => {
  // TODO:
  // This will be like a mini minesweeper game but for bugs. The user will see something like the old minesweeper windows
  // game from the 2000s. There will be a bunch of tiles (we can make it configurable later) and within each tile there
  // may or may not be a bug. Use the rules from the classic minesweeper game for this.

  // Rules are as follows (according to AI)

    // The game board is a grid of covered cells, some containing mines.
    // The player clicks cells to reveal them.
    // If a mine is revealed, the game ends (loss).
    // If a cell without a mine is revealed, it shows a number indicating how many adjacent cells contain mines (0–8).
    // Revealing a cell with zero adjacent mines automatically reveals all adjacent cells recursively.
    // The player can flag cells suspected to contain mines.
    // The game is won when all non-mine cells are revealed.
    // The player loses if a mine is revealed.

  // 1. we need to generate a function that creates a bunch of divs that look like tiles, the div is probably better to be
  // its own component.

  // 2. It makes sense for the tile to contain a state, if its a bug or not, if it has been clicked or not (active - inactive) we
  // should add this as props to the Tile. We could also have a tile interface as well

  function generateTiles(rows: number, cols: number) {
    const tiles = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        tiles.push(<Tile key={`${r}-${c}`} />);
      }
    }
    return tiles;
  }

  const rows = 8;
  const cols = 8;

  return (
    <div style={{ width: cols * 36 }}>
      {generateTiles(rows, cols)}
    </div>
  );
};

export default BugSweeper;