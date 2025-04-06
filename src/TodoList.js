const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  image: {
    className: "avatar",
    source: "https://i.imgur.com/7vQD0fPs.jpg",
    altText: "Gregorio Y. Zara",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className={person.image.className}
        src={person.image.source}
        alt={person.image.altText}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
