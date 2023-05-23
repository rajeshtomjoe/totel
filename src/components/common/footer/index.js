import Image from "next/image";

import { BsFacebook, BsGoogle, BsApple, BsInstagram } from "react-icons/bs";

import Logo from "../logo";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container mx-auto space-y-10">
        <div className="grid grid-cols-5 gap-4">
          <FooterNav
            title="Products"
            links={[
              {
                label: "Features",
              },
              {
                label: "Integrations",
              },
              {
                label: "Enterprise",
              },
              {
                label: "Solutions",
              },
            ]}
          />
          <FooterNav
            title="Products"
            links={[
              {
                label: "Features",
              },
              {
                label: "Integrations",
              },
              {
                label: "Enterprise",
              },
              {
                label: "Solutions",
              },
            ]}
          />
          <FooterNav
            title="Resources"
            links={[
              {
                label: "Partners",
              },
              {
                label: "Developers",
              },
              {
                label: "Community",
              },
              {
                label: "Apps",
              },
            ]}
          />
          <FooterNav
            title="Company"
            links={[
              {
                label: "About Us",
              },
              {
                label: "Careers",
              },
            ]}
          />
          <FooterNav
            title="Mobile app"
            links={[
              {
                label: (
                  <Image
                    src="/app_store.png"
                    width={120}
                    height={40}
                    alt="app store"
                  />
                ),
              },
              {
                label: (
                  <Image
                    src="/play.png"
                    width={135}
                    height={40}
                    alt="app store"
                  />
                ),
              },
            ]}
          />
        </div>
        <div className="flex gap-4 items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="text-center text-gray-500">
            &copy; 2023 Totel. All Rights Reserved.
          </div>
          <div className="flex justify-end">
            <ul className="inline-flex gap-6">
              <li>
                <a href="#">
                  <BsFacebook className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsGoogle className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsApple className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
