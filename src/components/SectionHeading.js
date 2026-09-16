export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-gold font-bold tracking-wide uppercase text-sm">
        {eyebrow}
      </p>
      <h2 className="section-heading-underline mt-2 text-2xl sm:text-4xl font-extrabold text-maroon-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#5a3a44] text-sm sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
