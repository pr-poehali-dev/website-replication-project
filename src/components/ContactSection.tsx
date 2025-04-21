
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Свяжитесь с нами</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <PhoneCall className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Телефон</h4>
                      <p className="text-gray-600">8 950 030 88 30</p>
                      <p className="text-sm text-gray-500">Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageCircle className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Мессенджеры</h4>
                      <p className="text-gray-600">WhatsApp/Telegram: +7 950 030 88 30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Район обслуживания</h4>
                      <p className="text-gray-600">Колпино, Колпинский район Санкт-Петербурга</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Время работы</h4>
                      <p className="text-gray-600">Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                    <PhoneCall className="mr-2 h-5 w-5" /> Позвонить
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 flex-1">
                    <MessageCircle className="mr-2 h-5 w-5" /> Написать в WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Оставить заявку</h3>
                
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="w-full" />
                  </div>
                  
                  <div>
                    <Input placeholder="Ваш телефон *" className="w-full" required />
                  </div>
                  
                  <div>
                    <Textarea placeholder="Опишите вашу задачу" className="w-full min-h-[120px]" />
                  </div>
                  
                  <div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Нажимая на кнопку, вы даете согласие на обработку персональных данных
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12">
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-[400px]">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A3ded3a4a0a7df46ae45f5a36c0f1c10a1612a4e1f30bc66a8e0a8b03cecc1d24&amp;source=constructor&amp;scroll=false" 
                  width="100%" 
                  height="400" 
                  frameBorder="0"
                  title="Карта Колпино"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
