
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="font-bold text-xl text-blue-900">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
