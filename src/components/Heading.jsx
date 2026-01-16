import React from 'react'

const Heading = ({ title, subtitle }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl opacity-95">
            {subtitle}
          </p>
        </div>
      </section>
  )
}

export default Heading