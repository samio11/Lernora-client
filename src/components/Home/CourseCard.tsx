"use client";

import React from "react";
import { Button } from "@/components/ui/button"; // SadCN Button
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { ICourse } from "@/type/course.interface";
import { Trash2Icon } from "lucide-react";
import Swal from "sweetalert2";
import { deleteACourse } from "@/services/course/course.services";

const CourseCard = ({ course }: { course: ICourse }) => {
  const handleDeleteCourse = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteACourse(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Course Image */}
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-52 object-cover"
      />

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
          {course.desc}
        </p>

        {/* View Button with Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              View
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogTitle>{course.title}</DialogTitle>
            <DialogDescription className="mt-2 mb-4">
              {course.desc}
            </DialogDescription>
            <video controls className="w-full h-[300px] rounded-lg">
              <source src={course.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <DialogClose className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
              Close
            </DialogClose>
          </DialogContent>
        </Dialog>
        <button
          onClick={() => handleDeleteCourse(course?._id as string)}
          className="btn btn-error btn-outline btn-wide my-3 mx-auto"
        >
          <Trash2Icon></Trash2Icon>Delete
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
