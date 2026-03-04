import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-16 lg:py-24 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-[#6b4c9a] mx-auto mb-8 opacity-50" />
          
          {/* Quote Text */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8 font-light italic">
            "It's the support from SMART. You guys are one of the best vendors that we have when it comes to support. We can always count on you to be there for us. Easy to work with. You keep us informed on a regular basis. The information available to us online even is incredible. I mean, we don't have a vendor that even comes close with that level of support your library support is just whether it's your people or whether it's your lot online information. Bar none the best of all our vendors."
          </blockquote>
          
          {/* Author */}
          <div className="mt-8">
            <p className="font-semibold text-gray-900 text-lg">Lawrence Glynn</p>
            <p className="text-gray-600">President, C-IT, Jefferson County Schools</p>
          </div>
        </div>
      </div>
    </section>
  );
}
