"use client";
import Image from "next/image";
import React, { useState } from "react";

const steps = [
  {
    title: "King Kohli reigns supreme!",
    details:
      "Man for the big stage for big occasion. Bigger the game the more he wants to contribute... That is a shot of an emperor! The man is a genius..He is not just a King, he is a Genius.",
    image: "/img/img1.jpeg",
  },
  {
    title: "Messi has shaken hands with paradise!",
    details:
      "As he falls in love with the object in the world that his heart most desired, it is hard to escape the supposition that he has rendered himself today, the greatest of all time.",
    image: "/img/img2.jpeg",
  },
  {
    title: "Roger Federer: The Maestro",
    details:
      "[Federer] ...is the most beautiful man to watch play tennis. The most beautiful I've ever seen play. His movement, combined with the artistry, his racket, the look, he's got everything going.",
    image: "/img/img3.jpg",
  },
  {
    title: "Usain Bolt: The Lightning",
    details:
      "Usain Bolt! Gets a terrific start… Gay’s coming at him, but Bolt is pulling away! He’s gonna break the world record! It’s a new world record! 9.58! The fastest man on the planet!",
    image: "/img/img4.jpg",
  },
];

function StepwiseImageSwitch() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <div className="mt-8">
      <h1 className="text-center text-2xl">Step Wise Image Switch</h1>
      <div className="flex flex-col md:flex-row justify-center gap-8 p-8 min-h-screen text-gray-100">
        {/* Left Side Navigation */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <h3 className="mb-4 text-sm font-normal flex items-center">
            <Image alt="pointer" src="/img/SVG.png" width={16} height={16} />
            Click each step to see how it works:
          </h3>
          <ul className="list-none p-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col">
                <li
                  onClick={() => setSelectedStep(index)}
                  className={`cursor-pointer py-2 text-xl font-semibold flex items-center transition-all duration-500 ${
                    selectedStep === index ? "text-gray-100" : "text-gray-500"
                  }`}
                >
                  <span className="text-xs mr-2">
                    {selectedStep === index ? "🟢" : "⚫"}
                  </span>
                  {step.title}
                </li>
                {step.details && selectedStep === index && (
                  <p className="text-md font-normal italic ml-6 max-w-[80%]">
                    {step.details}
                  </p>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Right Side Content */}
        <div className="md:w-2/3 flex justify-center items-center bg-gray-900 rounded-xl p-4">
          <Image
            src={steps[selectedStep].image}
            alt="Step Preview"
            width={500}
            height={500}
            className="w-[90%] h-[90%] object-cover rounded-xl transition-all duration-500 shadow-2xl shadow-black"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default StepwiseImageSwitch;
