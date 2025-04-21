
import { Zap, PhoneCall, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          
          <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
            <p className="font-bold text-xl">8 950 030 88 30</p>
            <div className="flex space-x-2 mt-2">
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <PhoneCall className="mr-2 h-4 w-4" /> Позвонить
              </Button>
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} ЭлектрикКолпино. Все права защищены.</p>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-sm text-blue-200">Колпино, Колпинский район Санкт-Петербурга</p>
            <p className="text-sm text-blue-200">Telegram/WhatsApp: +7 950 030 88 30</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
