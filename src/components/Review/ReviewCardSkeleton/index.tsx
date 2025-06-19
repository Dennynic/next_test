import React from "react";

export const ReviewCardSkeleton = () => (
  <div className="flex-shrink-0 w-80 h-48 bg-gray-200 rounded-lg animate-pulse overflow-hidden">
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  </div>
);
