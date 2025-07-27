const BrandLogos = () => {
  // Brand logos with actual images
  const brands = [
    { name: "H&M", logo: "/lovable-uploads/fffa208f-a2b1-4486-9640-70d188031ce0.png" },
    { name: "Best Buy", logo: "/lovable-uploads/f0ec2d12-e7a1-4e64-a5ce-73f29b8525ee.png" },
    { name: "Aritzia", logo: "/lovable-uploads/cc278629-4f86-4383-8e03-88f4c19779d0.png" },
    { name: "Amazon", logo: "/lovable-uploads/d402a355-b44d-4473-b76f-6be47b9d0c91.png" },
    { name: "Zara", logo: "/lovable-uploads/88964abe-8176-4d40-b216-c59cbdfc8a89.png" },
    { name: "Home Depot", logo: "/lovable-uploads/d1c492c5-b6f9-43d0-a80a-89b2f16fd5bf.png" },
  ];

  // Duplicate brands for continuous scrolling
  const firstRowBrands = [...brands, ...brands];
  const secondRowBrands = [...brands.slice().reverse(), ...brands.slice().reverse()];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-bright to-pink-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Returns made easy - even from 100+ stores, including:
          </h2>
        </div>
        
        {/* First row - scrolling left */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-left">
            {firstRowBrands.map((brand, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-lg p-4 mx-4 w-32 h-20 flex items-center justify-center transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {secondRowBrands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-lg p-4 mx-4 w-32 h-20 flex items-center justify-center transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-white/80 text-sm mt-8 max-w-3xl mx-auto">
          All trademarks are the property of their respective owners. baccksee is not affiliated with these brands. 
          We only pick up eligible items purchased online.
        </p>
      </div>
    </section>
  );
};

export default BrandLogos;