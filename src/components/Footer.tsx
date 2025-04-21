
import { Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Zap className="h-8 w-8 text-yellow-400" />
            <span className="ml-2 text-2xl font-bold">ЭлектрикКолпино</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#services" className="hover:text-yellow-400 text-center md:text-left">
              Услуги
            </a>
            <a href="#prices" className="hover:text-yellow-400 text-center md:text-left">
              Цены
            </a>
            <a href="#about" className="hover:text-yellow-400 text-center md:text-left">
              О нас
            </a>
            <a href="#contacts" className="hover:text-yellow-400 text-center md:text-left">
              Контакты
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="font-bold text-xl">+7 (812) 123-45-67</p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} ЭлектрикКолпино. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-300 hover:text-white mr-4">
              Политика конфиденциальности
            </a>
            <a href="/terms" className="text-gray-300 hover:text-white">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
