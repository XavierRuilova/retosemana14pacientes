import React from "react";
import Cards from "./Cards";

function Main({ data }) {
  return (
    <main className="App-main">
      {data.map((e, i) => {
        let bckground = null;
        if (e.edad <= 18) {
          bckground = "green";
        } else if (e.edad >= 18 && e.edad < 40) {
          bckground = "orange";
        } else if (e.edad >= 40 && e.edad < 70) {
          bckground = "yellow";
        } else if (e.edad >= 70) {
          bckground = "red";
        }
        return <Cards key={i} information={e} background={bckground} />;
      })}
    </main>
  );
}

export default Main;
