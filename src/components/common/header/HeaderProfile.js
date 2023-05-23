import Image from "next/image";

import Button from "../button";

export default function HeaderProfile() {
  return (
    <div className="flex items-center gap-4">
      <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1">
        Manage Listings
      </Button>
      <Image
        src="/profile.png"
        fill={true}
        className="object-contain !h-12 !w-12 !relative"
        alt="profile"
      />
    </div>
  );
}
