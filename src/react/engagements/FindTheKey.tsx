import React, { useState } from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
  margin: 20px;
`;

const Cell = styled.div<{ found: boolean; isKey: boolean }>`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ found, isKey, theme }) =>
    found ? (isKey ? theme.secondaryColor : '#e74c3c') : '#ecf0f1'};
  border: 2px solid #2c3e50;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const Message = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  text-align: center;
`;

interface CellProps {
  id: number;
  found: boolean;
  isKey: boolean;
  onClick: () => void;
}

const GameCell: React.FC<CellProps> = ({ found, isKey, onClick }) => (
  <Cell found={found} isKey={isKey} onClick={onClick}>
    {found ? (isKey ? '🔑' : '❌') : ''}
  </Cell>
);

export const FindTheKey: React.FC = () => {
  const [keyPosition] = useState(Math.floor(Math.random() * 9));
  const [found, setFound] = useState<Array<boolean>>(Array(9).fill(false));
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index: number) => {
    if (gameOver || found[index]) return;

    const newFound = [...found];
    newFound[index] = true;
    setFound(newFound);

    if (index === keyPosition) {
      setGameOver(true);
    }
  };

  return (
    <>
      <Grid>
        {Array.from({ length: 9 }).map((_, index) => (
          <GameCell
            key={index}
            id={index}
            found={found[index]}
            isKey={index === keyPosition}
            onClick={() => handleClick(index)}
          />
        ))}
      </Grid>
      <Message>{gameOver ? 'You found the key!' : 'Find the key!'}</Message>
    </>
  );
};
