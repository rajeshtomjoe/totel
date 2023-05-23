import { IoIosClose } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";

import Alert from "@/components/common/alert";
import Button from "@/components/common/button";
import CheckLoading from "@/components/common/icons/CheckLoading";
import UploadPicturesModal from "./UploadPicturesModal";

export default function UploadPicturesAlert() {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <Alert className="flex border-[1.5px] border-green-700 rounded-lg mt-6 p-6 bg-green-50 gap-4">
        <div className="shrink-0 my-1">
          <CheckLoading />
        </div>
        <div className="grow">
          <div className="flex">
            <div className="space-y-2">
              <h2 className="text-xl">
                You have finished your stay at Cerulean Tower Tokyu Hotel.
                Let&lsquo; s upload the proof of room clearing!
              </h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lobortis enim consectetur eu suspendisse. Malesuada ac libero
                odio nulla ut turpis ut scelerisque sed. Imperdiet commodo
                integer pellentesdsadasdasdasque quis id.
              </p>
            </div>
            <a href="#" className="text-slate-700 hover:text-slate-900">
              <IoIosClose className="w-8 h-8" />
            </a>
          </div>
          <div className="flex mt-6">
            <Button className="shrink-0 flex gap-2 items-center text-sm font-medium">
              <span>Manage Bookings</span> <HiArrowRight />
            </Button>
            <div className="grow flex justify-end gap-4">
              <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1 bg-white">
                Skip
              </Button>
              <Button
                onClick={() => setIsOpen(true)}
                className="py-2.5 px-4 border border-purple-600 rounded-full hover:bg-purple-700 hover:ring-1 hover:ring-purple-700 bg-purple-600 text-white"
              >
                Upload Pictures
              </Button>
            </div>
          </div>
        </div>
      </Alert>
      <UploadPicturesModal open={open} setIsOpen={setIsOpen} />
    </>
  );
}
