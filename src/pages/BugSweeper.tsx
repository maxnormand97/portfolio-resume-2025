import { useState } from 'react';
import Tile from '../components/bug-sweeper/Tile'

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

interface BoardTile {
  isBug: boolean;
  isActive: boolean;
}

function createBoard(rows: number, cols: number, bugCount: number): BoardTile[][] {
  // Create empty board that takes an array of board tiles set everything to default value
  const board: BoardTile[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ isBug: false, isActive: false }))
  );

  // Randomly place bugs
  let placed = 0;
  while (placed < bugCount) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (!board[r][c].isBug) {
      board[r][c].isBug = true;
      placed++;
    }
  }
  return board;
}

export default function BugSweeper() {
  // TODO: we can configure this later so the user can set it
  const rows = 4;
  const cols = 4;
  const bugCount = 5;

  const [board, setBoard] = useState(() => createBoard(rows, cols, bugCount));

  function handleTileClick(row: number, col: number) {
    setBoard(prev =>
      prev.map((rowArr, r) =>
        rowArr.map((tile, c) =>
          r === row && c === col ? { ...tile, isActive: true } : tile
        )
      )
    );
  }

  // Create the game with tiles and tile props already set
  function generateTiles(board: BoardTile[][]) {
    const tiles = [];
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        const tile = board[r][c];
        tiles.push(
          <Tile
            key={`${r}-${c}`}
            isBug={tile.isBug}
            isActive={tile.isActive}
            onClick={() => handleTileClick(r, c)}
          />
        );
      }
    }
    return tiles;
  }

  return (
    <div style={{ width: cols * 36 }}>
      {generateTiles(board)}
    </div>
  );
};