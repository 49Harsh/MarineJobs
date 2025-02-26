import React, { useEffect, useRef } from 'react'; 
import { motion } from 'framer-motion'; 
import { Building2, Phone, Mail, MapPin } from 'lucide-react'; 
import Footer from './LandingPage/Footer';   

const Contact = () => {
  return (
    <div className="relative min-h-full bg-slate-50">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"/>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Building2 className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Office No -304, 3rd floor Krishna Govind tower, sector-24 Vashi,
                    opp. Sanpada Railway Station, Navi Mumbai-4007005, India.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Phone</h3>
                  <p className="text-slate-600">+91-8080343416</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600">operations@runmarineservice.com</p>
                  <p className="text-slate-600">runmarine507@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Location Map</h3>
                </div>
              </div>

              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7514691188284!2d73.00639307508854!3d19.07241278208443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6cae0d8e9c3%3A0x6db8873690eff75a!2sKrishna%20Govind%20Tower%2C%20Sector%2024%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400705!5e0!3m2!1sen!2sin!4v1708952545960!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;