import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { setSelectedCourse } from "@/redux/courseSlice";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiPresent } from "react-icons/gi";
import { MdOutlineStar } from "react-icons/md";

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, selectedCourse } = useSelector(
    (state) => state.courses
  );

  // ✅ always derive course safely
 const course =
  selectedCourse && String(selectedCourse._id) === String(id)
    ? selectedCourse
    : data.find((item) => String(item._id) === String(id));

 useEffect(() => {
  if (!course) {
    fetch(`http://localhost:4000/api/courses/id/${id}`)
   
      .then((res) => res.json())
      .then((data) => {
        const courseData = Array.isArray(data) ? data[0] : data;

        // ✅ safety check
        if (courseData && courseData._id) {
          dispatch(setSelectedCourse(courseData));
        } else {
          console.error("Invalid course data:", data);
        }
      })
      .catch((err) => console.log(err));
  }
}, [id, course, dispatch]);

  // ✅ IMPORTANT: wait until data comes
  if (!course) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-10 mt-40 max-w-7xl mx-auto px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-36">
        <div className="col-span-12 md:col-span-4 shadow-md p-10 rounded-md border border-gray-50">
             <div>
          <h1 className="text-2xl font-bold text-[rgb(var(--secondary))]">{course.title}</h1>
          <p className="mt-4">{course.description}</p>

         <div className="flex gap-6">

  <div className="flex items-center gap-2 my-5">
    <span className="bg-blue-100 p-3 rounded-md">
    <FaChalkboardTeacher className="rounded-lg text-2xl" /></span>
    <span className="text-md font-medium text-gray-700">Expert Faculty</span>
  </div>

  <div className="flex items-center gap-2 my-5">
    <span className="rounded-md bg-green-100 p-3">
    <PiStudent className="rounded-lg text-2xl" /></span>
    <span className="text-md font-medium text-gray-700">Trusted by 10k+ students</span>
  </div>

</div>

         
       <div className="p-3 border border-dotted shadow-sm border-gray-300 rounded-lg my-3">

  {course.coursesIncluded?.length > 0 && (
    <div className="flex gap-3">

      {/* ICON */}
      <div className="bg-orange-50 p-3 rounded-md flex items-center justify-center">
        <MdOutlineCastForEducation className="text-2xl text-orange-600" />
      </div>

      {/* CONTENT */}
      <div>

        <h3 className="font-semibold pb-1 text-md">Courses Included</h3>

        {course.coursesIncluded.map((item, index) => (
          <p key={index} className="text-gray-700 text-sm">
            {item}
          </p>
        ))}
      </div>

    </div>
  )}

</div>

     {course.courseOfferings?.length > 0 && (
  <div className="mt-6 flex gap-3">

    {/* ICON */}
  

    {/* CONTENT */}
    <div>
      <h3 className="font-semibold">Course Offerings</h3>

      {course.courseOfferings.map((item, index) => (
        <div key={index} className="flex items-start gap-2 text-gray-700 mt-1">
          <MdOutlineStar className="text-green-600 mt-1" />
          <span>{item}</span>
        </div>
      ))}
    </div>

  </div>
)}
        </div>

<div className="flex flex-col sm:flex-row gap-3 mt-5">
  <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black bg-[rgb(var(--primary))] text-white my-1">Video Classes</button>
  <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black bg-[rgb(var(--primary))] text-white my-1">Mock Tests</button>
  <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black bg-[rgb(var(--primary))] text-white my-1">PYQ</button>
 <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black bg-[rgb(var(--primary))] text-white my-1">Syllabus</button>
  <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black bg-[rgb(var(--primary))] text-white my-1">Study Materials</button>

</div>


        </div>
         <div className="col-span-12 md:col-span-2 shadow-md p-5 rounded-md bg-gray-50">
              <div>
          <img src={course.image} className="w-full rounded" />
        </div>
        <div>
            <h2 className="text-lg text-[rgb(var(--primary))] font-semibold mt-5">Available Plans</h2>
        </div>
     
     <div className="flex flex-col gap-4 mt-4">
  {course.pricing?.map((plan) => (
    <div
      key={plan._id}
      className="border-t border-gray-200 pt-4"
    >
      {/* Duration */}
      <h3 className="text-sm font-semibold text-[rgb(var(--secondary))]">
        {plan.duration}
      </h3>

      {/* Prices */}
      <span className="text-sm font-bold line-through text-red-500">
        ₹ {plan.originalPrice}
      </span>
      <br />

      <span className="text-lg font-bold text-green-600">
        ₹ {plan.price}
      </span>

      {/* Offer */}
      <p className="text-xs text-[rgb(var(--primary))]">Limited time offer</p>

      {/* Button */}
      <button
        type="button"
        className="mt-2 text-sm bg-[rgb(var(--secondary))] text-white p-2 rounded-md hover:bg-gray-200 hover:text-black"
      >
        Join Now
      </button>

      {/* Validity */}
      <p className="text-sm mt-2">
        Validity:{" "}
        <span className="font-bold">
          {plan.validity} Days
        </span>
      </p>
    </div>
  ))}
</div>
    

       

        </div>


      </div>




      {/* <div className="flex gap-10 mt-40 max-w-7xl mx-auto px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-36">
        <div>
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <p className="mt-4">{course.description}</p>

          {course.coursesIncluded?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold">Courses Included</h3>
              {course.coursesIncluded.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}

          {course.courseOfferings?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold">Course Offerings</h3>
              {course.courseOfferings.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}

          {course.explanation?.map((item, index) => (
            <div key={index} className="mt-3">
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>

        <div>
          <img src={course.image} className="w-80 rounded" />
        </div>
      </div> */}
    </div>
  );
};

export default CourseDetails;