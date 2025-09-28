import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header.tsx';
import TestRunner from './components/TestRunner.tsx';
import Features from './components/Features.tsx';
import Footer from './components/Footer.tsx';
import { testSuites } from './data/testSuites.ts';
import { TestSuite, TestResult, TestStatus } from './types';

const App: React.FC = () => {
  const [runningTests, setRunningTests] = useState<Set<string>>(new Set());
  const [testResults, setTestResults] = useState<Map<string, TestResult>>(new Map());

  const simulateTestExecution = useCallback(async (
    testSuiteId: string, 
    testId: string, 
    duration: number = 1000 + Math.random() * 2000
  ): Promise<TestResult> => {
    // Simulate test execution time
    await new Promise(resolve => setTimeout(resolve, duration));
    
    // Simulate success/failure (90% success rate for demo)
    const isSuccess = Math.random() > 0.1;
    
    const result: TestResult = {
      testId,
      status: isSuccess ? 'success' : 'error',
      duration: Math.round(duration),
      timestamp: new Date(),
      output: isSuccess 
        ? `Test ${testId} completed successfully. Agent response: "Operation completed with transaction hash: 0x${Math.random().toString(16).slice(2, 66)}"`
        : undefined,
      error: isSuccess 
        ? undefined 
        : `Test ${testId} failed: Simulated error - Network timeout`
    };
    
    return result;
  }, []);

  const runTestSuite = useCallback(async (testSuiteId: string) => {
    const testSuite = testSuites.find(ts => ts.id === testSuiteId);
    if (!testSuite) return;

    // Add suite to running tests
    setRunningTests(prev => new Set(prev).add(testSuiteId));

    // Run all tests in the suite
    const promises = testSuite.tests.map(async (test) => {
      // Add individual test to running tests
      setRunningTests(prev => new Set(prev).add(test.id));
      
      try {
        const result = await simulateTestExecution(testSuiteId, test.id);
        setTestResults(prev => new Map(prev).set(test.id, result));
      } catch (error) {
        const errorResult: TestResult = {
          testId: test.id,
          status: 'error',
          duration: 0,
          timestamp: new Date(),
          error: error instanceof Error ? error.message : 'Unknown error'
        };
        setTestResults(prev => new Map(prev).set(test.id, errorResult));
      } finally {
        // Remove test from running tests
        setRunningTests(prev => {
          const newSet = new Set(prev);
          newSet.delete(test.id);
          return newSet;
        });
      }
    });

    await Promise.all(promises);

    // Remove suite from running tests
    setRunningTests(prev => {
      const newSet = new Set(prev);
      newSet.delete(testSuiteId);
      return newSet;
    });
  }, [simulateTestExecution]);

  const runAllTests = useCallback(async () => {
    const allSuiteIds = testSuites.map(ts => ts.id);
    
    // Run all test suites in parallel
    await Promise.all(allSuiteIds.map(suiteId => runTestSuite(suiteId)));
  }, [runTestSuite]);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TestRunner
          testSuites={testSuites}
          onRunAllTests={runAllTests}
          onRunTestSuite={runTestSuite}
          runningTests={runningTests}
          testResults={testResults}
        />
      </main>

      <Features />
      <Footer />
    </div>
  );
};

export default App;
