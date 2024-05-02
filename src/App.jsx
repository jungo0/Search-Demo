import Accordion from "./components/Accordion/Accordion.jsx";

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
            <article>
              <p>d</p>
              <p>d</p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="guides"
            className="accordion-item"
            title=" guides"
          >
            <article>
              <p>dd</p>
              <p>dd</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
