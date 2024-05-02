import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Travel</h2>
        <Accordion className="accordion">
          <AccordionItem className="accordion-item" title="123432">
            <article>
              <p>d</p> <p>d</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
