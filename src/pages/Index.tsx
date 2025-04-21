
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PhoneCall, Zap, Shield, Clock, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Услуги электрика в Колпино</h1>
              <p className="text-xl mb-6">Профессиональные электромонтажные работы любой сложности с гарантией качества</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                  <PhoneCall className="mr-2 h-5 w-5" /> Позвонить
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                  Узнать стоимость
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Электрик за работой" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Монтаж электропроводки" 
              description="Полная замена или установка новой электропроводки в квартире, доме или офисе." 
              icon={<Zap />}
            />
            <ServiceCard 
              title="Установка светильников" 
              description="Профессиональная установка люстр, светильников и другого осветительного оборудования." 
              icon={<Zap />}
            />
            <ServiceCard 
              title="Устранение неисправностей" 
              description="Диагностика и ремонт коротких замыканий, обрывов и других неполадок в электросети." 
              icon={<Zap />}
            />
            <ServiceCard 
              title="Подключение бытовой техники" 
              description="Безопасное подключение кухонной техники, кондиционеров, водонагревателей и др." 
              icon={<Zap />}
            />
            <ServiceCard 
              title="Электромонтаж в новостройке" 
              description="Полный комплекс электромонтажных работ в новых квартирах от черновой отделки." 
              icon={<Zap />}
            />
            <ServiceCard 
              title="Аварийный вызов электрика" 
              description="Срочный выезд электрика при аварийных ситуациях в течение часа." 
              icon={<Zap />}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Опыт и профессионализм" 
              description="Более 10 лет опыта работы и сотни довольных клиентов."
              icon={<Shield className="w-12 h-12 text-blue-600" />}
            />
            <FeatureCard 
              title="Гарантия на все работы" 
              description="Предоставляем гарантию на все выполненные работы до 2 лет."
              icon={<CheckCircle2 className="w-12 h-12 text-blue-600" />}
            />
            <FeatureCard 
              title="Оперативность" 
              description="Выезд мастера в течение 1-2 часов после обращения."
              icon={<Clock className="w-12 h-12 text-blue-600" />}
            />
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Цены на услуги</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <div className="divide-y">
                <div className="flex justify-between py-4 px-6">
                  <span className="font-medium">Вызов электрика (диагностика)</span>
                  <span className="font-bold">от 1000 ₽</span>
                </div>
                <div className="flex justify-between py-4 px-6">
                  <span className="font-medium">Замена розетки/выключателя</span>
                  <span className="font-bold">от 500 ₽</span>
                </div>
                <div className="flex justify-between py-4 px-6">
                  <span className="font-medium">Установка люстры</span>
                  <span className="font-bold">от 1500 ₽</span>
                </div>
                <div className="flex justify-between py-4 px-6">
                  <span className="font-medium">Монтаж электропроводки</span>
                  <span className="font-bold">от 350 ₽/м</span>
                </div>
                <div className="flex justify-between py-4 px-6">
                  <span className="font-medium">Установка электрощита</span>
                  <span className="font-bold">от 5000 ₽</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-4">Точная стоимость зависит от сложности работ и используемых материалов.</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Получить полный прайс-лист
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
