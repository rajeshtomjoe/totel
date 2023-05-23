import { FiChevronDown } from "react-icons/fi";

export default function HeaderMenu() {
  return (
    <nav>
      <ul className="inline-flex gap-8 items-center">
        <li>
          <a href="#" className="font-semibold text-sm hover:text-purple-600">
            Room Stays
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold text-sm hover:text-purple-600">
            Looking for Partner
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-2 items-center font-semibold text-sm hover:text-purple-600"
          >
            <span>Company</span> <FiChevronDown />
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold text-sm hover:text-purple-600">
            Help
          </a>
        </li>
      </ul>
    </nav>
  );
}
