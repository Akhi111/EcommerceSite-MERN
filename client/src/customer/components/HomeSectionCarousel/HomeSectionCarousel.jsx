import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState, useRef } from "react"; // Import useRef

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current index
  const carouselRef = useRef(null); // Ref to reference AliceCarousel component

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard key={item.id} product={item} />);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideChanged = (event) => {
    setCurrentIndex(event.item); // Update currentIndex when slide changes
  };

  return (
    <div className="border">
      <h2 className=" text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          ref={carouselRef} // Attach the ref to the AliceCarousel component
          onSlideChanged={slideChanged} // Callback to track slide changes
        />

        {/* Previous Button */}
        {currentIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "#f7941f",
              },
            }}
            aria-label="prev"
            onClick={handlePrev} // Attach onClick handler to slide previous
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}

        {/* Next Button */}
        {currentIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "#f7941f",
              },
            }}
            aria-label="next"
            onClick={handleNext} // Attach onClick handler to slide next
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(+90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
