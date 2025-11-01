import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import phoneFlyer from "../../public/phone-flyer.jpg";
import cloth3Flyer from "../../public/cloth3-flyer.jpg";
import clothFlyer from "../../public/cloth-flyer.jpg";
import cloth2Flyer from "../../public/cloth2-flyer.jpg";
import gradFlyer from "../../public/grad-flyer.jpg";
import foodFlyer from "../../public/food-flyer.jpg";
import logo2 from "../../public/logo2.jpg";
import logo3 from "../../public/logo3.jpg";
import logo4 from "../../public/logo4.jpg";
// import phoneFlyer from "../public/phone-flyer.jpg"

const Projects = () => {
  const projects = [
    {
      title: "Mobile Tech Flyer",
      img: phoneFlyer,
      des: "A bold promotional design for a smartphone brand, crafted to highlight sleek product aesthetics and attract tech enthusiasts.",
    },
    {
      title: "Streetwear Campaign",
      img: cloth3Flyer,
      des: "An edgy and modern clothing flyer blending fashion photography with minimalist typography to create strong visual appeal.",
    },
    {
      title: "Urban Clothing Ad",
      img: clothFlyer,
      des: "A creative promotional piece for a clothing brand, emphasizing lifestyle and personality through balanced color and layout.",
    },
    {
      title: "Fashion Brand Identity",
      img: cloth2Flyer,
      des: "A clean, stylish clothing flyer focused on youth energy and modern fashion culture, designed for visual impact on social feeds.",
    },
    {
      title: "Graduation Event Design",
      img: gradFlyer,
      des: "A vibrant and celebratory flyer for a graduation event, combining academic symbolism with joyful, bold colors.",
    },
    {
      title: "Food Brand Promotion",
      img: foodFlyer,
      des: "A deliciously inviting food flyer design that highlights texture and color, tailored for restaurant or catering advertising.",
    },
    {
      title: "Minimal Logo Concept",
      img: logo2,
      des: "A professional logo exploration centered on clean geometry and visual balance, made for a modern digital brand.",
    },
    {
      title: "Creative Brand Logo",
      img: logo3,
      des: "A unique and memorable logo mark designed to convey creativity, versatility, and premium brand identity.",
    },
    {
      title: "Corporate Logo Design",
      img: logo4,
      des: "A bold, professional logo concept emphasizing clarity and brand confidence, ideal for business and tech use.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 bg-white relative z-10"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all"
          >
            <div className="h-52 w-full overflow-hidden">
              <Image
                src={proj.img}
                alt={proj.title}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                placeholder="blur"
              />
            </div>
            <div className="p-4 bg-gray-100/90">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {proj.des}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
