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
  ChevronDown,
  Lightbulb,
  Bath,
  Utensils,
} from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Users },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "Contact", path: "/contact", icon: MessageSquare },
  ];

  const serviceItems = [
    { name: "All Services", path: "/services", icon: Wrench },
    { name: "Basement Remodeling", path: "/services/basement-remodeling", icon: Lightbulb },
    { name: "Bathroom Remodeling", path: "/services/bathroom-remodeling", icon: Bath },
    { name: "Kitchen Remodeling", path: "/services/kitchen-remodeling", icon: Utensils },
  ];

  return (
    <nav className="bg-black text-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <OptimizedImage
              src="/images/projects/newLogo.webp"
              alt="Zwolinski Quality Construction"
              width={200}
              height={64}
              quality={90}
              className="h-12 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-silver transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/about"
              className="flex items-center space-x-1 hover:text-silver transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>About</span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 hover:text-silver transition-colors h-[40px]"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Wrench className="h-4 w-4" />
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-[40px] left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black border border-gray-600 rounded-md shadow-lg z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-800 hover:text-silver transition-colors first:rounded-t-md last:rounded-b-md"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <service.icon className="h-4 w-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/gallery"
              className="flex items-center space-x-1 hover:text-silver transition-colors"
            >
              <Image className="h-4 w-4" />
              <span>Gallery</span>
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center space-x-1 hover:text-silver transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            
            <a
              href="tel:+12674716120"
              className="flex items-center space-x-2 bg-gray-800 text-silver px-4 py-2 rounded-md hover:bg-gray-700 transition-colors border border-gray-600"
            >
              <Phone className="h-4 w-4" />
              <span>(267) 471-6120</span>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-800 border border-gray-700"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-silver"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="border-t border-gray-700 pt-2">
                <div className="px-3 py-2 text-sm font-medium text-gray-400">Services</div>
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-2 px-3 py-2 pl-6 rounded-md text-gray-300 hover:bg-gray-800 hover:text-silver"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="h-4 w-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
              
              <a
                href="tel:+12674716120"
                className="flex items-center space-x-2 bg-gray-800 text-silver px-3 py-2 rounded-md hover:bg-gray-700 transition-colors border border-gray-600"
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
