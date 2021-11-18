import React, { Component } from "react";
import "./style.css";
const Leftside = () => {
  return (
    <div class="leftside">
      <img
        src="https://pbs.twimg.com/profile_images/1037757289464324096/3pR1Spaz_400x400.jpg"
        id="personalimg"
      ></img>
      <h2>Mohammed Ali Alwehied</h2>
      <h3>Full Stack Developer</h3>
      <hr />
      <div class="infolocation">
        <img
          src="https://icons-for-free.com/iconfiles/png/512/location+map+navigator+target+track+icon-1320086049305773935.png"
          alt="location"
          id="locationimg"
        ></img>
        <p>Almithnab , Qassim , KSA</p>
      </div>
      <div class="infoemail">
        <img
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/2x/external-email-interface-kiranshastry-solid-kiranshastry-1.png"
          id="emailimg"
        ></img>
        <a href="mailto:mod8920@gmail.com">mod8920@gmail.com</a>
      </div>
      <hr/>
      <div>
        <a href="https://twitter.com/mod8920">
          
          <img
            src="https://icon-library.com/images/black-twitter-icon-transparent-background/black-twitter-icon-transparent-background-0.jpg"
            id="twitterimg"
          />
        </a>
        <a href="https://github.com/Mohammedali18">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            id="githubimg"
          />
        </a>
      </div>
      <hr/>
      <p id="lastp">
      I built this site with React components and a JSON Resume Schema.
       The full source code can be found in my Github repo.
      </p>
    </div>
  );
};
export default Leftside;
