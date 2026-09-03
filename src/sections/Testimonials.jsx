import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react/dist/iconify.js";

gsap.registerPlugin(ScrollTrigger);

const icon = "mdi:star";

const testimonials = [
  {
    category: "ACHIEVEMENT",
    quote: "Secured an All India Rank in the Top 50 and received a cash award for outstanding performance.",
    name: "NCAT 2026",
    title: "Naukri Campus Aptitude Test",
  },
  {
    category: "EXPERIENCE",
    quote: "Built Java and Spring Boot features, delivered REST APIs, integrated MySQL, and supported testing across application modules.",
    name: "Java Full Stack Intern",
    title: "Vaidsys Technologies",
  },
  {
    category: "EDUCATION",
    quote: "Computer Science and Engineering graduate with a specialization in IoT and a strong foundation in software development.",
    name: "B.E. - CSE (IoT)",
    title: "Sathyabama University",
  },
];

const stats = [
  { value: 4, suffix: "", label: "Featured Projects" },
  { value: 10, suffix: "+", label: "REST APIs Delivered" },
  { value: 50, suffix: "", label: "All India NCAT Rank" },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card flex flex-col gap-6 justify-center items-center text-center text-lg font-light">
    <p className="text-xs tracking-[0.4em] text-primary">{testimonial.category}</p>
    <p className="text-base leading-relaxed text-white/60">
      "{testimonial.quote}"
    </p>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Icon icon={icon} key={i} className="w-5 h-5 text-amber-400" />
      ))}
    </div>
    <div className="flex flex-col gap-1">
      <span className="font-[600] text-white">{testimonial.name}</span>
      <span className="text-white/60">{testimonial.title}</span>
    </div>
  </div>
);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Testimonial cards fade up with stagger
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Stats fade up
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          onEnter: () => {
            // Counter animation for stats
            const counters = document.querySelectorAll(".stat-value");
            counters.forEach((counter) => {
              const target = parseFloat(
                counter.getAttribute("data-value") || "0"
              );
              const suffix = counter.getAttribute("data-suffix") || "";
              const isDecimal = target % 1 !== 0;

              gsap.to(counter, {
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  const progress = this.progress();
                  const current = target * progress;
                  counter.textContent =
                    (isDecimal ? current.toFixed(1) : Math.floor(current)) +
                    suffix;
                },
              });
            });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-10 bg-[#0d0d0d]">
      {/* Testimonials Grid */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-[#0d0d0d] via-white/60 to-[#0d0d0d] my-20"></div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 md:gap-16"
      >
        {stats.map((stat, index) => (
          <div key={index} className="stat-item bg-gradient-to-b from-[#0d0d0d] via-white/60 to-[#0d0d0d] md:pr-[1px] last:pr-0">
            <div
              className="flex justify-center items-center gap-8 bg-[#0d0d0d]"
            >
              <div className="text-center">
                <span
                  className="stat-value text-5xl font-light text-primary"
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                >
                  0{stat.suffix}
                </span>
                <p className="mt-1 text-white/60 font-light text-lg">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-border/40" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
