import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyLogo</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/product" className="hover:text-gray-400">Product</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/Cart" className="hover:text-gray-400">Cart</Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4">
          <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/product" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Product</Link>
          <Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Cart" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
}
