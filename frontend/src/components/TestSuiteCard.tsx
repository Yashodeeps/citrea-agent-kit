import React from 'react';
import { motion } from 'framer-motion';
import { TestSuite, TestStatus } from '../types';
import { Play, CheckCircle, XCircle, Clock, Loader } from 'lucide-react';

interface TestSuiteCardProps {
  testSuite: TestSuite;
  onRunTest: (testSuiteId: string) => void;
  isRunning: boolean;
}

const TestSuiteCard: React.FC<TestSuiteCardProps> = ({ 
  testSuite, 
  onRunTest, 
  isRunning 
}) => {
  const getStatusIcon = (status: TestStatus) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-400" />;
      case 'running':
        return <Loader className="w-4 h-4 text-yellow-400 animate-spin" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusCounts = () => {
    const counts = testSuite.tests.reduce((acc, test) => {
      acc[test.status] = (acc[test.status] || 0) + 1;
      return acc;
    }, {} as Record<TestStatus, number>);

    return counts;
  };

  const statusCounts = getStatusCounts();
  const totalTests = testSuite.tests.length;
  const completedTests = (statusCounts.success || 0) + (statusCounts.error || 0);

  return (
    <motion.div
      className="test-card group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${testSuite.color} flex items-center justify-center text-2xl`}>
            {testSuite.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-citrea-300 transition-colors">
              {testSuite.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {testSuite.description}
            </p>
          </div>
        </div>
        
        <button
          onClick={() => onRunTest(testSuite.id)}
          disabled={isRunning}
          className={`btn-primary flex items-center space-x-2 ${
            isRunning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isRunning ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          <span>{isRunning ? 'Running...' : 'Run Tests'}</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Progress</span>
          <span>{completedTests}/{totalTests} tests</span>
        </div>
        <div className="w-full bg-dark-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-citrea-500 to-citrea-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${totalTests > 0 ? (completedTests / totalTests) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Test List */}
      <div className="space-y-2">
        {testSuite.tests.map((test, index) => (
          <motion.div
            key={test.id}
            className="flex items-center justify-between p-3 rounded-lg bg-dark-800/50 border border-dark-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              {getStatusIcon(test.status)}
              <div>
                <p className="text-sm font-medium text-white">{test.name}</p>
                <p className="text-xs text-gray-400">{test.description}</p>
              </div>
            </div>
            
            {test.duration && (
              <span className="text-xs text-gray-500">
                {test.duration}ms
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Status Summary */}
      <div className="mt-4 flex space-x-4 text-sm">
        {statusCounts.success > 0 && (
          <div className="flex items-center space-x-1 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>{statusCounts.success} passed</span>
          </div>
        )}
        {statusCounts.error > 0 && (
          <div className="flex items-center space-x-1 text-red-400">
            <XCircle className="w-4 h-4" />
            <span>{statusCounts.error} failed</span>
          </div>
        )}
        {statusCounts.running > 0 && (
          <div className="flex items-center space-x-1 text-yellow-400">
            <Loader className="w-4 h-4 animate-spin" />
            <span>{statusCounts.running} running</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TestSuiteCard;
