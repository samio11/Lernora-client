"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import SIngleImageUploader from "../shared/SIngleImageUploader";
import SingleVideoUploader from "../shared/SingleVideoUploader";
import { createCourse } from "@/services/course/course.services";
// import { useAddCourseMutation } from "@/redux/features/course/course.api"; // <- connect later

export function AddCourseModal() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);

  // const [addCourse] = useAddCourseMutation(); // hook for API call

  const form = useForm({
    defaultValues: {
      title: "",
      desc: "",
    },
  });

  const onSubmit = async (data: any) => {
    const courseCreate = toast.loading("Course is adding");
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    if (image) formData.append("image", image);
    if (video) formData.append("video", video);

    try {
      const result = await createCourse(formData);
      if (result) {
        toast.success("Course Added", { id: courseCreate });
        setOpen(false);
        form.reset();
        setImage(null);
        setVideo(null);
      } else {
        toast.error("Course Added failed", { id: courseCreate });
        setOpen(false);
        form.reset();
        setImage(null);
        setVideo(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!", { id: courseCreate });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Course</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-5"
            id="add-course"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter course title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter course description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>

          {/* Uploaders */}
          <div className="space-y-4">
            <div>
              <FormLabel>Course Thumbnail</FormLabel>
              <SIngleImageUploader onChange={setImage} />
            </div>
            <div>
              <FormLabel>Course Video</FormLabel>
              <SingleVideoUploader onChange={setVideo} />
            </div>
          </div>
        </Form>

        {/* Footer */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button disabled={!image || !video} type="submit" form="add-course">
            Save Course
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
