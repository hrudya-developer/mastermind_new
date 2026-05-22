import bg_form from "@/assets/bg_form.webp";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EnquiryForm1 = () => {

  const enquirySchema = Yup.object({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter valid mobile number")
      .required("Mobile number is required"),
    course: Yup.string().required("Please select course"),
    address: Yup.string().required("Address is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:4000/api/contact", {
        name: values.fullname,
        email: values.email,
        phone: values.mobile,
        course: values.course,
        address: values.address,
        message: values.message,
      });

      alert("Form submitted successfully!");
      resetForm();
    } catch (error) {
  console.error("API Error:", error.response?.data || error.message);
  alert(error.response?.data?.message || "Server error");
}
  };

  return (
    <section
      className="relative h-auto py-15 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_form})` }}
    >

      <div className="absolute inset-0 bg-[rgb(var(--secondary))]/80 z-10" />

      <div
        className="relative flex flex-col items-center justify-center px-1 text-center z-20 my-5  pt-14"
        data-aos="fade-up"
      >
        <h1 className="text-white font-bold text-[clamp(28px,4.3vw,46px)] text-center">
          Ready to start your learning journey?
        </h1>
        <p className="text-white py-5 text-[clamp(14px,1.2vw,18px)]">
          Join thousands of students who are already learning with us.
        </p>
      </div>

      <Formik
        initialValues={{
          fullname: "",
          email: "",
          mobile: "",
          course: "",
          address: "",
          message: "",
        }}
        validationSchema={enquirySchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-5">
            <div
              className="grid grid-cols-4 gap-5 z-30 relative max-[550px]:grid-cols-full"
              data-aos="fade-up"
            >

              {/* Full Name */}
              <div className="col-span-2 bg-transparent border border-white rounded-sm max-[550px]:col-span-full">
                <Field
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  className="w-full bg-transparent py-1.5 px-2 pl-1 text-base text-white placeholder:text-white focus:outline-none sm:text-sm/6"
                />
                <ErrorMessage name="fullname" component="div" className="text-red-400 text-xs pl-1"/>
              </div>

              {/* Email */}
              <div className="col-span-2 bg-transparent border border-white rounded-sm max-[550px]:col-span-full">
                <Field
                  type="email"
                  name="email"
                  placeholder="EmailID"
                  className="w-full bg-transparent py-1.5 px-2 pl-1 text-base text-white placeholder:text-white focus:outline-none sm:text-sm/6"
                />
                <ErrorMessage name="email" component="div" className="text-red-400 text-xs pl-1"/>
              </div>

              {/* Mobile */}
              <div className="col-span-2 bg-transparent border border-white rounded-sm max-[550px]:col-span-full">
                <Field
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="w-full bg-transparent py-1.5 pl-1 px-2 text-base text-white placeholder:text-white focus:outline-none sm:text-sm/6"
                />
                <ErrorMessage name="mobile" component="div" className="text-red-400 text-xs pl-1"/>
              </div>

              {/* Course */}
              <div className="col-span-2 bg-transparent border border-white rounded-sm max-[550px]:col-span-full">
                <Field
                  type="text"
                  name="course"
                  placeholder="Select Course"
                  className="w-full bg-transparent py-1.5 pl-1 px-2 text-base text-white placeholder:text-white focus:outline-none sm:text-sm/6"
                />
                <ErrorMessage name="course" component="div" className="text-red-400 text-xs pl-1"/>
              </div>

              {/* Address */}
              <div className="col-span-2 bg-transparent border border-white rounded-sm max-[550px]:col-span-full">
                <Field
                  as="textarea"
                  name="address"
                  placeholder="Address"
                  rows="3"
                  className="w-full rounded-md bg-transparent px-2 py-1.5 text-base text-white placeholder:text-white focus:outline-none sm:text-sm/6"
                />
                <ErrorMessage name="address" component="div" className="text-red-400 text-xs pl-1"/>
              </div>

              {/* Message */}
              <div className="col-span-2 bg-transparent border border-white rounded-sm max-[550px]:col-span-full">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  rows="3"
                  className="w-full rounded-md bg-transparent px-2 py-1.5 text-base text-white placeholder:text-white focus:outline-none sm:text-sm/6"
                />
                <ErrorMessage name="message" component="div" className="text-red-400 text-xs pl-1"/>
              </div>

              {/* Submit */}
              <div className="text-center col-span-4">
                <button
                  type="submit"
                  className="w-40 mb-14 bg-white p-3 border rounded-md text-center mx-auto text-[clamp(12px,1vw,16px)] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-[(var(--primary))] hover:text-white"
                >
                  Submit
                </button>
              </div>

            </div>
          </div>
        </Form>
      </Formik>

    </section>
  );
};

export default EnquiryForm1;