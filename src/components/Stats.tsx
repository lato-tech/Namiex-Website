import React from 'react';
export function Stats() {
  return <div className="bg-[#FDF7F4] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#F4A460]">50+</div>
            <div className="text-gray-600">Years</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#F4A460]">2</div>
            <div className="text-gray-600">Patents</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#F4A460]">20+</div>
            <div className="text-gray-600">Products</div>
          </div>
        </div>
      </div>
    </div>;
}