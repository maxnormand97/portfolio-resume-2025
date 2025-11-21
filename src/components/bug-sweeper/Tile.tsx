export interface TileProps {
  isBug: boolean;
  isActive: boolean;
  nearbyBugs?: number; // 0-3
  proximityRank?: 'green' | 'yellow' | 'red';
  tileIndex?: number;
  onClick: () => void;
}

export default function Tile({ isBug, isActive, nearbyBugs, proximityRank, onClick }: TileProps) {
  let background = '#ccc';
  if (isActive) {
    if (isBug) {
      background = '#f44336'; // red for bug
    } else {
      if (proximityRank === 'green') background = '#a5d6a7';
      else if (proximityRank === 'yellow') background = '#fff59d';
      else if (proximityRank === 'red') background = '#ef9a9a';
      else background = '#90caf9'; // fallback
    }
  }

  return (
    <div
      onClick={onClick}
      style={{
        width: 32,
        height: 32,
        border: '1px solid #888',
        display: 'inline-block',
        background,
        margin: 2,
        boxSizing: 'border-box',
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: '32px',
        fontWeight: 'bold',
        fontSize: 16,
      }}
    >
      {isActive && !isBug && nearbyBugs ? nearbyBugs : ''}
    </div>
  );
}