import { Link, useLocation } from "react-router-dom";

const DevNav = () => {
  const location = useLocation();

  const pages = [
    { path: "/", label: "Home" },
    { path: "/coming-soon", label: "Coming Soon" },
    { path: "/privacy", label: "Privacy" },
  ];

  return (
    <div className="fixed top-4 right-4 z-[9999] bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-2">
      <div className="text-xs text-gray-500 mb-2 px-2">Dev Navigation</div>
      <div className="flex flex-col gap-1">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              location.pathname === page.path
                ? "bg-calcuu-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DevNav;
