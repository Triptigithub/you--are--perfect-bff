import React from "react";
import "./BlogCarousel.css";
import Img from "../assets/humans-pfp.jpg";

const BlogCarousel = () => {
	// const cardsData = [
	// 	{
	// 		heading: "Card 1",
	// 		text: "Some text for card 1",
	// 	},
	// 	{
	// 		heading: "Card 2",
	// 		text: "Some text for card 2",
	// 	},
	// 	{
	// 		heading: "Card 3",
	// 		text: "Some text for card 3",
	// 	},
	// 	{
	// 		heading: "Card 4",
	// 		text: "Some text for card 4",
	// 	},
	// 	{
	// 		heading: "Card 5",
	// 		text: "Some text for card 5",
	// 	},
	// 	{
	// 		heading: "Card 6",
	// 		text: "Some text for card 6",
	// 	},
	// ];

	return (
		<div>
			<h1 className="comm-head">Stories from the commmunity</h1>
			<div className="container">
				<div className="content">
					<h2 className="blog-head"> Rupal Rastogi..</h2>
					<p className="blog-para">
						"I’m so proud to be part of a national network of nearly 100 people
						who all share a common goal of reducing stigma and discrimination
						for those living with complex mental health issues. I wanted to use
						my lived experience of obsessive compulsive disorder to help others
						living with complex mental health issues.The level of understanding
						and support YOU ARE PERFECT has for my specific needs creates such a
						great space to be an advocate in. Sharing what happens to us when we
						experience illness, distress, stigma or trauma can be difficult. But
						there is such power in hearing someone’s candid, first hand
						experiences, which the program supports members to do in a safe and
						impactful way. Today, because of such organisations I, there’s a lot
						more awareness of mental health issues. As a young man in the
						sporting industry, talking about mental health can be seen as a
						weakness. But as I continue to develop my advocacy skills as part of
						the Peer Ambassador program, I’m finding that I’m having more and
						more positive conversations about what it means to live with a
						complex mental health issue and I’m challenging stereotypes of
						masculinity and emotional vulnerability.
					</p>
				</div>

				<div>
					<img src={Img} className="blog-img" />
				</div>
			</div>

			<div className="container">
				<div className="content">
					<h2 className="blog-head"> Akshit shroff..</h2>
					<p className="blog-para">
						"I’m so proud to be part of a national network of nearly 100 people
						who all share a common goal of reducing stigma and discrimination
						for those living with complex mental health issues. I wanted to use
						my lived experience of obsessive compulsive disorder to help others
						living with complex mental health issues.The level of understanding
						and support YOU ARE PERFECT has for my specific needs creates such a
						great space to be an advocate in. Sharing what happens to us when we
						experience illness, distress, stigma or trauma can be difficult. But
						there is such power in hearing someone’s candid, first hand
						experiences, which the program supports members to do in a safe and
						impactful way. Today, because of such organisations I, there’s a lot
						more awareness of mental health issues. As a young man in the
						sporting industry, talking about mental health can be seen as a
						weakness. But as I continue to develop my advocacy skills as part of
						the Peer Ambassador program, I’m finding that I’m having more and
						more positive conversations about what it means to live with a
						complex mental health issue and I’m challenging stereotypes of
						masculinity and emotional vulnerability.
					</p>
				</div>

				<div>
					<img src={Img} className="blog-img" />
				</div>
			</div>

			<div className="container">
				<div className="content">
					<h2 className="blog-head"> Manish Kumar Gupta..</h2>
					<p className="blog-para">
						"I’m so proud to be part of a national network of nearly 100 people
						who all share a common goal of reducing stigma and discrimination
						for those living with complex mental health issues. I wanted to use
						my lived experience of obsessive compulsive disorder to help others
						living with complex mental health issues.The level of understanding
						and support YOU ARE PERFECT has for my specific needs creates such a
						great space to be an advocate in. Sharing what happens to us when we
						experience illness, distress, stigma or trauma can be difficult. But
						there is such power in hearing someone’s candid, first hand
						experiences, which the program supports members to do in a safe and
						impactful way. Today, because of such organisations I, there’s a lot
						more awareness of mental health issues. As a young man in the
						sporting industry, talking about mental health can be seen as a
						weakness. But as I continue to develop my advocacy skills as part of
						the Peer Ambassador program, I’m finding that I’m having more and
						more positive conversations about what it means to live with a
						complex mental health issue and I’m challenging stereotypes of
						masculinity and emotional vulnerability.
					</p>
				</div>

				<div>
					<img src={Img} className="blog-img" />
				</div>
			</div>

			<div className="container">
				<div className="content">
					<h2 className="blog-head"> Tripti Aggarwal..</h2>
					<p className="blog-para">
						"I’m so proud to be part of a national network of nearly 100 people
						who all share a common goal of reducing stigma and discrimination
						for those living with complex mental health issues. I wanted to use
						my lived experience of obsessive compulsive disorder to help others
						living with complex mental health issues.The level of understanding
						and support YOU ARE PERFECT has for my specific needs creates such a
						great space to be an advocate in. Sharing what happens to us when we
						experience illness, distress, stigma or trauma can be difficult. But
						there is such power in hearing someone’s candid, first hand
						experiences, which the program supports members to do in a safe and
						impactful way. Today, because of such organisations I, there’s a lot
						more awareness of mental health issues. As a young man in the
						sporting industry, talking about mental health can be seen as a
						weakness. But as I continue to develop my advocacy skills as part of
						the Peer Ambassador program, I’m finding that I’m having more and
						more positive conversations about what it means to live with a
						complex mental health issue and I’m challenging stereotypes of
						masculinity and emotional vulnerability.
					</p>
				</div>

				<div>
					<img src={Img} className="blog-img" />
				</div>
			</div>
		</div>
	);
};

export default BlogCarousel;
