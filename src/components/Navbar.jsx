import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';

  return (
    <header className="sticky top-0 bg-white border-b backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <img 
            src={require("../assets/Logo.png")} 
            alt="Girman Technologies Logo" 
            className="h-8 object-contain"
          />
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/search"
            className={`font-semibold hover:text-blue-600 hover:underline transition-all duration-200 ${
              isSearchPage ? 'text-blue-600 underline' : ''
            }`}
          >
            SEARCH
          </Link>
          <a
            href="https://girmantech.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 hover:underline transition-all duration-200"
          >
            WEBSITE
          </a>
          <a
            href="https://www.linkedin.com/company/girman-technologies"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 hover:underline transition-all duration-200"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:contact@girmantech.com"
            className="hover:text-blue-600 hover:underline transition-all duration-200"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}
