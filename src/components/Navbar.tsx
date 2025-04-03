import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Wrench,
  Image,
  MessageSquare,
  Menu,
  X,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Users },
    { name: "Services", path: "/services", icon: Wrench },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "Contact", path: "/contact", icon: MessageSquare },
  ];

  return (
    <nav className="text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/images/projects/zwolinskismalllogo.png"
              alt="Zwolinski Quality Construction"
              className="h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-1 hover:text-zwolinski-burgundy transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="tel:+12674716120"
              className="flex items-center space-x-2 bg-zwolinski-burgundy text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(267) 471-6120</span>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-zwolinski-burgundy"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-zwolinski-burgundy"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <a
                href="tel:+12674716120"
                className="flex items-center space-x-2 bg-zwolinski-burgundy text-white px-3 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(267) 471-6120</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
