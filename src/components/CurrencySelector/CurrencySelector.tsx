import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./currencySelictor.module.css";

const CurrencySelector: React.FC = () => {
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD");

  const handleSelect = (value: "USD" | "EUR") => {
    setCurrency(value);
    console.log("Selected currency:", value);
  };

  // Image flags
  const flags: Record<"USD" | "EUR", React.ReactNode> = {
    USD: (
      <>
        <img
          src="https://flagcdn.com/w20/us.png"
          alt="US Flag"
          style={{ width: "20px", marginRight: "8px" }}
        />
        USD $
      </>
    ),
    EUR: (
      <>
        <img
          src="https://flagcdn.com/w20/eu.png"
          alt="EU Flag"
          style={{ width: "20px", marginRight: "8px" }}
        />
        EUR €
      </>
    ),
  };

  return (
    <section className={styles["currency-selector"]}>
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        {flags[currency]}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles["creency-dropdown"]}>
        <Dropdown.Item onClick={() => handleSelect("USD")}>
          <img
            src="https://flagcdn.com/w20/us.png"
            alt="US Flag"
            style={{ width: "20px", marginRight: "8px" }}
          />
          USD $
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("EUR")}>
          <img
            src="https://flagcdn.com/w20/eu.png"
            alt="EU Flag"
            style={{ width: "20px", marginRight: "8px" }}
          />
          EUR €
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </section>
  );
};

export default CurrencySelector;
