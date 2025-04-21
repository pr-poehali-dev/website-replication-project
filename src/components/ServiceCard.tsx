
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start">
          <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
