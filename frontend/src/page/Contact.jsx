import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Building2, Phone, Mail } from 'lucide-react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const Contact = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3b82f6,
      backgroundColor: 0xf8fafc,
      points: 15.00,
      maxDistance: 25.00,
      spacing: 16.00
    });
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50">
      <div ref={vantaRef} className="absolute inset-0" />
      
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
