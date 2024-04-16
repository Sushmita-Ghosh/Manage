import { useEffect, useState } from "react";
import cardArray from "../constants/constants";
import Card from "./Card";

const GameBoard = () => {
  const [cards, setCards] = useState<Array<{ src: string; id: number }>>([]);
  const [moves, setMoves] = useState<number>(0);
  // for the first and second choice
  const [choiceOne, setChoiceOne] = useState<{
    src: string;
    id: number;
  } | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<{
    src: string;
    id: number;
  } | null>(null);

  const shuffleCards = () => {
    // duplicate the array
    const cards: Array<{
      src: string;
    }> = [...cardArray, ...cardArray];

    // shuffle the cards - using Fisher Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // map the cards and add id to each card
    const shuffledCards = cards.map((card) => ({ id: Math.random(), ...card }));

    // set the state of the cards
    setCards(shuffledCards);
    setMoves(0);
  };

  // handle a choice
  const handleChoice = (card: { src: string; id: number }) => {
    // if choiceOne is not present - set it
    // if choiceOne is present - set choiceTwo
    if (choiceOne) {
      setChoiceTwo(card);
    } else {
      setChoiceOne(card);
    }

    // we can't compare the two cards here as the state is not updated yet - we have to use useEffect
    // to track the choices and compare them
  };

  // reset choices and increase moves
  const resetMove = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves((prevMoves) => prevMoves + 1);
  };

  // to compare the cards in useEffect - as it will rerender when we set choiceOne or choiceTwo
  useEffect(() => {
    // if both choices are present and the src is same - it is a match
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("correct");
        resetMove();
      } else {
        console.log("wrong");
        resetMove();
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      <div className="py-5">
        <button onClick={shuffleCards}>Play</button>
      </div>

      {/* card grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-5">
        {cards.map((card) => (
          <Card card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
