import MainLayout from "@/components/common/layouts/MainLayout";
import ListingAmenities from "@/components/pages/srp/ListingAmenities";
import ListingBookingForm from "@/components/pages/srp/ListingBookingForm";
import ListingDescription from "@/components/pages/srp/ListingDescription";
import ListingHeader from "@/components/pages/srp/ListingHeader";
import ListingImages from "@/components/pages/srp/ListingImages";
import ListingLocation from "@/components/pages/srp/ListingLocation";
import ListingNearby from "@/components/pages/srp/ListingNearby";
import ListingProfile from "@/components/pages/srp/ListingProfile";
import ListingReviews from "@/components/pages/srp/ListingReviews";
import UploadPicturesAlert from "@/components/pages/srp/UploadPicturesAlert";

export default function Home() {
  return (
    <>
      <MainLayout>
        <section className="container mx-auto">
          <UploadPicturesAlert />
        </section>
        <section className="container mx-auto">
          <ListingHeader />
          <ListingImages />
        </section>

        <section className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <ListingProfile />
              <ListingDescription />
              <ListingAmenities />
            </div>
            <div className="col-span-4">
              <ListingBookingForm />
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <ListingLocation />
        </section>
        <section className="container mx-auto">
          <ListingReviews />
        </section>
        <section className="bg-slate-100 py-16">
          <div className="container mx-auto ">
            <ListingNearby />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
