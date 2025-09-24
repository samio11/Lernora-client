"use client";

import { AlertCircleIcon, VideoIcon, XIcon } from "lucide-react";
import { useFileUpload } from "@/hooks/use-file-upload";
import { useEffect } from "react";

export default function SingleVideoUploader({ onChange }: any) {
  const maxSizeMB = 100; // Max 50MB
  const maxSize = maxSizeMB * 1024 * 1024;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "video/*",
    maxSize,
  });

  const previewUrl = files[0]?.preview || null;

  useEffect(() => {
    if (files.length) {
      onChange(files[0].file);
    } else {
      onChange(null);
    }
  }, [files]);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {/* Drop area */}
        <div
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors"
        >
          <input
            {...getInputProps()}
            className="sr-only"
            aria-label="Upload video"
          />
          {previewUrl ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <video
                src={previewUrl}
                className="w-full h-full object-cover"
                controls
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                className="bg-background mb-2 flex h-11 w-11 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <VideoIcon className="h-4 w-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">
                Drop your video here or click to browse
              </p>
              <p className="text-muted-foreground text-xs">
                Max size: {maxSizeMB}MB
              </p>
            </div>
          )}
        </div>
        {previewUrl && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
              onClick={() => removeFile(files[0]?.id)}
              aria-label="Remove video"
            >
              <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="h-3 w-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  );
}
