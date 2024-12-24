import gsap from "gsap";
import Logo from "./icons/Logo";
import { useEffect, useRef } from "react";

type LoaderProps = {
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Loader({ setIsLoaded }: LoaderProps) {
  const loaderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderContainerRef.current) return;

    const handleLoad = () => {
      gsap.to(loaderContainerRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.set(loaderContainerRef.current, { display: "none" });
          setIsLoaded(true);
        },
      });
    };

    // Listen for the window load event
    const timeout = setTimeout(handleLoad, 2500);

    // Cleanup event listener on unmount
    return () => {
      clearTimeout(timeout);
    };
  }, [setIsLoaded]);

  return (
    <div
      ref={loaderContainerRef}
      className="fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center bg-white"
    >
      <Logo className="w-28 h-28 animate-pulse" />
    </div>
  );
}
