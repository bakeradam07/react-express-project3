import React from "react";

function Card({ children }) {
  return (
    <div className="card" style={{width: "50%", margin: "0 auto"}}>
  <div className="card-body">
    <h5 className="card-title">Movie title</h5>
    <a href="www.google.com" class="card-link">Card link</a>
    <a href="www.espn.com" class="card-link">Another link</a>
    { children }
  </div>
</div>
  );
}

export default Card;