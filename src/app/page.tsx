import { AddCourseModal } from "@/components/Course/AddCourseModal";
import CourseCard from "@/components/Home/CourseCard";
import { getAllCourse } from "@/services/course/course.services";
import React from "react";

export default async function Home() {
  const { data: courseData } = await getAllCourse();
  console.log(courseData);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-5">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Our Courses
        </h1>
        <div className="my-4">
          <AddCourseModal></AddCourseModal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course: any) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
