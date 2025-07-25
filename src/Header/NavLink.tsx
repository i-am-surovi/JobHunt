import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Upload Jobs", url: "upload-job" },
    { name: "About us", url: "about" },
  ];
  const location = useLocation();

  return (
    <div className="flex gap-5 text-white-950 h-full items-center font-semibold">
      {links.map((link) => (
        <div
          key={link.url}
          className={`${
            location.pathname === `/${link.url}`
              ? "border-azure-radiance-600 text-azure-radiance-600"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to={`/${link.url}`}> {link.name} </Link>
        </div>
      ))}
    </div>
  );
};


export default NavLinks;
