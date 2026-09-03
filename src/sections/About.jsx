import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Curious by nature. Practical in approach.
    I build software that is clear, dependable,
    and made for real people.`;
  const aboutText = `I'm Anadasu Satish, a Computer Science Engineering graduate who enjoys turning complex requirements into simple, dependable software.

  My experience spans Java, Spring Boot, REST APIs, React, and databases. During my internship at Vaidsys Technologies, I built application features, delivered APIs, integrated MySQL, and strengthened quality with JUnit and Mockito.

  I care about readable code, secure systems, and continuous improvement. Every project is an opportunity to solve a real problem and become a better engineer.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"The Engineer Behind the Work"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-12 px-4 md:px-10 pb-16 text-base font-light tracking-wide lg:flex-row-reverse md:text-lg text-white/60">
        <img
          ref={imgRef}
          src="/images/satish-anadasu.webp"
          alt="Anadasu Satish"
          className="rounded-xl w-full lg:w-2/5"
        />
        <AnimatedTextLines text={aboutText} className={"w-full text-lg"} lineGap="pb-5 last:pb-0"/>
      </div>
    </section>
  );
};

export default About;
