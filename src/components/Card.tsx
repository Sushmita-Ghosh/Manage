import cardBack from "../assets/card.jpeg";

interface CardProps {
  card: {
    src: string;
    id: number;
    matched: boolean;
  };
  handleChoice: (card: { src: string; id: number }) => void;
  flipped: boolean;
}

const Card: React.FC<CardProps> = ({ card, handleChoice, flipped }) => {
  console.log(flipped);
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="relative">
      <div>
        {/* front of the card */}
        <img
          className={`md:h-32 md:w-40 border-4 border-yellow-light rounded-lg absolute transition-all ease-in duration-200  ${
            flipped
              ? "[transform:rotateY(0deg)] delay-200"
              : "[transform:rotateY(90deg)]"
          }`}
          src={card.src}
          alt="card front"
        />
        {/* back of the card */}
        <img
          className={`md:h-32 md:w-40 border-4 border-yellow-light rounded-lg delay-200 transition-all ease-in duration-200 ${
            flipped ? "delay-0 [transform:rotateY(90deg)]" : ""
          }`}
          src={cardBack}
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
