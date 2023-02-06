import { Link } from "react-router-dom";

function ButtonMailto({ mailto, label }) {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className="text-yellow-400 text-lg font-semibold hover:bg-yellow-400 hover:animate-none animate-bounce transition-all duration-500 hover:text-black py-2 px-4 rounded-md border bg-black"
    >
      {label}
    </Link>
  );
}

export default ButtonMailto;
