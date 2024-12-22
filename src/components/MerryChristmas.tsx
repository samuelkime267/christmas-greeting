import christmasTree from "../assets/tree.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

type MerryChristmasProps = {
  isLoaded: boolean;
};

export default function MerryChristmas({ isLoaded }: MerryChristmasProps) {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef.current);
      const christmasImgContainer = q(".christmas-img");
      const christmasText = q(".christmas-text");
      const christmasTextP = q(".christmas-text-p");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          // markers: true,
          pin: true,
        },
      });

      tl.fromTo(
        christmasImgContainer,
        {
          clipPath: "inset(50% 50% 50% 50%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
        }
      )
        .to(christmasText, {
          opacity: 0,
        })
        .to(christmasTextP, {
          opacity: 1,
        })
        .to(christmasImgContainer, {
          clipPath: "inset(5% 5% 5% 5%)",
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !isLoaded) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef.current);
      const merryChristmas = q(".merry-christmas");

      gsap.to(merryChristmas, { translateY: 0 });
    });

    return () => {
      ctx.revert();
    };
  }, [isLoaded]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center  p-4 md:p-8">
        <div className="overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-center translate-y-full merry-christmas">
            Merry Christmas
          </h1>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full christmas-img">
        <img
          src={christmasTree}
          alt="Christmas Tree"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center p-4 md:p-8">
          <h1 className="text-4xl md:text-nowrap md:text-5xl font-bold uppercase text-white christmas-text text-center">
            Merry Christmas
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-8">
          <p className="text-white text-center max-w-[25pc] christmas-text-p opacity-0">
            Christmas is the season of joy, togetherness, and creating memories.{" "}
            <br /> However you celebrate, let the holiday spirit fill your heart
            and home with love and laughter.
          </p>
        </div>
      </div>
    </section>
  );
}
