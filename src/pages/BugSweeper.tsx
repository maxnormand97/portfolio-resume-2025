import { useState } from 'react';
import Tile from '../components/bug-sweeper/Tile'

  // TODO:
  // This will be like a mini minesweeper game but for bugs. The user will see something like the old minesweeper windows
  // game from the 2000s. There will be a bunch of tiles (we can make it configurable later) and within each tile there
  // may or may not be a bug. Use the rules from the classic minesweeper game for this.

  // https://minesweeper.online/game/5311546343

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

  // 3. If any bug is hit all of the tiles states should be set to is active and the game should be over set to loose. We will need
  // to handle a state for the game as well, pending, in progress, win or loose, based on this state we can do different things
  // later

  // 4. we when a non bug tile is clicked we need to know if there might be a bug nearby
  // we need a new attribute for the tile interface that has number of possible bugs nearby the limit can be set to 3
  // or rank in colors instead of 1,2,3 based on the approximation of bugs near the tile.

interface BoardTile {
  isBug: boolean;
  isActive: boolean;
  nearbyBugs?: number; // 0-3
  proximityRank?: 'green' | 'yellow' | 'red';
  tileIndex?: number;
}

type GameState = 'pending' | 'inProgress' | 'win' | 'lose';

function countNearbyBugs(board: BoardTile[][], row: number, col: number): number {
  // We need this to get reference to the surrounding boardTiles
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];
  let count = 0;
  for (const [dr, dc] of directions) {
    const r = row + dr;
    const c = col + dc;
    if (
      r >= 0 && r < board.length &&
      c >= 0 && c < board[0].length &&
      board[r][c].isBug
    ) {
      count++;
    }
  }
  return Math.min(count, 3); // Limit to 3
}

function getProximityRank(nearbyBugs: number): 'green' | 'yellow' | 'red' {
  if (nearbyBugs === 1) return 'green';
  if (nearbyBugs === 2) return 'yellow';
  if (nearbyBugs >= 3) return 'red';
  return 'green';
}

function createBoard(rows: number, cols: number, bugCount: number): BoardTile[][] {
  let tileIndex = 0;
  const board: BoardTile[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      isBug: false,
      isActive: false,
      tileIndex: tileIndex++,
    }))
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

  // Assign bug proximity
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const nearbyBugs = countNearbyBugs(board, r, c);
      board[r][c].nearbyBugs = nearbyBugs;
      board[r][c].proximityRank = getProximityRank(nearbyBugs);
    }
  }

  return board;
}

export default function BugSweeper() {
  // TODO: we can configure this later so the user can set it
  const rows = 5;
  const cols = 5;
  // TODO: on the bug count we can set it to different values the higher it is the more difficult the game
  const bugCount = 5;

  const [board, setBoard] = useState(() => createBoard(rows, cols, bugCount));
  const [gameState, setGameState] = useState<GameState>('pending');


  function handleTileClick(row: number, col: number) {
    if (gameState === 'lose' || gameState === 'win') return;

    if (gameState === 'pending') setGameState('inProgress');

    const tile = board[row][col];
    if (tile.isBug) {
      // Reveal all tiles and set game to lose
      setBoard(prev =>
        prev.map(rowArr =>
          rowArr.map(tile => ({ ...tile, isActive: true }))
        )
      );
      setGameState('lose');
    } else {
      setBoard(prev =>
        prev.map((rowArr, r) =>
          rowArr.map((tile, c) =>
            r === row && c === col ? { ...tile, isActive: true } : tile
          )
        )
      );
      // Win check can be added later
    }
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
            nearbyBugs={tile.nearbyBugs}
            proximityRank={tile.proximityRank}
            tileIndex={tile.tileIndex}
            onClick={() => handleTileClick(r, c)}
          />
        );
      }
    }
    return tiles;
  }

  function resetGame() {
    setBoard(createBoard(rows, cols, bugCount));
    setGameState('pending');
  }

  return (
    <div style={{ width: cols * 36 }}>
      {generateTiles(board)}
      <div>
        Game State: {gameState}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};