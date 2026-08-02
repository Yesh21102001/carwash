export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <h1 className="text-3xl font-black text-red-600 dark:text-red-500 italic">
                LUXURY
              </h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                SERVICES
              </a>
              <a href="#wash" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                BEST WASH
              </a>
              <a href="#reviews" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                REVIEWS
              </a>
              <a href="#contact" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen md:h-screen sm:h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop"
              alt="Car washing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-0">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Quality Car Washing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 max-w-2xl mx-auto">
              Professional car care with expert technicians and premium products
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-black py-3 sm:py-4 px-6 sm:px-10 rounded-lg text-sm sm:text-lg transition transform hover:scale-105">
                BOOK NOW
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-black py-3 sm:py-4 px-6 sm:px-10 rounded-lg text-sm sm:text-lg transition">
                LEARN MORE
              </button>
            </div>
          </div>
        </section>

        {/* Features Below Hero */}
        <section className="bg-white dark:bg-black py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {[
                { icon: '🚗', title: 'Expert Washing', desc: 'Professional techniques & quality service' },
                { icon: '✨', title: 'Premium Details', desc: 'Attention to every detail' },
                { icon: '🛡️', title: 'Safe Products', desc: 'Eco-friendly & safe materials' },
                { icon: '⚡', title: 'Quick Service', desc: 'Fast turnaround time' },
              ].map((feature, i) => (
                <div key={i} className="text-center bg-gray-100 dark:bg-gray-800 p-4 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">{feature.icon}</div>
                  <h4 className="text-base sm:text-xl font-black text-gray-900 dark:text-white mb-1 sm:mb-2">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 sm:mb-16 italic">
            EXPLORE OUR SERVICES
          </h3>

          {/* 4 Wheeler / Car Wash */}
          <div className="mb-12 sm:mb-20">
            <h4 className="text-2xl sm:text-3xl font-black text-red-600 dark:text-red-500 mb-6 sm:mb-8">🚗 CAR WASH</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                { name: 'Exterior Wash', desc: 'Full body wash with foam & rinse', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop' },
                { name: 'Interior Cleaning', desc: 'Vacuum & interior detailing', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop' },
                { name: 'Wax & Polish', desc: 'Premium shine & protection', img: 'https://images.unsplash.com/photo-1552820728-7aae4d834744?w=600&h=400&fit=crop' },
                { name: 'Full Detail', desc: 'Complete care inside & out', img: 'https://images.unsplash.com/photo-1553471459-d2229ba7433b?w=600&h=400&fit=crop' },
              ].map((service, i) => (
                <div key={i} className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="relative h-80 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h5 className="text-2xl font-black mb-2">{service.name}</h5>
                      <p className="text-sm text-gray-100">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2 Wheeler / Bike Wash */}
          <div>
            <h4 className="text-2xl sm:text-3xl font-black text-red-600 dark:text-red-500 mb-6 sm:mb-8">🏍️ 2-WHEELER & BIKE WASH</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                { name: 'Bike Basic Wash', desc: 'Quick exterior clean & dry', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
                { name: 'Bike Premium Wash', desc: 'Full wash with engine care', img: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=400&fit=crop' },
                { name: 'Scooter Wash', desc: 'Complete 2-wheeler cleaning', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop' },
                { name: 'Bike Polish & Shine', desc: 'High-gloss finish & protection', img: 'https://images.unsplash.com/photo-1617469767537-b85e6b6b0f91?w=600&h=400&fit=crop' },
              ].map((service, i) => (
                <div key={`bike-${i}`} className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="relative h-80 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h5 className="text-2xl font-black mb-2">{service.name}</h5>
                      <p className="text-sm text-gray-100">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Wash Section */}
        <section id="wash" className="bg-white dark:bg-gray-900 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-lg overflow-hidden h-96 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop" alt="Best wash details" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-4 leading-none">
                  BEST
                  <br />
                  <span className="text-red-600 dark:text-red-500 italic">WASH</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-md">
                  We deliver the best car washing experience with premium products and expert technique.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-black text-red-600">✓</span>
                    <div>
                      <h5 className="font-black text-gray-900 dark:text-white">Eco-Friendly Products</h5>
                      <p className="text-gray-600 dark:text-gray-400">Safe for environment and your car</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-black text-red-600">✓</span>
                    <div>
                      <h5 className="font-black text-gray-900 dark:text-white">Expert Technicians</h5>
                      <p className="text-gray-600 dark:text-gray-400">Trained professionals with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-black text-red-600">✓</span>
                    <div>
                      <h5 className="font-black text-gray-900 dark:text-white">Quick Service</h5>
                      <p className="text-gray-600 dark:text-gray-400">Fast turnaround without compromising quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-red-600 dark:bg-red-700 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 sm:gap-8 text-center">
              <div>
                <h4 className="text-2xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2">2000+</h4>
                <p className="text-xs sm:text-base text-red-100">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2">5★</h4>
                <p className="text-xs sm:text-base text-red-100">Rating</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2">10+</h4>
                <p className="text-xs sm:text-base text-red-100">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 sm:mb-16 italic">
            OUR TESTIMONIALS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {[
              { name: 'John Anderson', role: 'Car Enthusiast', text: 'Best service I\'ve ever experienced. Highly recommended!' },
              { name: 'Sarah Mitchell', role: 'Business Owner', text: 'Professional, quick, and affordable. Perfect!' },
            ].map((review, i) => (
              <div key={i} className="flex gap-8">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full flex-shrink-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  [Photo]
                </div>
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-xl text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 italic">"{review.text}"</p>
                  <h5 className="font-black text-gray-900 dark:text-white">{review.name}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8">
              BEST CAR WASH <br/> EXPERIENCE
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-red-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and experience the luxury car wash today.
            </p>
            <button className="bg-white text-red-600 hover:bg-gray-100 font-black py-3 sm:py-4 px-8 sm:px-12 text-sm sm:text-lg transition transform hover:scale-105">
              VISIT SITE →
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 sm:mb-12 italic text-center">
            GET IN TOUCH
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 sm:mb-4">📍 LOCATION</h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">123 Main Street<br/>Your City, ST 12345</p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 sm:mb-4">📞 PHONE</h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">(555) 123-4567<br/>Mon-Sun: 8am - 6pm</p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 sm:mb-4">✉️ EMAIL</h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">info@luxurycarwash.com</p>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-black py-3 sm:py-4 px-8 sm:px-12 text-sm sm:text-lg rounded transition transform hover:scale-105">
              BOOK YOUR APPOINTMENT
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-white italic mb-3 sm:mb-4">LUXURY</h3>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Premium Car Washing & Detailing Service</p>
            <p className="text-xs sm:text-sm">© 2026 Luxury Car Wash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
