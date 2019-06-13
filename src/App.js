import React from "react";
import "./App.css";

import JobAd from "./JobAd";

function App() {
  return (
    <div className="App">
      <JobAd
        type="Related Job"
        location="Remote"
        title="Senior Site Reliability Engineer"
        company="PubNative GmbH"
        jobText="We are looking for a Senior Site Reliability Engineer to build and operate infrastructure platforms and provide technical consultancy to engineering teams on how to build reliable, scalable and efficient services. ...(read more)"
      />
    </div>
  );
}

export default App;
