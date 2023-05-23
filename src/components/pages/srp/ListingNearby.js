import Image from "next/image";

import { HiOutlineStar } from "react-icons/hi";

import Button from "@/components/common/button";

export default function ListingNearby() {
  return (
    <>
      <div className="flex">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Nearby hotels</h2>
          <p className="text-gray-500 text-sm w-4/6">
            You can find places and stay with hotels and home-stays ranked by
            travellers. What fun could we have more than having roommate with
            similar interest.
          </p>
        </div>
        <div className="grow flex justify-end">
          <div>
            <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1 bg-white">
              Show more
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-4">
          <Image
            src="/nearby1.png"
            fill={true}
            className="object-contain !h-fit !relative rounded-t-lg"
            alt="nearby"
          />
          <div className="border p-4 rounded-b-lg bg-white space-y-4">
            <div className="flex">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Hotel Assenzio</h3>
                <p className="text-sm">25 Apr 2022 - 28 Apr 2022</p>
              </div>
              <div className="grow flex justify-end items-start">
                <div className="flex items-center gap-1 font-medium">
                  <HiOutlineStar /> 4.2
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              But happy to move in with more than that, I’m super easy going and
              tidy.
            </p>
            <p className="font-medium">$32 / Day</p>
          </div>
        </div>
        <div className="col-span-4">
          <Image
            src="/nearby2.png"
            fill={true}
            className="object-contain !h-fit !relative rounded-t-lg"
            alt="nearby"
          />
          <div className="border p-4 rounded-b-lg bg-white space-y-4">
            <div className="flex">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Hotel Assenzio</h3>
                <p className="text-sm">25 Apr 2022 - 28 Apr 2022</p>
              </div>
              <div className="grow flex justify-end items-start">
                <div className="flex items-center gap-1 font-medium">
                  <HiOutlineStar /> 4.2
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              But happy to move in with more than that, I’m super easy going and
              tidy.
            </p>
            <p className="font-medium">$32 / Day</p>
          </div>
        </div>
        <div className="col-span-4">
          <Image
            src="/nearby3.png"
            fill={true}
            className="object-contain !h-fit !relative rounded-t-lg"
            alt="nearby"
          />
          <div className="border p-4 rounded-b-lg bg-white space-y-4">
            <div className="flex">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Hotel Assenzio</h3>
                <p className="text-sm">25 Apr 2022 - 28 Apr 2022</p>
              </div>
              <div className="grow flex justify-end items-start">
                <div className="flex items-center gap-1 font-medium">
                  <HiOutlineStar /> 4.2
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              But happy to move in with more than that, I’m super easy going and
              tidy.
            </p>
            <p className="font-medium">$32 / Day</p>
          </div>
        </div>
      </div>
    </>
  );
}
