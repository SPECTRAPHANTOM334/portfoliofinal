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
import Loader from "./components/Loader"; // Import the Loader component

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

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
      clearTimeout(timer); // Clear timer if component unmounts
    };
  }, []);

  if (isLoading) {
    return <Loader />; // Show loader while loading
  }

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
