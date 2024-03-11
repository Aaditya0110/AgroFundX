import { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function ImageSlider() {
  const [imageNum, setImageNum] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderWidth = windowWidth > 768 ? 1650.5 : windowWidth - 20;
  const sliderHeight = windowWidth > 768 ? 400 : 200;

  const sliderImages = [
    {
      // url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fagricultural-corn-field%2F69&psig=AOvVaw3_c_i6zkBBzmKin6xTCyHg&ust=1709028617237000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOji4fDhyIQDFQAAAAAdAAAAABAD",
    },
    {
      // url: "https://thumbs.dreamstime.com/b/lone-tree-meadow-sunriseidyllic-fabulous-landscapes-39659821.jpg",
    },
    {
      // url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
    },
    {
      // url: "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
    },
    {
      // url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU",
    },
    // Add more image URLs here
  ];

  return (
    <div>
      <SimpleImageSlider
        width={sliderWidth}
        height={sliderHeight}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
        // Add style to adjust image height
        style={{
          '.ImageSlider img': {
            maxHeight: `${sliderHeight}px`,
          }
        }}
      />
    </div>
  );
}
