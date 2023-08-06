import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-4 py-2 md:px-6 lg:px-8 md:py-4 lg:py-5">
      <Link to="/" className="flex items-center gap-1">
        <img
          src="https://avatars.githubusercontent.com/u/87895557?v=4"
          className="h-6 w-6 rounded-full"
          alt="bashirwale"
        />
        <p className="text-yellow-100 text-base font-bold cursor-pointer tracking-wider">
          Bashirwale
        </p>
      </Link>
    </header>
  );
}

export default Header;
