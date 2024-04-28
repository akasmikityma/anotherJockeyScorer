import React, { useState } from 'react';

const Card = ({ id, content, isSelected, onSelect }) => {
  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(id)}>
      {content}
    </div>
  );
};

const CardList = () => {
  const [selectedCards, setSelectedCards] = useState(new Set());

  const handleSelect = (cardId) => {
    const newSelectedCards = new Set(selectedCards);
    if (newSelectedCards.has(cardId)) {
      newSelectedCards.delete(cardId);
    } else {
      newSelectedCards.add(cardId);
    }
    setSelectedCards(newSelectedCards);
  };

  const handleTransform = () => {
    // Implement your transformation logic here
    // (e.g., modify card content, create new cards)
    console.log('Transforming selected cards:', selectedCards); // Placeholder
  };

  const handleUndo = () => {
    setSelectedCards(new Set());
  };

  // ... (render cards with `Card` component)

  return (
    <div>
      <button onClick={handleTransform} disabled={!selectedCards.size}>
        Transform
      </button>
      <button onClick={handleUndo} disabled={!selectedCards.size}>
        Undo
      </button>
    </div>
  );
};
