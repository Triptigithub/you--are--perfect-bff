import React from "react";
import "./Footer.css";
import Twitter from "../assets/twitter.png";
import Insta from "../assets/instagram.png";
import Discord from "../assets/discord.png";
function Footer() {
	return (
		<footer className="foot-parent">
			<div className="footer">
				<div className="column">
					<h3 className="column-head">About Us</h3>
					<li>
						We are here to make sure that you are always happy, we can help you
						to stay safe and calm.
					</li>
					{/* <ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
					</ul> */}
				</div>
				<div className="column">
					<h3 className="column-head">Contact Us</h3>
					<ul>
						<li>123 Main Street</li>
						<li>Delhi, West-10001 </li>
						<li>(123)XXX-7890</li>
						<li>Lorem ipsum dolor</li>
					</ul>
				</div>
				<div className="column">
					<h3 className="column-head">Follow Us</h3>
					<ul className="socials">
						<li>
							<a
								href="https://www.flaticon.com/free-icons/twitter"
								title="twitter icons"
							>
								<img src={Twitter} alt="lol" className="social-icon" />
							</a>
						</li>
						<li>
							<a
								href="https://www.flaticon.com/free-icons/instagram"
								title="instagram icons"
							>
								<img src={Insta} alt="lol" className="social-icon" />
							</a>
						</li>
						<li>
							<a
								href="https://www.flaticon.com/free-icons/discord"
								title="discord icons"
							>
								<img src={Discord} alt="lol" className="social-icon" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	); /* position: absolute; */
}

export default Footer;
