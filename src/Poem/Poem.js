import { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
    "Oh how wonderful it was",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment>
          {index > 0 && index != poem.lines.length ? <hr /> : null}
          <p key={index}>{line}</p>
        </Fragment>
      ))}
    </article>
  );
}
