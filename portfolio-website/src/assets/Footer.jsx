import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://www.linkedin.com/in/satyajeetdas01/" target="_blank">
          <img src="Images/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/satyajeet001" target="_blank">
          <img src="Images/github.png" alt="github" />
        </a>
        <a href="mailto:dassatyajeet0001@gmail.com">
          <img src="Images/gmail.png" alt="email" />
        </a>
      </div>
      <div className="copyright">Copyright &copy; Satyajeet</div>
    </div>
  );
}

export default Footer;
