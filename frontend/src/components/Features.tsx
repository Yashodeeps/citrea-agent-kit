import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Brain, 
  Bot, 
  Lock, 
  MessageSquare, 
  Settings, 
  Code,
  Database,
  Cpu
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Interactions",
      description: "Execute blockchain operations using natural language prompts. No need to learn complex APIs or transaction formats.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Built-in Security",
      description: "AI firewall protection against malicious prompts, jailbreaks, and social engineering attacks.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "CITREA Operations",
      description: "Transfer CITREA tokens, check balances, and interact with the Citrea blockchain seamlessly.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "ERC-20 Support",
      description: "Full support for ERC-20 tokens including transfers, burns, and balance checking.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Memory",
      description: "Per-session conversation memory with LangChain integration for contextual interactions.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Multiple AI Models",
      description: "Support for OpenAI GPT models and Anthropic Claude models with easy switching.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Personalities",
      description: "Define custom agent personalities through system prompts for different use cases.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security-First Design",
      description: "Pattern matching and LLM-based sanitization to protect sensitive operations.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer Friendly",
      description: "TypeScript support, comprehensive documentation, and easy integration.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for{' '}
            <span className="gradient-text">Blockchain AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Citrea Agent Kit provides everything you need to build AI-powered blockchain applications
            with enterprise-grade security and developer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-citrea-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <Cpu className="w-16 h-16 text-citrea-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build the Future?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Start building AI-powered blockchain applications with the Citrea Agent Kit today.
              Experience the power of natural language blockchain interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started
              </button>
              <button className="btn-secondary">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
