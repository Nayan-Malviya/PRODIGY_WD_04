import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/96246041"}
          alt="Founder"
        />

        <h2>Nayan Malviya</h2>
      </div>
      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/nayan-malviya-b22000223/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/nayanmalviya89" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Nayan-Malviya" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;