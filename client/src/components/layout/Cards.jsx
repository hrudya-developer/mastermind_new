import { FaChalkboardTeacher } from "react-icons/fa";
import { MdVideoCameraFront } from "react-icons/md";
import { BsQuestionLg } from "react-icons/bs";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuBookOpenText } from "react-icons/lu";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineWhatsapp } from "react-icons/md";

const Cards = () => {
  const cardsData = [
    {
      title: "Daily Current Affairs",
      text: "We provide daily current affairs. Stay up-to-date with the latest local, national, and international news for competitive exams.",
      icon: <MdOutlineTipsAndUpdates />,
    },
    {
      title: "PSC Bulletin: Current Affairs",
      text: "Special focus on the monthly PSC bulletin, current affairs.",
      icon: <IoNewspaperOutline />,
    },
    {
      title: "SCERT Based Classes",
      text: "Foundation-building lessons based on the latest SCERT school textbooks, a crucial requirement for the new PSC exam patterns.",
      icon: <LuBookOpenText />,
    },
    {
      title: "PYQ Analysis",
      text: "Deep dives into previous year questions to help you understand exam patterns and frequently asked topics.",
      icon: <BsQuestionLg />,
    },
    {
      title: "Regular Mock tests",
      text: "Test your knowledge and improve your time management with our comprehensive mock exams.",
      icon: <TfiWrite />,
    },
    {
      title: "Interactive Live Sessions",
      text: "Clear your doubts and interact directly with educators during our live classes.",
      icon: <MdVideoCameraFront />,
    },
    {
      title: "Free Mentor Support",
      text: "Get personalized guidance and study strategies from experienced mentors to keep your preparation on track.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "WhatsApp study Groups",
      text: "Join our active community of aspirants for daily updates, study materials, and peer support.",
      icon: <MdOutlineWhatsapp />,
    },
    {
      title: "Performance Analysis",
      text: "Get detailed insights into your test performance, including strengths, weaknesses, and improvement areas, helping you focus on what matters most.",
      icon: <GrDocumentPerformance />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div
        className="max-w-7xl mx-auto text-center px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-36"
        data-aos="fade-up"
      >
        <h2 className="text-[clamp(26px,4.3vw,46px)] font-bold text-[rgb(var(--secondary))]">
          Why join us?
        </h2>

        <p className="mt-5 text-center md:text-start text-gray-700 text-[clamp(14px,1.2vw,18px)]">
          We offer a range of educational services, including daily current
          affairs updates and foundation-building lessons based on the latest
          SCERT curriculum. Our syllabus-oriented classes cater to various
          exams and include previous year question papers (10th, 12th, and
          degree levels), full-length mock tests, and a monthly PSC bulletin
          for current affairs.
        </p>

        <p className="mt-3 text-center md:text-start text-gray-700 text-[clamp(14px,1.2vw,18px)]">
          Daily current affairs-we provide daily current affairs. Stay
          up-to-date with the latest local, national, and international news
          for competitive exams.
        </p>

        <div className="mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                bg-gray-100
                rounded-2xl
                p-6
                text-center
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div
                className="
                  w-16 h-16 mx-auto
                  flex items-center justify-center
                  rounded-full
                  text-[20px] md:text-[24px] lg:text-[26px]
                  bg-white
                  text-[rgb(var(--primary))]
                  shadow-sm
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-4 font-semibold text-[clamp(15px,1.2vw,20px)] text-[rgb(var(--secondary))]">
                {item.title}
              </h3>

              <p className="text-[clamp(14px,1vw,16px)] mt-2 text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;