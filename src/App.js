import React, { useState, useEffect } from "react";
import $ from "jquery";

import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  const [resumeData, setResumeData] = useState("");

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

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
    </div>
  );
}

export default App;
