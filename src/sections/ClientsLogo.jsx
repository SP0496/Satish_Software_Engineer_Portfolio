import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

gsap.registerPlugin(ScrollTrigger);

const technologies = ["Java", "Spring Boot", "React", "JavaScript", "MySQL", "MongoDB", "REST APIs", "Docker", "Git", "Postman"];

const TechCell = ({ name, index }) => (
  <div className="tech-cell aspect-square flex items-center justify-center border border-black/30 bg-primary">
    <div className="text-center">
      <p className="text-xs text-black/40 mb-3">0{index + 1}</p>
      <p className="text-lg sm:text-xl lg:text-2xl font-light">{name}</p>
    </div>
  </div>
);

export default function ClientsLogo() {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-cell", {
        autoAlpha: 0,
        scale: 0.85,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const text = `A versatile toolkit for building modern software
  Across interface, logic, data, and delivery
  Chosen for the problem at hand.`;

  return (
    <section ref={containerRef} className="w-full pt-5 md:pt-10 lg:pt-16">
      <AnimatedHeaderSection
        subTitle={"Technologies I Work With"}
        title={"Stack"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="grid grid-cols-2 md:grid-cols-5 px-4 md:px-10 mt-10">
        {technologies.map((technology, index) => (
          <TechCell key={technology} name={technology} index={index} />
        ))}
      </div>
    </section>
  );
}
