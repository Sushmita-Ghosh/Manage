import { useEffect, useState } from "react";
import cardArray from "../constants/constants";
import Card from "./Card";
import { Player } from "@lottiefiles/react-lottie-player";

const GameBoard = () => {
  const [cards, setCards] = useState<
    Array<{ src: string; id: number; matched: boolean }>
  >([]);
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

  const [disabled, setDisabled] = useState<boolean>(false);

  const [win, setWin] = useState<boolean>(false);

  const shuffleCards = () => {
    // duplicate the array
    const cards: Array<{
      src: string;
      matched: boolean;
    }> = [...cardArray, ...cardArray];

    // shuffle the cards - using Fisher Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // map the cards and add id to each card
    const shuffledCards = cards.map((card) => ({ id: Math.random(), ...card }));

    // set the state of the cards
    // explanation point -9
    setChoiceOne(null);
    setChoiceTwo(null);
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
    // set the disabled state back to false here - so that the cards can be clicked again
    setDisabled(false);
  };

  // to compare the cards in useEffect - as it will rerender when we set choiceOne or choiceTwo
  useEffect(() => {
    // if both choices are present and the src is same - it is a match
    if (choiceOne && choiceTwo) {
      //once both the choice are made, we disable the rest of the cards
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        //  if the src is same we need to update the matched to true for both the choices in cards

        // we are creating a new array with the updated cards with matched set to true
        const newCards = cards.map((card) => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });

        // set the new cards - with matched set to true
        setCards(newCards);
        resetMove();
      } else {
        // if the src is not same - reset the choices
        // do it after 1 sec so that the cards that don't match are visible
        setTimeout(() => resetMove(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // console.log(cards);

  // start the game on page load
  useEffect(() => {
    shuffleCards();
  }, []);

  // check if all cards are matched
  useEffect(() => {
    // check if all cards are matched
    if (cards.every((card) => card.matched === true)) {
      setWin(true);
    } else {
      setWin(false);
    }
  }, [cards]);

  console.log(win);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4">
      <div className="py-5 flex gap-4">
        <button onClick={shuffleCards}>Play</button>
        <div className="border-t-[0.5px] border-l-2 border-r-4 border-b-4 border-deep-brown bg-yellow-light dark:bg-transparent rounded-lg  flex justify-center items-center p-2">
          <p className="text-3xl  dark:text-yellow-ochre font-bold">
            Moves: {moves}
          </p>
        </div>
      </div>
      {/* card grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-5">
        {cards &&
          cards.map((card) => (
            <Card
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              flipped={card.matched || card === choiceOne || card === choiceTwo}
              disabled={disabled}
            />
          ))}
      </div>

      {/* display moves */}

      {/* display moves */}
      {win && (
        <Player
          src="https://lottie.host/a9d5831a-ad79-45a5-a36a-2070269611fa/RG5QzXvxrm.json"
          className="player absolute w-full h-full top-0 left-0"
          loop
          autoplay
          // style={{ height: "300px", width: "300px" }}
        />
      )}
    </div>
  );
};

export default GameBoard;
