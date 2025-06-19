"use client";
import React, { useState, useEffect } from "react";
import { ReviewCard } from "@/components/Review/ReviewCard";
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

  if (loading) return <div>Отзывы уже в пути...</div>;

  return (
    <section className="flex justify-center mb-12">
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} id={review.id} text={review.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
