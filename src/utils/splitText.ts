import React, { createElement } from "react";

type elementType = "span" | "div";
type splitTextProps = {
  text: string;
  isWord?: boolean;
  element?: elementType;
  containerClass?: string;
  className?: string;
};

const splitString = (text: string, isWord: boolean) => {
  if (isWord) {
    return text.split(" ").map((char) => char);
  } else {
    return text.split("").map((char) => char);
  }
};

export default function splitText({
  text,
  isWord = true,
  element = "span",
  containerClass = "",
  className = "",
}: splitTextProps) {
  const chars = splitString(text, isWord);
  const els: React.DetailedReactHTMLElement<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >[] = [];

  chars.forEach((char, i) => {
    els.push(
      createElement(
        element,
        { className: `${containerClass} inline-block`, key: i },
        createElement(
          element,
          { className: `${className} inline-block`, key: i },
          char
        )
      )
    );

    if (isWord) {
      els.push(
        createElement(element, { className: containerClass, key: i }, " ")
      );
    }
  });

  console.log(els);

  return els;
}
