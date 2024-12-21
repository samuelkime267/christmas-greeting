import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { waysToMakeChristmasMagical } from "../data/waysToMakeChristmasMagical";
import { magicTitle } from "../data/titleText";
import splitText from "../utils/splitText";

export default function ChristmasMagic() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef.current);
      const christmasMagicHolder = q("#christmas-magic-holder");
      const magicalChristmas = q(".magical-christmas");
      const magicHeaderTitleContainer = q(".magic-header-title-container");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: christmasMagicHolder,
          start: "top top",
          end: `+=${magicalChristmas.length * 100}%`,
          scrub: true,
          // markers: true,
          pin: true,
        },
      });

      magicalChristmas.forEach((el, i) => {
        const qEl = gsap.utils.selector(el);
        const titleEl = qEl(".magic-title");
        const descEl = qEl(".magic-desc");

        if (i === 0) {
          tl.to(titleEl, {
            translateY: 0,
            stagger: 0.2,
          })
            .to(descEl, {
              translateY: 0,
              stagger: 0.2,
            })
            .to(titleEl, {
              opacity: 0,
            })
            .to(
              descEl,
              {
                translateY: "100%",
                stagger: 0.2,
              },
              "<"
            );
          return;
        }

        if (i === magicalChristmas.length - 1) {
          tl.fromTo(
            el,
            {
              clipPath: "inset(50% 50% 50% 50%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
            },
            "<"
          )
            .to(titleEl, {
              translateY: 0,
            })
            .to(descEl, {
              translateY: 0,
              stagger: 0.2,
            });
          return;
        }

        tl.fromTo(
          el,
          {
            clipPath: "inset(50% 50% 50% 50%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          "<"
        )
          .to(titleEl, {
            translateY: 0,
          })
          .to(descEl, {
            translateY: 0,
            stagger: 0.2,
          })
          .to(titleEl, {
            translateY: "100%",
          })
          .to(
            descEl,
            {
              translateY: "100%",
              stagger: 0.2,
            },
            "<"
          );
      });

      magicHeaderTitleContainer.forEach((el) => {
        const magicHeaderTitle = gsap.utils.selector(el)(".magic-header-title");

        gsap.to(magicHeaderTitle, {
          scrollTrigger: {
            trigger: el,
            start: "top +=90%",
            end: `bottom bottom`,
            // markers: true,
            toggleActions: "play none none reverse",
          },
          translateY: 0,
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="p-4 lg:p-8 flex items-center justify-center flex-col">
        {magicTitle.map((title, i) => (
          <div key={i} className="overflow-hidden magic-header-title-container">
            <h2 className="magic-header-title text-5xl md:text-7xl font-extrabold uppercase text-center translate-y-full">
              {title}
            </h2>
          </div>
        ))}
      </div>

      <div id="christmas-magic-holder" className="relative w-full h-screen">
        {waysToMakeChristmasMagical.map(({ description, title, img }, i) => (
          <div
            key={i}
            style={{ zIndex: i + 1 }}
            className={`absolute top-0 left-0 h-full w-full magical-christmas ${
              i !== 0 ? "clip-img" : ""
            }`}
          >
            <div className="relative w-full h-screen">
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-4 lg:p-8 z-[1] flex items-start justify-end flex-col">
                <h3 className="text-5xl font-bold uppercase text-white">
                  {splitText({
                    text: title,
                    containerClass: "overflow-hidden",
                    className: "translate-y-full magic-title",
                  })}
                </h3>
                <p className="text-white">
                  {splitText({
                    text: description,
                    containerClass: "overflow-hidden",
                    className: " translate-y-full magic-desc",
                  })}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
