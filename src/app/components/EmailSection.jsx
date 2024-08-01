"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center my-12 md:my-12 py-24 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 text-center max-w-md flex flex-col items-center">
        <h5 className="text-4xl font-bold text-white mb-6">
          Connect with me
        </h5>
        <div className="socials flex justify-center gap-6">
          <Link href="https://github.com/HalimUzodike">
            <Image src={GithubIcon} alt="Github Icon" width={70} height={70}/>
          </Link>
          <Link href="https://www.linkedin.com/in/halim-uzodike-a1b2016b/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={70} height={70}/>
          </Link>
          <Link href="mailto:halimuzodike@gmail.com" rel="noopener noreferrer">
            <Image src={GmailIcon} alt="Halim Uzodike- Gmail Icon" width={70} height={70}/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
