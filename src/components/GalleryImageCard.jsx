import React from 'react'
import LazyImage from './LazyImage'

const GalleryImageCard = ({index,src,title,desc}) => {
  return (
     <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <LazyImage
                  src={src}
                  alt={title}
                  className="w-full h-56 object-cover object-center hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
  )
}

export default GalleryImageCard