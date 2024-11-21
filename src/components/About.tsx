import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate developer who loves creating beautiful and functional web applications. 
              With a keen eye for design and a deep understanding of modern web technologies, 
              I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Clean Code</h3>
              <p className="text-gray-600 dark:text-gray-300">Writing maintainable, scalable, and efficient code is my passion.</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Palette className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Creative Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">I love solving complex problems with elegant solutions.</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Global Mindset</h3>
              <p className="text-gray-600 dark:text-gray-300">Creating applications that reach users worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}