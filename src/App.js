import React, { useState, useEffect } from "react";
import $ from "jquery";

import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";

function App() {
  const [resumeData, setResumeData] = useState({});

  function getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (err) {
        console.log(err);
        alert(err);
      },
    });
  }

  useEffect(() => {
    getResumeData();
  }, []);

  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     document.querySelector(this.getAttribute("href")).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //     console.log(anchor)
  //   });
  // });

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
    </div>
  );
}

export default App;
