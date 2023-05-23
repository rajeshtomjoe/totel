import Button from "@/components/common/button";

export default function ListingDescription() {
  return (
    <div className="my-8 space-y-4">
      <h2 className="text-2xl font-semibold">Description</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <Button className="py-2.5 px-4 border rounded-full hover:bg-slate-200 hover:ring-1">
        Show more
      </Button>
    </div>
  );
}
