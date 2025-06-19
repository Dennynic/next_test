"use client";
import React, { useState, useEffect } from "react";
import { ReviewCard } from "@/components/Review/ReviewCard";
import { ReviewCardSkeleton } from "@/components/Review/ReviewCardSkeleton";
import { getReviews } from "@/lib/api/reviews/service";
import { IReview } from "@/lib/api/reviews/model";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews()
      .then(setReviews)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div className="flex justify-center" key={index}>
                <ReviewCardSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div className="flex justify-center" key={review.id}>
                <ReviewCard id={review.id} text={review.text} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
