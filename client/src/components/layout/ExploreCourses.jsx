// import courseImg1 from '@/assets/course_img1.webp';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCourses, setLoading } from "../../redux/courseSlice";


// const ExploreCourses = () => {

// const dispatch = useDispatch();
//   const { data, loading } = useSelector((state) => state.courses);
//   const topCourses = data?.slice(0, 3) || [];
//    useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         dispatch(setLoading(true));

//         const res = await fetch("https://psc.technocitysolutions.com/public/getPackages");
//         const result = await res.json();

//         dispatch(setCourses(result));
//       } catch (error) {
//         console.error(error);
//       } finally {
//         dispatch(setLoading(false));
//       }
//     };

//     fetchCourses();
//   }, [dispatch]);

   
//   return (
   
//  <section className="py-16 px-4">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Explore Courses
//       </h2>

//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {topCourses.map((course) => (
//             <div
//               key={course._id}
//               className="bg-white p-6 rounded-xl shadow-md border"
//             >
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="h-40 w-full object-cover rounded-md"
//               />

//               <h3 className="mt-4 font-semibold text-lg">
//                 {course.title}
//               </h3>

//               <p className="text-gray-600 text-sm mt-2 line-clamp-3">
//                 {course.description}
//               </p>

//               <button className="mt-6 bg-[rgb(var(--secondary))] text-white text-sm px-4 py-2 rounded-md hover:cursor-pointer hover:bg-[rgb(var(--primary))]">
//                 Read more
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
   
//   )
// }

// export default ExploreCourses



import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCourses() {
      try {
        const response = await fetch(
          "",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        const data = await response.json();
        console.log("API response:", data);

        // adjust this based on actual API response
        setCourses(data.data || data.packages || data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }

    getCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((course, index) => (
        <div key={course.id || index}>
          <h3>{course.name || course.title || course.package_name}</h3>
          <p>{course.description}</p>
          <p>₹{course.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;