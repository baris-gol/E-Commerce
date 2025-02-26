import { Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Top section with logo and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-300 pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Bandage</h2>
          <div className="flex space-x-4">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <a key={index} href="#" aria-label={Icon.name} className="text-blue-500 hover:text-blue-600 transition">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-800 text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 p-2 rounded-l-md flex-1"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 text-center text-gray-600">
          <p>Made With Love By Finland. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
