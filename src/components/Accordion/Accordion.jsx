//wrapper

import { useState } from "react";
import { createContext, useContext } from "react";

const AccordionContext = createContext;

export function useAccordionContext() {
  const cxt = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("error/ Accordion wrppaed by Accordion");
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();
  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }
  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}
