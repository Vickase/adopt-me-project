import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const animals = [
  { name: "Pepper", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper2", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper3", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper3", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper3123", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper3", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper3", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper3", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper3", animal: "Bird", breed: "Cockatiel" },
  { name: "Pepper3", animal: "Bird", breed: "Cockatiel" },
];

const App = () => {
  /* return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed"
    }),
    React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" })
  ]); */
  return (
    <div id="something-important">
      <h1>Adopt me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}

      {animals.map(animale => {
        return (
          <Pet
            key={animale.name}
            name={animale.name}
            animal={animale.animal}
            breed={animale.breed}
          />
        );
      })}
    </div>
  );
};

render(<App />, document.getElementById("root"));
