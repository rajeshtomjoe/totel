import Image from "next/image";

import { Dialog } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

import Button from "@/components/common/button";

export default function UploadPicturesModal({ open, setIsOpen }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-2/5 rounded bg-white">
            <Dialog.Title className="p-4 flex items-center border-b">
              <h3 className="text-xl font-medium">
                Upload room clearing pictures.
              </h3>
              <div className="grow flex justify-end">
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="inline-block rounded-full p-2 bg-slate-100"
                >
                  <IoIosClose className="w-8 h-8" />
                </a>
              </div>
            </Dialog.Title>
            <div className="p-4">
              <div className="rounded-lg border-2 border-dashed flex flex-col p-4 items-center justify-center  space-y-2">
                <div className="border-2 rounded-full p-2 border-dashed">
                  <AiOutlinePlus className="w-8 h-8" />
                </div>
                <p className="text-xl font-medium">Drop your Images Here</p>
                <p>
                  <a href="#" className="text-purple-600">
                    Browse Files
                  </a>{" "}
                  from your Computer
                </p>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Image
                    src="/listing4.png"
                    fill={true}
                    className="object-contain !h-fit !relative"
                    alt="listing"
                  />
                  <div className="absolute top-2 right-2">
                    <a
                      href="#"
                      className="inline-block rounded-full p-1 bg-slate-100"
                    >
                      <IoIosClose className="w-8 h-8" />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/listing4.png"
                    fill={true}
                    className="object-contain !h-fit !relative"
                    alt="listing"
                  />
                  <div className="absolute top-2 right-2">
                    <a
                      href="#"
                      className="inline-block rounded-full p-1 bg-slate-100"
                    >
                      <IoIosClose className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <Image
                    src="/listing4.png"
                    fill={true}
                    className="object-contain !h-fit !relative"
                    alt="listing"
                  />
                  <div className="absolute top-2 right-2">
                    <a
                      href="#"
                      className="inline-block rounded-full p-1 bg-slate-100"
                    >
                      <IoIosClose className="w-8 h-8" />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/listing4.png"
                    fill={true}
                    className="object-contain !h-fit !relative"
                    alt="listing"
                  />
                  <div className="absolute top-2 right-2">
                    <a
                      href="#"
                      className="inline-block rounded-full p-1 bg-slate-100"
                    >
                      <IoIosClose className="w-8 h-8" />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/listing4.png"
                    fill={true}
                    className="object-contain !h-fit !relative"
                    alt="listing"
                  />
                  <div className="absolute top-2 right-2">
                    <a
                      href="#"
                      className="inline-block rounded-full p-1 bg-slate-100"
                    >
                      <IoIosClose className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1"
                >
                  Cancel
                </Button>
                <Button className="py-2.5 px-4 border border-purple-600 rounded-full hover:bg-purple-700 hover:ring-1 hover:ring-purple-700 bg-purple-600 text-white">
                  Submit
                </Button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
