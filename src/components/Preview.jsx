import Letter from "./Letter";
import preview from "../assets/file-eye.svg";
import { useState } from "react";

export default function Preview(props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setDialogOpen(true)}
        className="fixed right-10 bottom-10 block size-13 rounded-2xl bg-[var(--theme-color)] p-2 lg:hidden"
      >
        <img
          src={preview}
          alt="Preview letter"
          className="brightness-0 invert"
        />
      </div>
      {dialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-4">
            <Letter {...props} />
            <div className="flex justify-end">
              <button
                className="mt-2 rounded-lg px-3 py-1 font-medium"
                onClick={() => setDialogOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="hidden lg:block self-center">
        <Letter {...props} />
      </div>
    </>
  );
}
