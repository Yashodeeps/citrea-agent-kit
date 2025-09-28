import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-citrea-500 to-citrea-600 flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <h3 className="text-2xl font-bold text-white">Citrea Agent Kit</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered blockchain interactions for the Citrea network. 
              Build the future of decentralized applications with natural language.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">Examples</a></li>
              <li><a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">Tutorials</a></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors">Support</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="border-t border-dark-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Citrea Agent Kit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-citrea-400 transition-colors text-sm">
              License
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
