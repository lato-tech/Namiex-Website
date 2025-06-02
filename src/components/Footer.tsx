import React from 'react';
export function Footer() {
  return <footer className="bg-gray-900 text-white w-full py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="/Go.png" alt="Namiex Chemicals" className="h-12 mb-6" />
            <p className="text-gray-400">NAMIEX CHEMICALS PVT. LTD.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  PRODUCTS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <address className="text-gray-400 not-italic space-y-3">
              <p>P.O. South Orange Road,</p>
              <p>Patiala-Punjab</p>
              <p>INDIA - 140004</p>
              <p>Ph: +91-9815516439</p>
              <p>namiex@namiex.com</p>
            </address>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} NAMIEX CHEMICALS PVT. LTD. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}