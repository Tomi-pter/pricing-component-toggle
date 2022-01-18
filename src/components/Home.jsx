import { useState } from "react";
import Card from "./Card";

function Home() {
  const [price, setPrice] = useState({
    basic: 199.99,
    pro: 249.99,
    master: 399.99,
    checked: false,
    className: "",
  });

  function updatePrice() {
    !price.checked ? monthP() : annualP();
  }

  function monthP() {
    setPrice((price) => ({
      ...price,
      basic: 19.99,
      pro: 24.99,
      master: 39.99,
      checked: true,
      className: "checked",
    }));
  }

  function annualP() {
    setPrice((price) => ({
      ...price,
      basic: 199.99,
      pro: 249.99,
      master: 399.99,
      checked: false,
      className: "",
    }));
  }

  return (
    <>
      <div className="home">
        <h1>Our Pricing </h1>
        <div className="check-frame">
          <label htmlFor="pricing" className="annual-label" onClick={monthP}>
            Annually
          </label>
          <div className="switch">
            <input
              type="checkbox"
              name="pricing"
              id="pricing"
              className={price.className}
              onClick={updatePrice}
              onKeyUp={(e) => {
                e.key === "Enter" && updatePrice();
              }}
            />
            <span className="slider" onClick={updatePrice}></span>
          </div>
          <label htmlFor="pricing" className="month-label" onClick={annualP}>
            Monthly
          </label>
        </div>
      </div>
      <div className="card-frame">
        <Card
          plan="Basic"
          size="500 GB Storage"
          users="2 Users Allowed"
          send="Send up to 3 GB"
          price={price.basic}
        />
        <Card
          classes="selected"
          plan="Professional"
          size="1 TB Storage"
          users="5 Users Allowed"
          send="Send up to 10 GB"
          price={price.pro}
        />
        <Card
          plan="Master"
          size="2 TB Storage"
          users="10 Users Allowed"
          send="Send up to 20 GB"
          price={price.master}
        />
      </div>
    </>
  );
}

export default Home;
