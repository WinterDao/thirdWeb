/** @format */
import React, { useState } from "react";
import Image from "next/image";
import "./Hero.css";
import TimeTravel from "../../assets/herotravel-img.png"; // Added the new image

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setEmail("");
  };
  return (
    <>
      <div className="hero">
        <div className="container">
          {/* Left Side */}
          {/* TODO connect the email with a mail explaining how swapping works*/}
          <div className="left">
            <p>Empowering Your Crypto Journey with Art and Innovation</p>
            <h1>Discover the Future with Influences of the 80s</h1>
            <p>
              Join WinterDAO as we bring the magic of the 80s into the digital
              world with FluffTime Traveler. Dive into a world where art meets
              innovation and enjoy our unique digital assets. Explore, trade,
              and collect unique NFTs and meme coins that encapsulate the
              essence of a bygone era. WinterDAO uses FluffTime Traveler NFTs to
              give people gated access to project or meme coin launches at
              pre-sale prices. We want to give the community the feeling that
              they never missed out, because with the NFT, they can easily claim
              an amount of tokens at pre-sale prices. The NFT launch will be in
              Q3. Stay updated by subscribing.
            </p>

            <div className="input-container">
              <button className="btn">Learn More</button>
              {email}
            </div>
          </div>

          {/* Right Side */}
          <div className="right">
            <div className="img-container">
              <Image
                src={TimeTravel}
                alt=""
                style={{
                  filter: "drop-shadow(0px 0px 24px #a726a9a8)",
                }}
              />{" "}
              {/* Updated the image */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
