export interface TileProps {
  isBug: boolean;
  isActive: boolean;
  onClick: () => void; // We will need to have a handler here that toggles if its a bug or not
}

export default function Tile({ isBug, isActive, onClick }: TileProps) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 32,
        height: 32,
        border: '1px solid #888',
        display: 'inline-block',
        background: isActive ? (isBug ? '#f44336' : '#90caf9') : '#ccc',
        margin: 2,
        boxSizing: 'border-box',
        cursor: 'pointer',
      }}
    />
  );
}