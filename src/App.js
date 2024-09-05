/** @format */

// App.js
import React, { useEffect, useState } from "react";
import "./styling/App.css";
import "./styling/icons.css";
import "./styling/header.css";
import "./styling/footer.css";
import "./styling/recentwork.css";
import "./styling/copyright.css";
import "./styling/mediaqueries.css";
import Header from "./components/Header";
import RecentWork from "./components/RecentWork";
import Footer from "./components/Footer";
import Copyright from "./components/copyright";

const App = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <RecentWork />
      <Footer />
      <Copyright showScrollUp={showScrollUp} />
    </div>
  );
};

export default App;
