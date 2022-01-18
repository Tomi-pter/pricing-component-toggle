import Button from "./Button";

function Card(props) {
  const classes = `card ${props.classes}`;

  return (
    <div className={classes}>
      <h2>{props.plan} </h2>
      <h3>
        $<span>{props.price}</span>
      </h3>
      <p>{props.size} </p>
      <p>{props.users} </p>
      <p>{props.send} </p>
      <Button />
    </div>
  );
}

export default Card;