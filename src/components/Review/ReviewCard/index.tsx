import { FC } from "react";

interface ReviewCardProps {
  id: number;
  text: string;
}

export const ReviewCard:FC<ReviewCardProps> = ({id, text}) =>{
    
    return(
         <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">Отзыв {id}</span>
                  </div>
                  
                </div>
                 <div className="" dangerouslySetInnerHTML={{ __html: text }}></div>
              </div>
    )
}