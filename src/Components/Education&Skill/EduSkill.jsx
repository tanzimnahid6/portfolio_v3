import ProgressBar from "@ramonak/react-progress-bar";

import { FaSchool, FaUniversity } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/Ri";
import { MdGolfCourse } from "react-icons/Md";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const EduSkill = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="px-4 md:px-14 py-16 bg-gradient-to-l from-[#1d2e56] to-[#0B1120] ">
      <h1 className="text-4xl font-bold text-white py-8">EDUCATION & SKILLS</h1>
      <div
        data-aos="fade-zoom-in"
        className="grid grid-cols-1 w-full place-items-center md:grid-cols-2 gap-2 pb-4"
      >
        <div className="bg-[#0a1123]  md:w-3/4  w-full rounded-xl text-white p-8 shadow-2xl">
          <h1 className="text-2xl font-bold pt-2 pb-8 text-[#38BDF8]">Education</h1>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 md:text-xl">
                <span>
                  <FaUniversity></FaUniversity>
                </span>
                <h1>Jagannath University,Dhaka</h1>
              </div>
              <p>Department of Mathematics</p>
              <p>2020 - Present</p>
            </div>
            <div>
              <div className="flex items-center gap-2 md:text-xl">
                <span>
                  <FaSchool></FaSchool>
                </span>
                <h1>Agrani School And Collage,Rajshahi</h1>
              </div>
              <p>2017 - 2019</p>
            </div>
            <div>
              <div className="flex items-center gap-2 md:text-xl">
                <span>
                  <RiSchoolFill></RiSchoolFill>
                </span>
                <h1>Dharabarisha High School,Natore</h1>
              </div>
              <p>Left 2017</p>
            </div>

            <div>
              <h1 className="text-2xl font-bold pb-4 text-[#38BDF8]">Courses</h1>

              <div className="flex items-center gap-2 md:text-xl">
                <span>
                  <MdGolfCourse></MdGolfCourse>
                </span>
                <h1>Programming Hero</h1>
              </div>
              <p>Complete Web Development Course</p>
              <p>Dec 2022 - June 2023</p>
            </div>
          </div>
        </div>

        <div className="p-8 w-full">
          <h1 className="text-4xl md:text-xl pb-4 font-bold md:text-left text-center text-[#38BDF8]">
            My Skills
          </h1>
          <p className=" text-gray-200 pb-4">
            Experienced MERN stack developer adept at creating robust and
            scalable full-stack web applications. Proficient in MongoDB,
            Express.js, React.js, and Node.js, with a strong command of RESTful
            API development, UI/UX design, and data management. Committed to
            delivering high-quality code and exceptional user experiences while
            adhering to best practices and industry standards.
          </p>
          <div className="flex flex-col gap-4 text-2xl">
            <ProgressBar
              completed={80}
              bgColor="#111A31"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="JavaScript"
            />
            <ProgressBar
              completed={85}
              bgColor="#111A31"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="React"
            />
            <ProgressBar
              completed={70}
              bgColor="#111A31"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="Redux"
            />
              <ProgressBar
              completed={65}
              bgColor="#111A31"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="Next"
            />
            <ProgressBar
              completed={60}
              bgColor="#111A31"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="MongoDB"
            />
            <ProgressBar
              completed={75}
              bgColor="#111A31"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="Express.JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduSkill;
