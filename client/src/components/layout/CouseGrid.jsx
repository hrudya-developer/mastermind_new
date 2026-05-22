import { useSelector } from "react-redux";

const CoursesGrid = ({ handleCourseDetails }) => {
  const courses = useSelector((state) => state.courses.data);

  if (!courses || courses.length === 0) {
    return <p>No courses found</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-5 my-10">
      {courses.map((course) => (
        <div key={course._id} className="p-3 border rounded bg-gray-50">
          <img src={course.image} />
          <div>

          <h3 className="py-4 text-md font-semibold truncate">{course.title}</h3>

          <button onClick={() => handleCourseDetails(course)} className="bg-[rgb(var(--secondary))] text-white p-2 text-sm rounded-md hover:cursor-pointer hover:bg-[rgb(var(--primary))]">
            View Details
          </button>
        </div></div>
      ))}
    </div>
  );
};

export default CoursesGrid;