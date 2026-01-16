import React from 'react'

const ContactUsCard = ({ Icon, title, description, sub }) => {
  return (
     <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
                  <Icon className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="font-medium">{description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {sub}
                </p>
              </div>
  )
}

export default ContactUsCard