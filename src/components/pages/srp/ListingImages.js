import Image from "next/image";

import Button from "@/components/common/button";

export default function ListingImages() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Image
          src="/listing1.png"
          fill={true}
          className="object-contain !h-fit !relative"
          alt="listing"
        />
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 relative">
          <div>
            <Image
              src="/listing2.png"
              fill={true}
              className="object-contain !h-fit !relative"
              alt="listing"
            />
          </div>
          <div>
            <Image
              src="/listing3.png"
              fill={true}
              className="object-contain !h-fit !relative"
              alt="listing"
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/listing4.png"
            fill={true}
            className="object-contain !h-fit !relative"
            alt="listing"
          />
          <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-100 hover:ring-1 absolute bottom-4 bg-white right-4">
            Show more photos
          </Button>
        </div>
      </div>
    </div>
  );
}
