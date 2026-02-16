// src/components/common/Loader.jsx

export default function Loader({ fullScreen = false }) {
  return (
    <div
      className={`${
        fullScreen ? "fixed inset-0 bg-[#F5F5F5]" : ""
      } flex items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-gray-300 border-t-emerald-500 rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-sm text-gray-600 tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}