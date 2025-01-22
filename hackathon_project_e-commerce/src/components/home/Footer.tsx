import { help, navItems } from "@/app/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Address Section */}
          <div className="flex items-center justify-center space-y-10 ">
            
            <p className="text-sm text-gray-600 space-y-10">
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6">
            {/* Links */}
            <div>
              <h4 className="text-lg font-medium mb-4 opacity-50">Links</h4>
              <ul className="space-y-2">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-sm text-gray-700 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-lg font-medium mb-4 opacity-50">Help</h4>
              <ul className="space-y-2">
                {help.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-sm text-gray-700 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium opacity-50">Newsletter</h4>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-10 pt-4">
          <p className="text-sm text-gray-600">
          2022 Meubel House. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
