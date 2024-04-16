import { Player } from "@lottiefiles/react-lottie-player";
import day from "../assets/day-mode.png";
import night from "../assets/moon.png";

interface HeaderProps {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ dark, setDark }) => {
  return (
    <section className="header flex justify-between px-10 items-center">
      <div className="flex justify-center items-center flex-row">
        <h1>
          Memory Mojo
          {/* lottie animation when game is over */}
        </h1>
        <Player
          src="https://lottie.host/bee495d6-f6d2-4806-8844-d79b6d9326c8/nGMteWF7ly.json"
          className="player h-12 w-12 md:h-32 md:w-32"
          loop
          autoplay
          speed={3}
          // style={{ height: "300px", width: "300px" }}
        />
      </div>

      <button
        className="flex justify-center items-center bg-slate-100 dark:bg-gray-950 border-none"
        onClick={() => {
          setDark(!dark);
        }}
      >
        {dark ? (
          <img src={night} className="w-14 h-14" alt="day mode" />
        ) : (
          <img src={day} className="w-14 h-14" alt="night mode" />
        )}
      </button>
    </section>
  );
};

export default Header;
