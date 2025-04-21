
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X, Zap, MessageCircle } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-blue-900">ЭлектрикКолпино</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
              Услуги
            </a>
            <a href="#prices" className="text-gray-700 hover:text-blue-600 font-medium">
              Цены
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              О нас
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <div className="mr-4">
              <p className="text-lg font-bold text-blue-900">8 950 030 88 30</p>
              <p className="text-sm text-gray-500">Ежедневно с 8:00 до 22:00</p>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <PhoneCall className="mr-2 h-4 w-4" /> Позвонить
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Услуги
              </a>
              <a href="#prices" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Цены
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                О нас
              </a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Контакты
              </a>
              <div className="pt-3 border-t">
                <p className="text-lg font-bold text-blue-900">8 950 030 88 30</p>
                <p className="text-sm text-gray-500">Ежедневно с 8:00 до 22:00</p>
                <div className="flex flex-col space-y-2 mt-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full">
                    <PhoneCall className="mr-2 h-4 w-4" /> Позвонить
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
