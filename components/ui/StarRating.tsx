interface StarRatingProps {
  count?: number;
  rating?: number;
  className?: string;
}

export function StarRating({ count = 5, rating, className }: StarRatingProps) {
  const starCount = rating ?? count;
  return (
    <div className={`flex gap-1 ${className ?? ''}`}>
      {Array.from({ length: starCount }).map((_, i) => (
        <svg
          key={i}
          className="h-[18px] w-[18px] fill-[#fbbf24]"
          viewBox="0 0 24 24"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}
