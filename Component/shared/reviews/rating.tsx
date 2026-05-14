import { Star } from "lucide-react";

const StarRating = ({ rating = 0 }) => {
  return (
    <div className="flex text-yellow-500">
      {[1, 2, 3, 4, 5].map((star) => {
        let fill = "none";

        if (rating >= star) {
          fill = "fill-current"; // full
        }

        return (
          <Star
            key={star}
            className="w-5 h-5"
            fill={fill === "fill-current" ? "currentColor" : "none"}
            stroke="currentColor"
          />
        );
      })}
    </div>
  );
};

export default StarRating;