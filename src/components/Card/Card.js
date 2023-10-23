import React from "react";

import classes from "./Card.module.css";

function Card(props) {
	return <div className={classes.card}>{props.childrens}</div>;
}

export default Card;
