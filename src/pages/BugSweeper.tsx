import { useState } from 'react';
import Tile from '../components/bug-sweeper/Tile'

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
  const bugCount = 1;

  const [board, setBoard] = useState(() => createBoard(rows, cols, bugCount));
  const [gameState, setGameState] = useState<GameState>('pending');


  function handleTileClick(row: number, col: number) {
    if (gameState === 'lose' || gameState === 'win') return;
    if (gameState === 'pending') setGameState('inProgress');

    const tile = board[row][col];
    if (tile.isBug) {
      setBoard(prev =>
        prev.map(rowArr =>
          rowArr.map(tile => ({ ...tile, isActive: true }))
        )
      );
      setGameState('lose');
      return;
    }

    // Reveal the clicked tile
    const newBoard = board.map((rowArr, rIdx) =>
      rowArr.map((tile, cIdx) =>
        rIdx === row && cIdx === col ? { ...tile, isActive: true } : tile
      )
    );
    setBoard(newBoard);

    // Check win condition: all non-bug tiles are active
    const allNonBugsActive = newBoard.flat().every(tile =>
      tile.isBug || tile.isActive
    );
    if (allNonBugsActive) setGameState('win');
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
      {gameState === 'win' ? (
        <div>
          <h2>You Win! 🎉</h2>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      ) : (
        <>
          {generateTiles(board)}
          <div>
            Game State: {gameState}
          </div>
          <button onClick={resetGame}>Reset Game</button>
        </>
      )}
    </div>
  );
};