import Logo from "../logo";
import HeaderMenu from "./HeaderMenu";
import HeaderProfile from "./HeaderProfile";

export default function Header() {
  return (
    <header className="py-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <HeaderMenu />
        <HeaderProfile />
      </div>
    </header>
  );
}
