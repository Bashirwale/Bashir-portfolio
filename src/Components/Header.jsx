import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="px-8 pt-4 flex items-center gap-2">
      <img
        src="https://avatars.githubusercontent.com/u/87895557?v=4"
        className="h-8 w-8 rounded-full"
        alt="bashirwale"
      />
      <h1
        className="text-yellow-400 text-lg font-black cursor-pointer tracking-wider"
        onClick={() => navigate("/")}
      >
        Bashirwale
      </h1>
    </div>
  );
}

export default Header;
