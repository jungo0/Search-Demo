import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionContent from "./components/Accordion/AccordionContent.jsx";

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
    </main>
  );
}

export default App;
