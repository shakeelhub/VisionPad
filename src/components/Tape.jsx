import React from 'react'
import Star from "../assets/star.svg"

const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Responsible",
    "Usable",
    "Reliable",
    "Secure",
    "Interactive",
    "Scalable",
  ]

const Tape = () => {
    return (
        <div className="py-16 lg:py-22 overflow-x-clip">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
            <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 py-3">
              {words.map((word) => (
                <div key={word} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase text-sm font-extrabold">{word}</span>
                  
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      );
}

export default Tape