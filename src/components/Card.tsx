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
          className={`h-40 w-50 border-4 border-yellow-light rounded-lg absolute  ${
            flipped ? "[transform:rotateY(0deg)]" : "[transform:rotateY(90deg)]"
          }`}
          src={card.src}
          alt="card front"
        />
        {/* back of the card */}
        <img
          className="h-40 w-50 border-4 border-yellow-light rounded-lg"
          src={cardBack}
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
