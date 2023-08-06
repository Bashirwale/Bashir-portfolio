import { Link } from "react-router-dom";

function ButtonMailto({ mailto, label }) {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className="bg-yellow-500 text-slate-900 text-lg font-semibold hover:bg-yellow-100 hover:border-slate-900 hover:border-2 hover:animate-none animate-bounce transition-all duration-500 py-2 px-4 rounded-md "
    >
      {label}
    </Link>
  );
}

export default ButtonMailto;
