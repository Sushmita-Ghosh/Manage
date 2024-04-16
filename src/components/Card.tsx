import cardBack from "../assets/card.jpeg";
import "./css/Card.css";

interface CardProps {
  card: {
    src: string;
    id: number;
    matched: boolean;
  };
  handleChoice: (card: { src: string; id: number }) => void;
  flipped: boolean;
  disabled: boolean;
}

const Card: React.FC<CardProps> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="relative">
      <div className={`card ${flipped ? "flipped" : ""}`}>
        {/* front of the card */}
        <img
          className={`front md:h-32 md:w-40 border-4 border-yellow-light rounded-lg`}
          src={card.src}
          alt="card front"
        />
        {/* back of the card */}
        <img
          className={`back md:h-32 md:w-40 border-4 border-yellow-light rounded-lg`}
          src={cardBack}
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
