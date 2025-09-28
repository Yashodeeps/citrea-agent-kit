import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, Zap, Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="relative overflow-hidden bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Main Title */}
          <div className="flex items-center justify-center mb-6">
            <Bot className="w-12 h-12 text-citrea-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Citrea Agent Kit
            </h1>
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            AI-Powered Blockchain Interactions for the Citrea Network
          </motion.p>
          
          {/* Feature Highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="glass rounded-xl p-6 text-center">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Built-in Security</h3>
              <p className="text-gray-400 text-sm">
                AI firewall protection against malicious prompts and jailbreaks
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Natural Language</h3>
              <p className="text-gray-400 text-sm">
                Execute blockchain operations using simple English commands
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Smart Memory</h3>
              <p className="text-gray-400 text-sm">
                Per-session conversation memory with LangChain integration
              </p>
            </div>
          </motion.div>
          
          {/* Demo Badge */}
          <motion.div 
            className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-citrea-500 to-citrea-600 rounded-full text-white font-medium shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            Interactive Demo Available Below
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
