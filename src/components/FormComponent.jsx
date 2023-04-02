import React from "react";
import styled from "styled-components";
import "./FormComponent.css";
import myGif from "../assets/tumblr_f6eef9fcc2ad70487efe5143b19e9a92_d04fa6a0_1280.gif";
import Typewriter from "typewriter-effect";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	background: #fcfefb;
	margin-bottom: 6rem;
	// background: linear-gradient(to right, #008080, #017060);
`;

const Picture = styled.div`
	width: 60%;
	height: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1rem;
	border-radius: 50%;
`;

const Image = styled.img`
	width: 80%;
	height: 100%;
	scale: 110%;
	transform: translateX(-8rem);
	// width: 400px;
	border-radius: 50%;
	box-shadow: 0px 12px 0px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
	width: 50%;
	height: 80%;
	min-height: 600px;
	background: #fcfefb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	animation: slideInRight 0.5s ease;
`;

const Label = styled.label`
	font-size: 18px;
	font-weight: bold;
	margin: 10px 0 2px 0;
`;

const Input = styled.input`
	border: 1px solid #008080;
	border-bottom: 2px solid #008080;
	padding: 10px;
	margin-bottom: 20px;
	width: 80%;
	font-size: 16px;
	border-radius: 8px;
	&:focus {
		outline: solid 1.6px #1b4332;
		border-bottom: 2px solid #1b4332;
	}
`;

const TextArea = styled.textarea`
	border: 1px solid #008080;
	border-bottom: 2px solid #008080;
	padding: 5px;
	margin-bottom: 20px;
	width: 80%;
	font-size: 16px;
	resize: none;
	height: 4rem;
	border-radius: 8px;
	&:focus {
		outline: solid 1.6px #1b4332;
		border-bottom: 2px solid #1b4332;
	}
`;

const Button = styled.button`
	background: #008080;
	color: #f4f0bb;
	font-weight: 700;
	border: solid 2px #008080;
	padding: 10px 20px;
	border-radius: 20px;
	font-size: 18px;
	cursor: pointer;
	margin-top: 2rem;
	&:hover {
		background: #005050;
	}
	&:active {
		translate: 3px 3px;
	}
	transition: all 1s;
`;

const FormComponent = () => {
	// interface FormDataType {
	// 	firstName: string;
	// 	lastName: string;
	// 	age: string;
	// }
	// const formData: FormDataType = { firstName: "", lastName: "", age: "" };
	// const [responseBody, setResponseBody] = useState < FormDataType > formData;

	// const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { name, value } = event.target;
	// 	setResponseBody({ ...responseBody, [name]: value });
	// };
	// const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	console.log(responseBody);
	// };

	return (
		<Container>
			<Picture>
				<Image src={myGif} />
			</Picture>
			<Form>
				<h2 className="heading">Help Us Help You!!</h2>

				<p className="typewriter">
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
							delay: 45,
							strings: ["Book an appointment with our doctors now"],
						}}
					></Typewriter>
				</p>

				<Label>Name</Label>
				<Input type="text" placeholder="Enter your name" required />
				<Label>Age</Label>
				<Input type="number" placeholder="Enter your age" required />
				<Label>Problem</Label>
				<TextArea placeholder="Describe your problem" required />
				<Label>Time</Label>
				<Input type="time" />
				<Button>Submit</Button>
			</Form>
			{/* 
			<section class="section-cta" id="cta">
				<div class="container ">
					<div class="cta">
						<div class="cta-text-box">
							<h2 class="heading-secondary">Get your first meal for free!</h2>
							<p class="cta-text">
								Healthy, tasty and hassle-free meals are waiting for you. Start
								eating well today. You can cancel or pause anytime. And the
								first meal is on us!
							</p>
							<form class="cta-form" name="sign-up" netlify>
								<div>
									<label for="full-name"> Full Name</label>
									<input
										id="full-name"
										type="text"
										name="full-name"
										placeholder="Manish Gupta"
										required
									/>
								</div>

								<div>
									<label for="email"> Email address</label>
									<input
										id="email"
										type="email"
										name="email"
										placeholder="me@example.com"
										required
									/>
								</div>

								<div>
									<label for="select-where"> Where did you hear from us?</label>
									<select id="select-where" name="select-where" required>
										<option value="empty"> Please choose one option.</option>
										<option value="friends">Friends and Family</option>
										<option value="youtube">YouTube video</option>
										<option value="podcast">Podcast</option>
										<option value="facebook">Facebook</option>
										<option value="ad">Ads</option>
										<option value="others">Others</option>
									</select>
								</div>

								<button class="btn btn-form"> Sign up now</button>
							</form>
						</div>
						<div
							class="cta-img-box"
							role="img"
							aria-label="Woman enjoying food"
						></div>
					</div>
				</div>
			</section>
		 */}
		</Container>
	);
};

export default FormComponent;
