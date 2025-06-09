import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  const images = [
    '/images/pic4.jpg',
    '/images/pic7.jpg',
    '/images/pic8.jpg',
    '/images/pic9.jpg',
    '/images/pic10.jpg',
    '/images/pic11.jpg',
    '/images/pic12.jpg',
    '/images/pic13.jpg',
    '/images/pic1.jpg',
    '/images/pic14.jpg',
    '/images/pic2.jpg',
    '/images/pic3.jpg',
    '/images/pic5.jpg'
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left">
            <h2 className="section-heading mb-8 lg:mb-10">About Me</h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Hi there! I'm an aspiring software developer with a passion for creating clean, user-friendly web experiences. I enjoy bringing ideas to life through code and love the process of turning challenges into elegant solutions.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I'm constantly exploring new technologies, improving my skills, and staying curious about the ever-evolving world of tech. Whether it's frontend development or learning something new, I'm always up for the challenge.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I'm open to new opportunities, collaborations, and connecting with like-minded individuals. Feel free to reach out!
              </p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="w-full lg:w-1/2 max-w-[400px] mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Slider {...settings}>
                {images.map((src, index) => (
                  <div key={index} className="outline-none">
                    <img 
                      src={src} 
                      alt={`Slide ${index}`}   
                      className="w-full h-[250px] sm:h-[300px] object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
