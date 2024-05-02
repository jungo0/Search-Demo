import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionContent from "./components/Accordion/AccordionContent.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";

import acropolisImg from "./assets/acropolis-athens.jpg";
import berlinImg from "./assets/berlin.jpg";
import eiffelImg from "./assets/eiffel-tower.jpg";
import georgeImg from "./assets/george-washington-bridge.jpg";
import icelandImg from "./assets/iceland.jpg";

import santoriniImg from "./assets/santorini.jpg";
import sydneyImg from "./assets/sydney-opera-house.jpg";
import Place from "./Place";
const PLACES = [
  {
    id: "acropolis",
    image: acropolisImg,
    title: "Acropolis Athens",
    description:
      "Explore the ancient ruins and marvel at the rich history of Athens.",
  },
  {
    id: "berlin",
    image: berlinImg,
    title: "Berlin",
    description:
      "Immerse yourself in the vibrant culture and fascinating history of Berlin.",
  },
  {
    id: "eiffel",
    image: eiffelImg,
    title: "Eiffel Tower",
    description:
      "Witness the iconic symbol of Paris and enjoy breathtaking views of the city from the top.",
  },
  {
    id: "george",
    image: georgeImg,
    title: "George Washington Bridge",
    description:
      "Cross the Hudson River and admire the architectural marvel of the George Washington Bridge.",
  },
  {
    id: "iceland",
    image: icelandImg,
    title: "Iceland",
    description:
      "Experience the stunning natural landscapes, including glaciers, waterfalls, and geysers, in Iceland.",
  },
  {
    id: "santorini",
    image: santoriniImg,
    title: "Santorini",
    description:
      "Indulge in the picturesque beauty and romantic charm of Santorini's whitewashed buildings and crystal-clear waters.",
  },
  {
    id: "sydney",
    image: sydneyImg,
    title: "Sydney Opera House",
    description:
      "Marvel at the iconic architectural masterpiece and enjoy world-class performances at the Sydney Opera House.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Travel</h2>

        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>d</p>
                <p>d</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>d</p>
                <p>d</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item 2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
