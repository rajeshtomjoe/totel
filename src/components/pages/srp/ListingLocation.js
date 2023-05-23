import Image from "next/image";

import { AiOutlineZoomOut, AiOutlineZoomIn } from "react-icons/ai";
import { IoScanOutline } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";

import Button from "@/components/common/button";

export default function ListingLocation() {
  return (
    <div className="space-y-4 mb-12">
      <h2 className="text-2xl font-semibold">Where you’ll be</h2>
      <div className="relative">
        <Image
          src="/map.png"
          fill={true}
          className="object-contain !h-fit !relative rounded-2xl"
          alt="map"
        />
        <div className="absolute top-4 right-4">
          <a href="#" className="rounded-full bg-white inline-block p-2 shadow">
            <IoScanOutline />
          </a>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="rounded-full bg-white inline-block p-2 shadow"
            >
              <AiOutlineZoomIn />
            </a>
            <a
              href="#"
              className="rounded-full bg-white inline-block p-2 shadow"
            >
              <AiOutlineZoomOut />
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-white shadow-lg p-4 rounded-md relative">
              Exact location provided after booking
              <div className="absolute -bottom-[8px] right-1/2 -mr-2 z-10 border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
            </div>

            <div>
              <a
                href="#"
                className="rounded-full bg-purple-600 inline-block p-2 shadow text-white"
              >
                <BiHomeAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>
        Very dynamic and appreciated district by the people of Bordeaux thanks
        to rue St James and place Fernand Lafargue. Home to many historical
        monuments such as the Grosse Cloche, the Porte de Bourgogne and the
        Porte Cailhau, and cultural sites such as the Aquitaine Museum.
      </p>
      <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1">
        Show more
      </Button>
    </div>
  );
}
