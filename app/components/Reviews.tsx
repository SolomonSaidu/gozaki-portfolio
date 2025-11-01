import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Reviews = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50 rounded-t-[3rem] relative z-10">
      <h2 className="text-4xl font-bold mb-12 text-center">Client Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          {
            name: "Solomon Saidu",
            review:
              "We’ve never looked this good online. Gozaki truly understands brand identity.",
          },
          {
            name: "TrendHive Studio",
            review:
              "Professional, sleek, and creative. He transformed our visuals completely.",
          },
        ].map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md"
          >
            <p className="text-gray-700 mb-4 italic">"{r.review}"</p>
            <div className="flex items-center gap-2 text-[#10b981] font-medium">
              <Sparkles size={16} /> {r.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
