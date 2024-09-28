import { testimonials } from "../constants";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Testimonials = () => {
  return (
    <div className="mt-20 mb-20 tracking-wide overflow-hidden relative" id="testimonials">
      {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are Saying
      </h2> */}
      <SectionHeader 
          eyebrow="Happy Clients" 
          title="What Clients Say about us" 
          description="Don't just take my word for it. See what my clients have to say about us" 
        />
      <motion.div className="flex mt-4 whitespace-nowrap animate-scroll">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 inline-block"
            whileHover={{ scale: 1.05 }} // Optional hover effect
          >
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p className="overflow-hidden break-words">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
