import React from 'react';
type Product = {
  title: string;
  description: string;
  image: string;
};
export function ProductRange() {
  const products: Product[] = [{
    title: '4-DEHYDROXY-EPI-ANDROGRAPHOLIDE',
    description: 'Intermediate for anti-cancer drugs (Doxorubicin and Epirubicin)',
    image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23f3f4f6'/><text x='50%' y='50%' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'>Chemical Structure</text></svg>"
  }, {
    title: 'HIMALAYAN CEDAR WOOD OIL',
    description: 'Extracted from the dead branches of Himalayan Cedar trees, used for fragrance and aromatherapy',
    image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23f3f4f6'/><text x='50%' y='50%' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'>Cedar Oil</text></svg>"
  }, {
    title: 'EXTI- ANTI-TERMITE SOLUTION',
    description: 'An eco-friendly solution which is safe for humans and pets but highly effective against termites',
    image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23f3f4f6'/><text x='50%' y='50%' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'>Product Image</text></svg>"
  }, {
    title: '16-DEHYDROPREGNENOLONE ACETATE',
    description: 'A key intermediate in the production of various steroidal drugs',
    image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23f3f4f6'/><text x='50%' y='50%' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'>Chemical Structure</text></svg>"
  }];
  return <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          OUR PRODUCT RANGE
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We manufacture herbal based products that cater to different
          categories from fragrance, Aromatherapy oils to Anti-cancer,
          Steroidal, Peptides, etc.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product, index) => <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover bg-gray-100" />
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <button className="text-[#F4A460] text-sm font-medium hover:text-[#E38B4F]">
                  READ MORE
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}