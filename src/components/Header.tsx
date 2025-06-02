import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Go.png" alt="Namiex Chemicals" className="h-12" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
            Products
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
            Contact Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
            English
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {isMenuOpen && <div className="md:hidden bg-white w-full py-4 border-t">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
              Contact Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 uppercase text-sm">
              English
            </a>
          </div>
        </div>}
    </header>;
}