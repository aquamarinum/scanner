import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <h4>Scanning Engine</h4>
        <p>Type url here and press the button to get the security report</p>
        <input type="text" placeholder="URL" />
        <button>Start Scanning</button>
      </div>
    </div>
  );
};

export default Home;
