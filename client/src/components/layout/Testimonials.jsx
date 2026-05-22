import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

const testimonials = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The classes are very helpful and the teachers explain everything clearly..",
    name: "Student Name",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "The classes are very helpful and the teachers explain everything clearly.",
    name: "Student Name",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "The classes are very helpful and the teachers explain everything clearly.",
    name: "Student Name",
  },
  
];

const Testimonials = () => {
  return (
   <section className="w-full py-16 px-4 md:px-12 text-white" style={{backgroundImage:"linear-gradient(45deg, rgb(62 111 201), rgb(92 10 135 / 79%))"}}>
      
  <div className="px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-36 max-w-7xl mx-auto">
    
    <div className="text-center mx-auto">
      <h2 className="text-[clamp(28px,4.3vw,46px)] font-bold mb-4">
        Testimonials
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {testimonials.map((item) => (
        <div key={item.id}>
          <div className="border border-white rounded-lg p-6 bg-white/10 backdrop-blur-md min-h-[240px]">
            
            <img
              src={item.img}
              className="w-14 h-14 rounded-full border-2 border-white shadow-lg mx-auto mb-3"
              alt={item.name}
            />

            <p className="text-sm text-center">
              “{item.text}”
            </p>

            <p className="mt-4 text-sm font-medium text-white/80 text-center">
              - {item.name} -
            </p>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
};

export default Testimonials;