import { Tab } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

import Button from "@/components/common/button";
import Keyboard from "@/components/common/icons/Keyboard";

export default function ListingBookingForm() {
  return (
    <div className="rounded-2xl shadow-md border p-4 space-y-4">
      <div className="flex items-center gap-2">
        <h4 className="text-2xl font-medium">$75</h4> / <span>night</span>
      </div>
      <Tab.Group>
        <Tab.List className="inline-block rounded-full bg-slate-100 gap-2 border border-slate-300">
          <Tab
            className={({ selected }) =>
              selected
                ? "rounded-full bg-purple-600 py-2 px-4 text-white border border-slate-100 outline-none"
                : "py-2 px-4 outline-none"
            }
          >
            Hour
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "rounded-full bg-purple-600 py-2 px-4 text-white border border-slate-100 outline-none"
                : "py-2 px-4 outline-none"
            }
          >
            Day
          </Tab>
        </Tab.List>
      </Tab.Group>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label>Check-In</label>
          <input type="date" className="border py-2.5 rounded-full px-4" />
        </div>
        <div className="space-y-2">
          <label>Check-Out</label>
          <input type="date" className="border py-2.5 rounded-full px-4" />
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <Keyboard />
        </div>
        <div className="grow flex justify-end">
          <a className="underline">Clear dates</a>
        </div>
      </div>
      <div className="space-y-2">
        <label>Guests</label>
        <div className="flex w-4/6 border cursor-pointer p-2.5 rounded-full items-center gap-2">
          <span>3 Guests, 1 infant, 1 pet</span>
          <div className="grow flex justify-end">
            <FiChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
      <Button className="py-2.5 px-4 border border-purple-600 w-full rounded-full hover:bg-purple-700 hover:ring-1 hover:ring-purple-700 bg-purple-600 text-white">
        Send Proposal
      </Button>
      <p className="text-sm text-gray-500 text-center">
        You won’t be charged yet
      </p>
      <div className="grid grid-cols-2 gap-2 border-b pb-4">
        <div>$75 x 7 nights</div>
        <div className="text-right">$525</div>
        <div>Weekly discount</div>
        <div className="text-right text-green-400">-$28</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="font-medium">Total</div>
        <div className="text-right font-medium">$493</div>
      </div>
    </div>
  );
}
