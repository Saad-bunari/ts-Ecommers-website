import React, { useState } from "react";
import {  Dropdown } from "react-bootstrap";
import styles from "./languageselector.module.scss";



const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState<"EN" | "FR">("EN");

  const handleSelect = (value: "EN" | "FR") => {
    setLanguage(value);
    console.log("Selected language:", value);
  };

  const labels: Record<"EN" | "FR", React.ReactNode> = {
    EN: (
      <>
        <img
          src="https://flagcdn.com/w20/us.png"
          alt="US Flag"
          style={{ width: "20px", marginRight: "8px" }}
        />
        ENGLISH
      </>
    ),
    FR: (
      <>
        <img
          src="https://flagcdn.com/w20/fr.png"
          alt="France Flag"
          style={{ width: "20px", marginRight: "8px" }}
        />
        FRENCH
      </>
    ),
  };

  return (
    <section className={styles["language-selector"]}>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          {labels[language]}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles["language-dropdown"]}>
          <Dropdown.Item onClick={() => handleSelect("EN")}>
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="US Flag"
              style={{ width: "20px", marginRight: "8px" }}
            />
            ENGLISH
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("FR")}>
            <img
              src="https://flagcdn.com/w20/fr.png"
              alt="France Flag"
              style={{ width: "20px", marginRight: "8px" }}
            />
            FRENCH
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  );
};

export default LanguageSelector;
