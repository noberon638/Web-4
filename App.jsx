import { useState } from "react";

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [customName, setCustomName] = useState("");
  const [ukus, setUkus] = useState("us");
  const [showStory, setShowStory] = useState(false);
  const [story, setStory] = useState("");

  const generateStory = () => {
    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = [
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away",
    ];

    let name = customName || "Bob";
    let weight = "300 pounds";
    let temperature = "94 fahrenheit";

    if (ukus === "uk") {
      weight = "21 stone";
      temperature = "34 centigrade";
    }

    const xItem = randomValueFromArray(xItems);
    const yItem = randomValueFromArray(yItems);
    const zItem = randomValueFromArray(zItems);

    setStory(
      `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`
    );
    setShowStory(true);
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          placeholder=""
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          name="ukus"
          value="us"
          checked={ukus === "us"}
          onChange={() => setUkus("us")}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          name="ukus"
          value="uk"
          checked={ukus === "uk"}
          onChange={() => setUkus("uk")}
        />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {showStory && <p>{story}</p>}
    </>
  );
}
