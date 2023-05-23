import Button from "@/components/common/button";
import AirConditioning from "@/components/common/icons/AirConditioning";
import Bicycle from "@/components/common/icons/Bicycle";
import Dryer from "@/components/common/icons/Dryer";
import FreeWasher from "@/components/common/icons/FreeWasher";
import GardenView from "@/components/common/icons/GardenView";
import Kitchen from "@/components/common/icons/Kitchen";
import PetAllowed from "@/components/common/icons/PetAllowed";
import Refrigerator from "@/components/common/icons/Refrigerator";
import SecurityCamera from "@/components/common/icons/SecurityCamera";
import Wifi from "@/components/common/icons/Wifi";

export default function ListingAmenities() {
  return (
    <div className="mt-8 mb-4 space-y-4">
      <h2 className="text-2xl font-semibold">Offered Amenities</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <div className="flex gap-4 items-center">
            <GardenView />
            <span>Garden View</span>
          </div>
          <div className="flex gap-4 items-center">
            <Wifi />
            <span>Free Wifi</span>
          </div>
          <div className="flex gap-4 items-center">
            <FreeWasher />
            <span>Free Washer</span>
          </div>
          <div className="flex gap-4 items-center">
            <AirConditioning />
            <span>Air Conditioning</span>
          </div>
          <div className="flex gap-4 items-center">
            <Refrigerator />
            <span>Refrigerator</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex gap-4 items-center">
            <Kitchen />
            <span>Kitchen</span>
          </div>
          <div className="flex gap-4 items-center">
            <PetAllowed />
            <span>Pets Allowed</span>
          </div>
          <div className="flex gap-4 items-center">
            <Dryer />
            <span>Dryer</span>
          </div>
          <div className="flex gap-4 items-center">
            <SecurityCamera />
            <span>Security cameras on property</span>
          </div>
          <div className="flex gap-4 items-center">
            <Bicycle />
            <span>Bicycle</span>
          </div>
        </div>
      </div>
      <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1">
        Show more Amenities
      </Button>
    </div>
  );
}
