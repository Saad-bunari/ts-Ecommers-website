import React, { useState } from "react";
import { Form, InputGroup, Dropdown, Button } from "react-bootstrap";
import styles from "./SearchBar.module.scss";

const categories = [
  "All Categories",
  "Electronics",
  "Clothing",
  "Books",
  "Sports",
];

const SearchBar: React.FC = () => {
  const [searchKey, setSearchKey] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category: string | null) => {
    if (category) {
      setSelectedCategory(category);
    }
  };

  const handleSearch = () => {
    alert(`Searching for "${searchKey}" in "${selectedCategory}"`);
  };

  return (

    <section className={styles["search-bar-main"]}>



    <InputGroup className={[ styles.InputGroupsec,  'w-100'].join(' ')} style={{ maxWidth: "700px" }} >
      <Form.Control
        placeholder="Enter your search key"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />

   <Dropdown onSelect={handleCategorySelect} drop="down" autoClose="outside">
  <Dropdown.Toggle
    className={styles["category"]}
    
    id="category-dropdown"
  >
    {selectedCategory}
  </Dropdown.Toggle>

  <Dropdown.Menu
    style={{ position: "absolute", inset: "auto auto 0px 0px" }}
    popperConfig={{ strategy: "fixed" }} 
  >
    {categories.map((cat) => (
      <Dropdown.Item key={cat} eventKey={cat}>
        {cat}
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown>


      <Button className={styles["serch-bar-btn"]} variant="warning" onClick={handleSearch}>
   <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </InputGroup>
    </section>
  );
};

export default SearchBar;
