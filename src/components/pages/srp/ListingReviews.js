import Image from "next/image";

import Button from "@/components/common/button";
import StarRating from "@/components/common/icons/StarRating";

export default function ListingReviews() {
  return (
    <div className="space-y-6 mb-16">
      <h2 className="flex text-2xl font-medium items-center gap-2">
        <StarRating active={true} /> 5.0 - 12 Reviews
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 space-y-4">
          <div className="flex items-center">
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating />
          </div>
          <p>
            &quot;Absolutely incredible. This place was definitely a dream! From
            the entryway, to each floor... stunning&quot;
          </p>
          <div className="flex items-center gap-2">
            <Image src="/review1.png" width={46} height={46} alt="profile" />
            <div>
              <h3 className="font-medium">Dave Jones</h3>
              <p className="text-gray-25 text-sm">Student</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 space-y-4">
          <div className="flex items-center">
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating />
          </div>
          <p>
            &quot;Absolutely incredible. This place was definitely a dream! From
            the entryway, to each floor... stunning&quot;
          </p>
          <div className="flex items-center gap-2">
            <Image src="/review2.png" width={46} height={46} alt="profile" />
            <div>
              <h3 className="font-medium">Morgan John</h3>
              <p className="text-gray-25 text-sm">Student</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 space-y-4">
          <div className="flex items-center">
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating active={true} />
            <StarRating />
          </div>
          <p>
            &quot;Absolutely incredible. This place was definitely a dream! From
            the entryway, to each floor... stunning&quot;
          </p>
          <div className="flex items-center gap-2">
            <Image src="/review3.png" width={46} height={46} alt="profile" />
            <div>
              <h3 className="font-medium">Olivia Manson</h3>
              <p className="text-gray-25 text-sm">Student</p>
            </div>
          </div>
        </div>
      </div>
      <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1">
        Show more reviews
      </Button>
    </div>
  );
}
