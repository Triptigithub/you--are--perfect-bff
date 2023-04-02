import React, { useState } from "react";
import Card from "./Cards";
import "./Blogs.css";
import Anxiety from "../assets/Anxiety.png";
import Depression from "../assets/Depression.png";
import Sad from "../assets/Sad_Anger.png";
import Confidence from "../assets/Sad_Confidence.png";
import Sleep from "../assets/Sleep_Issues.png";
import Stressed from "../assets/Stressed.png";

const Blogs = () => {
	const cardsData = [
		{
			heading: "Anxiety/Panic Attack",
			text: "",
			src: Anxiety,
		},
		{
			heading: "Depression",
			text: "",
			src: Depression,
		},
		{
			heading: "Sad/Anger",
			text: "",
			src: Sad,
		},
		{
			heading: "Lack of Confidence",
			text: "",
			src: Confidence,
		},
		{
			heading: "Sleep/Issue",
			text: "",
			src: Sleep,
		},
		{
			heading: "Stress",
			text: "",
			src: Stressed,
		},
	];

	return (
		<div className="cards-container">
			<h1 className="how-head">How are you feeling?</h1>
			{cardsData.map((data, index) => (
				<Card
					key={index}
					heading={data.heading}
					src={data.src}
					text={data.text}
				/>
			))}
		</div>
	);
};

export default Blogs;
