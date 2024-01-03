import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b21b5be304d115cd.jpg?q=20" },
  { url: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/839eae25a15f66af.png?q=20" },
  { url: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1575923f761f2f2a.jpg?q=20" },
];



const Slider = () => {

  return (
    <div className='slider'>
        <SimpleImageSlider
        width={1511}
        height={250}
        images={images}
        autoPlay={true}
        showBullets={true}
        showNavs={true}
    />
    </div>
  )
}

export default Slider