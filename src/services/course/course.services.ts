"use server";
import { revalidateTag } from "next/cache";

export const createCourse = async (payload: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/course/create`,
      {
        method: "POST",
        body: payload,
      }
    );
    revalidateTag("course");
    const result = await res.json();
    return result;
  } catch (err) {
    throw err;
  }
};

export const getAllCourse = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/course`, {
      method: "GET",
      next: {
        tags: ["course"],
      },
    });
    const result = await res.json();
    return result;
  } catch (err) {
    throw err;
  }
};

export const getACourse = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/course/${id}`, {
      method: "GET",
    });
    const result = await res.json();
    return result;
  } catch (err) {
    throw err;
  }
};

export const deleteACourse = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/course/${id}`, {
      method: "DELETE",
    });
    revalidateTag("course");
    const result = await res.json();
    return result;
  } catch (err) {
    throw err;
  }
};
