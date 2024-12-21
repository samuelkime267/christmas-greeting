import splitText from "../utils/splitText";

export default function Compliments() {
  const els = splitText({
    text: "testing if this actually works",
    className: "text-pink-600",
    isWord: false,
  });

  return (
    <footer className="p-4 md:p-8">
      <p className="">{els}</p>
      <p className="">Enjoy your holiday</p>
      <p>
        <span>
          s<span>ee</span>
        </span>{" "}
        you next year
      </p>
    </footer>
  );
}
