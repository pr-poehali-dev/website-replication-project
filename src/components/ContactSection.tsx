
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Связаться с нами</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Наши контакты</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <PhoneCall className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-lg">Телефон</h4>
                      <p className="text-lg font-bold text-blue-900">+7 (812) 123-45-67</p>
                      <p className="text-gray-600">Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-lg font-bold text-blue-900">info@elektrikkolpino.ru</p>
                      <p className="text-gray-600">Отвечаем в течение 2 часов</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-lg">Адрес</h4>
                      <p className="text-lg font-bold text-blue-900">г. Колпино</p>
                      <p className="text-gray-600">Работаем по всему городу и пригородам</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-lg">Режим работы</h4>
                      <p className="text-lg font-bold text-blue-900">Ежедневно с 8:00 до 22:00</p>
                      <p className="text-gray-600">Без выходных и праздников</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Отправить заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="bg-white" />
                  </div>
                  <div>
                    <Input placeholder="Телефон *" className="bg-white" required />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите вашу задачу" className="bg-white" rows={4} />
                  </div>
                  <div className="pt-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
