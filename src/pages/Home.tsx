import React from 'react';
import { Stats } from '../components/Stats';
import { TherapyAreas } from '../components/TherapyAreas';
import { ProductRange } from '../components/ProductRange';
import { ContactSection } from '../components/ContactSection';
export function Home() {
  return <div className="w-full bg-white pt-20">
      {/* Hero Section */}
      <section className="w-full bg-[#FDF7F4] py-32 text-center relative overflow-hidden" style={{
      backgroundImage: `url('https://uploadthingy.s3.us-west-1.amazonaws.com/uT5rFvco3iqz39m8j62wrj/682daf7a55bca95f937f1c84.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#FDF7F4',
      backgroundBlendMode: 'overlay'
    }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            APIS, ISOLATES &<br />
            HERBAL EXTRACTS
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Manufacturers and Exporters of Himalayan based Herb Isolates and
            Extracts
          </p>
        </div>
      </section>
      <Stats />
      {/* About Us Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ABOUT US</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p className="leading-relaxed">
              Namiex Chemicals was incorporated in 1974 as NAVIAB MINERAL
              EXPORTS. Initially the company started its operations in with the
              manufacture of DIGOXININ which it supplied to multinationals like
              CMS-GEOGY (now NOVARTIS), WYETH LAB, IPCAR (ORGANON) etc. The
              production facility of the company is ideally located in the lap
              of Shivalik hills to tap the Himalayan based raw material.
            </p>
            <p className="leading-relaxed">
              The present management took over the company in 1998 and renamed
              it Namiex Chemicals Private Limited. The company is specifically
              working on extraction, isolation and purification of therapeutic
              phytochemicals.
            </p>
            <div className="text-center mt-10">
              <button className="bg-[#F4A460] text-white px-10 py-3 rounded hover:bg-[#E38B4F] font-medium">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <TherapyAreas />
      <ProductRange />
      <ContactSection />
    </div>;
}