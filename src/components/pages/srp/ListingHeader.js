import { FiThumbsUp } from "react-icons/fi";
import { TbShare3 } from "react-icons/tb";

import Button from "@/components/common/button";

export default function ListingHeader() {
  return (
    <>
      <div className="flex mb-2">
        <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1">
          Back
        </Button>
      </div>
      <div className="flex mb-4">
        <div className="grow">
          <h1 className="text-3xl	font-semibold">Cerulean Tower Tokyu Hotel</h1>
          <p className="text-gray-25 text-lg">
            26-1 Sakuragaokacho, Shibuya City, Tokyo 150-8512, Japan
          </p>
        </div>
        <div className="flex gap-4 items-end">
          <div>
            <a href="#" className="inline-block rounded-full border p-3">
              <FiThumbsUp />
            </a>
          </div>

          <div>
            <a href="#" className="inline-block rounded-full border p-3">
              <TbShare3 />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
