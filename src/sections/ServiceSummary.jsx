import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 60,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -40,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-28 md:mb-42 text-[24px] sm:text-[38px] md:text-[48px] lg:text-[72px]">
      <div id="title-service-1" className="flex items-center gap-3">
        <p className="italic">Java</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p>Spring</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-8  md:translate-x-16"
      >
        <p className="font-normal">Microservices</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p>REST APIs</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-12 md:-translate-x-24"
      >
        <p>React</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p className="italic">MySQL</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p>MongoDB</p>
      </div>
      <div id="title-service-4" className="flex items-center justify-center gap-3 translate-x-10 md:translate-x-20">
        <p>Docker</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p>Git</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
