import React from 'react';
import { Heart, Stethoscope, Apple, HandMetal, Vegan, Flower2, Activity } from 'lucide-react';
export function TherapyAreas() {
  const areas = [{
    icon: <Heart size={40} />,
    title: 'Hormonal Steroids'
  }, {
    icon: <Stethoscope size={40} />,
    title: 'Veterinary Raw Materials'
  }, {
    icon: <Apple size={40} />,
    title: 'Stomach/Gastro'
  }, {
    icon: <HandMetal size={40} />,
    title: 'Vitiligo/Dermal Pigmentation'
  }, {
    icon: <div size={40} />,
    title: 'Anti-Cancer'
  }, {
    icon: <Vegan size={40} />,
    title: 'Varicose veins'
  }, {
    icon: <Flower2 size={40} />,
    title: 'Fragrance & Aromatherapy'
  }, {
    icon: <Activity size={40} />,
    title: 'Bio- Enhancer'
  }];
  return <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">THERAPY AREAS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {areas.map((area, index) => <div key={index} className="text-center">
              <div className="text-[#F4A460] mb-4 flex justify-center">
                {area.icon}
              </div>
              <h3 className="text-gray-700 font-medium">{area.title}</h3>
            </div>)}
        </div>
      </div>
    </section>;
}