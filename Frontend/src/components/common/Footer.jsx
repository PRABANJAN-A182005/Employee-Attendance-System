// src/components/common/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-400 py-6 px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* Left Section */}
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="text-emerald-500 font-medium">
            AttendPro
          </span>. All rights reserved.
        </div>

        {/* Right Section */}
        <div className="mt-3 md:mt-0 flex gap-6">
          <span className="hover:text-emerald-500 transition cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-emerald-500 transition cursor-pointer">
            Terms
          </span>
          <span className="hover:text-emerald-500 transition cursor-pointer">
            Support
          </span>
        </div>

      </div>
    </footer>
  );
}