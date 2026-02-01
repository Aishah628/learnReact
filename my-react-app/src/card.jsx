import React from "react";

function Card(props) {
  const user = <h1>Welcome {props.name}</h1>;
  const ages = <h2>Your age is {props.age}</h2>;

  return (
    <>
      {props.name ? user : <h1>Welcome guest</h1>}
      {props.age !== undefined ? ages : <h2>Your age is 0</h2>}
    </>
  );
}



Card.defaultProps = {
  name: "guest",
  age: 0,
};

export default Card;