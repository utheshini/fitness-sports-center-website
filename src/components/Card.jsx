function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[var(--color-cardBg)] rounded-xl shadow-md transition-all duration-300 border-2 border-transparent hover:border-[var(--color-cardHoverBorder)] ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;