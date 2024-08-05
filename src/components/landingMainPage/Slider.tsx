import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/slider.jpg';
import image2 from '../../assets/images/slider2.jpg';
import image3 from '../../assets/images/slider3.jpg';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  desc: string;
  btn1: string;
  btn2: string;
}

const slides: Slide[] = [
  { image: image1, title: "We Provide", subtitle: "Medical", text: "Services That You Can Trust!", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.", btn1: "Get Appointment", btn2: "About Us" },
  { image: image2, title: "We Provide", subtitle: "Medical", text: "Services That You Can Trust!", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque، faucibus libero eu، gravida quam.", btn1: "Get Appointment", btn2: "Learn More" },
  { image: image3, title: "We Provide", subtitle: "Medical", text: "Services That You Can Trust!", desc: "Lorem ipsum dolor sit amet، consectetur adipiscing elit. Mauris sed nisl pellentesque، faucibus libero eu، gravida quam.", btn1: "Get Appointment", btn2: "Contact Now" }
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
<section className="relative w-full h-[380px]  md:h-[600px] overflow-hidden">
{slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="container mx-auto px-4 flex items-center max-w-full xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px]">
            <div className="w-full md:w-7/12">
              <div className="text-black mt-20 xs:mt-80 md:mt-120">
                <h1 className="text-[20px] xs:text-[28px] md:text-[38px] font-600 leading-[25px] xs:leading-[35px] sm:leading-[45px]">
                  {slide.title} <span className="text-blue-500">{slide.subtitle}</span> {slide.text}
                </h1>
                <p className="mt-[27px] leading-6 xs:text-[14px] text-[13px] text-[#2C2D3F] font-normal">{slide.desc}</p>
                <div className="mt-[30px] flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-4">
  <a href="#" className="btn bg-gray-800 text-white py-2 px-4 xs:py-3 xs:px-6 md:py-4 md:px-8 rounded-md text-xs xs:text-sm sm:text-base md:text-lg max-h-[50px] xs:max-h-[35px] sm:max-h-[40px] md:max-h-[40px] lg:max-h-[50px] flex items-center justify-center">
    {slide.btn1}
  </a>
  <a href="#" className="btn bg-blue-500 text-white py-2 px-4 xs:py-3 xs:px-6 md:py-4 md:px-8 rounded-md text-xs xs:text-sm sm:text-base md:text-lg max-h-[50px] xs:max-h-[35px] sm:max-h-[40px] md:max-h-[40px] lg:max-h-[50px] flex items-center justify-center">
    {slide.btn2}
  </a>
</div>




              </div>
            </div>
          </div>
        </div>
      ))}
<button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white w-[50px] h-[50px] xs:w-[35px] xs:h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] rounded-full flex items-center justify-center z-10 hidden xs:block"
>
  <i className="fa fa-angle-left" aria-hidden="true"></i>
</button>
<button
  onClick={nextSlide}
  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white w-[50px] h-[50px] xs:w-[35px] xs:h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] rounded-full flex items-center justify-center z-10 hidden xs:block"
>
  <i className="fa fa-angle-right" aria-hidden="true"></i>
</button>





    </section>
  );
};

export default Slider;
/*

    padding: 13px 25px;


*/