
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
