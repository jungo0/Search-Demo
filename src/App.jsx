import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionContent from "./components/Accordion/AccordionContent.jsx";

function App() {
  return (
    <main>
      <section>
        <h2>Travel</h2>

        <Accordion className="accordion">
          <Accordion.Item
            id="experience"
            className="accordion-item"
            title=" experience"
          >
            <Accordion.Title className="accordion-item-title" id="experience">
              experience
            </Accordion.Title>
            <Accordion.Content id="experience">
              <article>
                <p>d</p>
                <p>d</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            id="guides"
            className="accordion-item"
            title=" guides"
          >
            <Accordion.Title className="accordion-item-title" id="guides">
              guides
            </Accordion.Title>
            <Accordion.Content id="guides">
              <article>
                <p>d33</p>
                <p>d33</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
