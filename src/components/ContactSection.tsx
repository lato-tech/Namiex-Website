import React from 'react';
export function ContactSection() {
  return <section className="w-full relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://uploadthingy.s3.us-west-1.amazonaws.com/uT5rFvco3iqz39m8j62wrj/682daf7a55bca95f937f1c84.jpg')`,
      backgroundPosition: 'center bottom'
    }} />
      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">GET IN TOUCH WITH US</h2>
        <p className="mb-12 text-xl font-light">
          Want any assistance? We will be happy to help you
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-[#F4A460] text-white px-10 py-3 rounded hover:bg-[#E38B4F] font-medium">
            CONTACT
          </button>
          <button className="border-2 border-white text-white px-10 py-3 rounded hover:bg-white hover:text-gray-900 font-medium">
            PRODUCTS
          </button>
        </div>
      </div>
    </section>;
}