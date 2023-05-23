import Image from "next/image";

import Button from "@/components/common/button";
import CheckVerified from "@/components/common/icons/CheckVerified";
import ShieldIcon from "@/components/common/icons/ShieldIcon";

export default function ListingProfile() {
  return (
    <>
      <div className="flex space-y-6">
        <div className="flex items-center gap-4">
          <div className="shrink-0">
            <Image
              src="/listing_profile.png"
              width={50}
              height={50}
              alt="profile"
            />
          </div>
          <div>
            <p className="flex items-center gap-2">
              <CheckVerified />
              Identity verified
            </p>
            <h2 className="text-2xl">Hosted by Ghazal</h2>
          </div>
        </div>
        <div className="grow flex justify-end items-center">
          <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1">
            View Profile
          </Button>
        </div>
      </div>
      <div className="flex gap-4 items-center w-9/12">
        <div className="shrink-0">
          <ShieldIcon />
        </div>
        <div className="text-sm	">
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </div>
      </div>
    </>
  );
}
