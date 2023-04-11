import React, { useEffect, useState } from "react";
import HeroThumbnails from "./HeroThumbnails";
import Carousel from "./Carousel";

const HeroContainer = () => {
  // Temporary array of images for logic testing, will be replaced by API fetch calls
  const testArr = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ea3a034a-351d-4d5e-9e39-6ebe24eebd23/air-jordan-1-mid-mens-shoes-b3js2D.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b2a37016-a8c8-4700-9215-7814ef2a99a5/air-jordan-1-mid-mens-shoes-b3js2D.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d35fd628-8d5f-441c-9151-fb39b053b2ed/air-jordan-1-mid-mens-shoes-b3js2D.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f3c594b4-5e8a-4327-87c4-4d55aa3aa69e/air-jordan-1-mid-mens-shoes-b3js2D.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3587121c-5ff8-45b0-90b2-2cef3cb78b61/air-jordan-1-mid-mens-shoes-b3js2D.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c2bd1f9d-2bfb-4f4d-9f92-23bc7eadc95e/air-jordan-1-mid-mens-shoes-b3js2D.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/376a8a9e-7bcf-496a-bb03-1f8ae6148036/air-jordan-1-mid-mens-shoes-b3js2D.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5bd93a59-5883-4ebe-94fa-38a541acb25c/air-jordan-1-mid-mens-shoes-b3js2D.png",
  ];

  // State management for carousel buttons to cycle through array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  // State management for which image is set to focus image
  const [focusImage, setFocusedImage] = useState();

  // Default images to load on initial render
  useEffect(() => {
    fetch("http://localhost:8000/api/shoes/1")
      .then((res) => res.json())
      .then((data) => setFocusedImage(data[0].image));
  }, []);

  // Carousel button controls
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % testArr.length);
    setFocusedImage(testArr[currentIndex]);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1) % testArr.length);
    setFocusedImage(testArr[currentIndex]);
  };

  // Sets focused image when mouse enters a thumbnail image
  const handleEnter = (image) => {
    setFocusedImage(image);
  };

  // Rendering
  return (
    <div className="hero-container">
      <HeroThumbnails handleEnter={handleEnter} testArr={testArr} />
      <div className="hero-image-container">
        <img id="hero-img" src={focusImage} alt="" />
        <Carousel prevImage={prevImage} nextImage={nextImage} />
      </div>
    </div>
  );
};

export default HeroContainer;
