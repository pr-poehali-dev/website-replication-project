
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
            {icon}
          </div>
          <h3 className="font-bold text-xl text-blue-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
