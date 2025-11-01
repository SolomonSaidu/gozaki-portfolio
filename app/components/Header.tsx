"use client";
import Image from "next/image";
import ggLogo from "../../public/gg-logo.png";

interface PopUpModel {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<PopUpModel> = ({ setShowModal }) => {
  return (
    <header className="flex justify-between items-center py-6 px-8 sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200">
      <div className="flex gap-2">
        <Image
          src={ggLogo}
          alt="gg-log"
          placeholder="blur"
          className="h-10 w-10"
        />
        <h1 className="text-2xl font-bold tracking-tight align-middle">
          Gozaki <span className="text-[#10b981]">Graphics</span>
        </h1>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
      >
        Contact me
      </button>
    </header>
  );
};

export default Header;
