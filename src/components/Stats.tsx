import { useScrollAnimation, useCountUp } from "../hooks/useScrollAnimation";
import { stats } from "../data/content";

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                label={stat.label}
                suffix={stat.suffix}
                start={isVisible}
                delay={index * 200}
                isDecimal={!Number.isInteger(stat.number)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  number,
  label,
  suffix,
  start,
  delay,
  isDecimal,
}: {
  number: number;
  label: string;
  suffix: string;
  start: boolean;
  delay: number;
  isDecimal: boolean;
}) {
  const count = useCountUp(number, 2000, start, isDecimal ? 1 : 0);

  return (
    <div
      className="text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-serif text-5xl md:text-6xl font-black text-white mb-2">
        {count}
        <span className="text-gold-300">{suffix}</span>
      </div>
      <div className="text-gold-200 text-lg font-medium">{label}</div>
    </div>
  );
}
