import Image from "next/image";

import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />
        {/*Star Canvas */}
        <HeroOrbit size={550} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="8s" rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="8s" rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={720} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="8s" rotation={85}>
          <StarIcon className="size-10 rounded-full text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={800} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="8s" rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        {/*Sparkle Canvas */}
        <HeroOrbit size={430} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="4s" rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="4s" rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="4s" rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={570} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="4s" rotation={-41}>
          <SparkleIcon className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="4s" rotation={-5}>
          <SparkleIcon className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={750} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="4s" rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="Logo" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-900 inline-flex px-4 items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full size-2.5 relative">
              <div className="bg-green-500 rounded-full absolute inset-0 animate-ping-large" />
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I unite frontend aesthetics with backend power. Let&apos;s discuss
            your new project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
