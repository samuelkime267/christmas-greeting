import MerryChristmas from "./components/MerryChristmas";
import ChristmasMagic from "./components/ChristmasMagic";
import Compliments from "./components/Compliments";
import Loader from "./components/Loader";
import { useState } from "react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main>
      <Loader setIsLoaded={setIsLoaded} />
      <MerryChristmas isLoaded={isLoaded} />
      <ChristmasMagic />
      <Compliments />
    </main>
  );
}
