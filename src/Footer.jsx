import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t">
      <div className="container mx-auto px-4">
        {/* Top Section: Inspiration for Future Getaways */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Popular Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Inspiration for future getaways</h2>
            <ul className="space-y-2">
              <li className="font-bold">Popular</li>
              <li>Canmore - Flat rentals</li>
              <li>Tucson - Apartment rentals</li>
              <li>Anaheim - Beach house rentals</li>
              <li>Marbella - Flat rentals</li>
              <li>Jasper - Cabin rentals</li>
              <li>Monterey - Cottage rentals</li>
              <li>Santa Barbara - Beach house rentals</li>
            </ul>
          </div>
          {/* Arts & Culture Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Arts & Culture</h2>
            <ul className="space-y-2">
              <li>Mountain View - Family-friendly rentals</li>
              <li>Devonport - Cottage rentals</li>
              <li>Sonoma - House rentals</li>
              <li>Ibiza - Holiday rentals</li>
            </ul>
          </div>
          {/* Outdoors Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Outdoors</h2>
            <ul className="space-y-2">
              <li>Prescott - Cabin rentals</li>
              <li>Scottsdale - Mansion rentals</li>
              <li>Mijas - House rentals</li>
              <li>Benalmádena - Beach house rentals</li>
            </ul>
          </div>
          {/* More Destinations Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4">More Destinations</h2>
            <ul className="space-y-2">
              <li>Paso Robles - House rentals</li>
              <li>Santa Barbara - Beach house rentals</li>
              <li>Malacoota - Pet-friendly rentals</li>
              <li>More...</li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Support, Hosting, and Airbnb */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>
          {/* Hosting */}
          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2">
              <li>StayHomez your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Join a free Hosting class</li>
              <li>Find a co-host</li>
            </ul>
          </div>
          {/* Airbnb */}
          <div>
            <h3 className="font-semibold mb-4">StayHomez</h3>
            <ul className="space-y-2">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>StayHomez.org emergency stays</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            © 2024 StayHomez, Inc. · Privacy · Terms · Sitemap · Company details
          </p>
          <div className="flex items-center space-x-4">
            <p>English (IN)</p>
            <p>₹ INR</p>
            <div className="flex space-x-2">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
