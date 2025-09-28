import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestSuite, TestCase, TestResult } from '../types';
import { Play, Square, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface TestRunnerProps {
  testSuites: TestSuite[];
  onRunAllTests: () => void;
  onRunTestSuite: (testSuiteId: string) => void;
  runningTests: Set<string>;
  testResults: Map<string, TestResult>;
}

const TestRunner: React.FC<TestRunnerProps> = ({
  testSuites,
  onRunAllTests,
  onRunTestSuite,
  runningTests,
  testResults
}) => {
  const [selectedTestSuite, setSelectedTestSuite] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);

  const getOverallStats = () => {
    const totalTests = testSuites.reduce((sum, suite) => sum + suite.tests.length, 0);
    const passedTests = Array.from(testResults.values()).filter(r => r.status === 'success').length;
    const failedTests = Array.from(testResults.values()).filter(r => r.status === 'error').length;
    const runningTestsCount = runningTests.size;

    return { totalTests, passedTests, failedTests, runningTestsCount };
  };

  const stats = getOverallStats();

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Test Runner</h2>
            <p className="text-gray-400">Execute and monitor Citrea Agent Kit tests</p>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={() => setShowCode(!showCode)}
              className="btn-secondary flex items-center space-x-2"
            >
              {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showCode ? 'Hide' : 'Show'} Code</span>
            </button>
            
            <button
              onClick={onRunAllTests}
              disabled={runningTests.size > 0}
              className="btn-primary flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Run All Tests</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">{stats.totalTests}</div>
            <div className="text-sm text-gray-400">Total Tests</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{stats.passedTests}</div>
            <div className="text-sm text-gray-400">Passed</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-400">{stats.failedTests}</div>
            <div className="text-sm text-gray-400">Failed</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{stats.runningTestsCount}</div>
            <div className="text-sm text-gray-400">Running</div>
          </div>
        </div>
      </motion.div>

      {/* Test Suites Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testSuites.map((testSuite, index) => (
          <motion.div
            key={testSuite.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="card">
              {/* Suite Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${testSuite.color} flex items-center justify-center text-xl`}>
                    {testSuite.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testSuite.name}</h3>
                    <p className="text-sm text-gray-400">{testSuite.description}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => onRunTestSuite(testSuite.id)}
                  disabled={runningTests.has(testSuite.id)}
                  className={`btn-primary text-sm px-4 py-2 ${
                    runningTests.has(testSuite.id) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {runningTests.has(testSuite.id) ? 'Running...' : 'Run Suite'}
                </button>
              </div>

              {/* Test List */}
              <div className="space-y-2">
                {testSuite.tests.map((test) => {
                  const result = testResults.get(test.id);
                  const isRunning = runningTests.has(test.id);
                  
                  return (
                    <motion.div
                      key={test.id}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        result?.status === 'success' 
                          ? 'bg-green-400/10 border-green-400/20' 
                          : result?.status === 'error'
                          ? 'bg-red-400/10 border-red-400/20'
                          : isRunning
                          ? 'bg-yellow-400/10 border-yellow-400/20'
                          : 'bg-dark-800/50 border-dark-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            result?.status === 'success' 
                              ? 'bg-green-400 text-white' 
                              : result?.status === 'error'
                              ? 'bg-red-400 text-white'
                              : isRunning
                              ? 'bg-yellow-400 text-white animate-pulse'
                              : 'bg-gray-600 text-gray-300'
                          }`}>
                            {result?.status === 'success' ? '✓' : 
                             result?.status === 'error' ? '✗' : 
                             isRunning ? '⟳' : '○'}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{test.name}</p>
                            <p className="text-xs text-gray-400">{test.description}</p>
                          </div>
                        </div>
                        
                        {result?.duration && (
                          <span className="text-xs text-gray-500">
                            {result.duration}ms
                          </span>
                        )}
                      </div>

                      {/* Test Input/Output */}
                      {showCode && (
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 space-y-2"
                          >
                            {test.input && (
                              <div>
                                <p className="text-xs text-gray-400 mb-1">Input:</p>
                                <SyntaxHighlighter
                                  language="typescript"
                                  style={vscDarkPlus}
                                  className="rounded text-xs"
                                >
                                  {test.input}
                                </SyntaxHighlighter>
                              </div>
                            )}
                            
                            {result?.output && (
                              <div>
                                <p className="text-xs text-gray-400 mb-1">Output:</p>
                                <SyntaxHighlighter
                                  language="json"
                                  style={vscDarkPlus}
                                  className="rounded text-xs"
                                >
                                  {JSON.stringify(result.output, null, 2)}
                                </SyntaxHighlighter>
                              </div>
                            )}
                            
                            {result?.error && (
                              <div>
                                <p className="text-xs text-red-400 mb-1">Error:</p>
                                <SyntaxHighlighter
                                  language="text"
                                  style={vscDarkPlus}
                                  className="rounded text-xs"
                                >
                                  {result.error}
                                </SyntaxHighlighter>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestRunner;
