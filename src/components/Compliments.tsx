import splitText from "../utils/splitText";

export default function Compliments() {
  return (
    <footer className="p-4 md:p-8">
      <p className="">
        {splitText({
          text: "testing if this actually works",
          className: "text-pink-600",
          isWord: false,
        })}
      </p>
      <p className="">Enjoy your holiday</p>
      <p>see you next year</p>
    </footer>
  );
}
