import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Carouselcomp from "./components/Carouselcomp";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Categories from "./components/Categories";
import Shimmer from "./components/Shimmer"; // Import the LoadingPage component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Render the LoadingPage component if loading is true */}
      {loading ? (
        <Shimmer />
      ) : (
        // Render the actual content once loading is complete
        <>
          <Header/>
          <Categories/>
          <Carouselcomp/>
          <Body/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
