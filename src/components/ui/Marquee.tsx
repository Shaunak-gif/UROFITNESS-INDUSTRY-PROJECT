export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="bg-yellow overflow-hidden py-4">
      <div className="flex animate-marquee w-max hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span key={i} className="font-bebas text-[1.1rem] tracking-[4px] text-black px-12 whitespace-nowrap after:content-['✦'] after:ml-12 after:text-[0.6rem] after:text-black/40">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
