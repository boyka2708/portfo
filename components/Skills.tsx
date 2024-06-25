import { SparklesIcon } from 'lucide-react';
import React from 'react';
import { Passion_One } from 'next/font/google';

const font = Passion_One({
  subsets : ['latin'],
  weight: '400'
})
function Skills() {
  return (
    <div id="skills" className="min-h-screen flex w-full flex-col items-center">
      <h1 className="font-bold flex items-center mt-8 sm:mt-16 text-2xl sm:text-4xl mb-6 font-mono t:bg-slate-300">{<SparklesIcon/>}Skills {<SparklesIcon/>}</h1>

      <div className=" sm:text-xl text-xs  hover:bg-slate-300 bg-slate-200 shadow-2xl w-4/5 flex justify-between font-mono font-semibold p-4 sm:p-8 mb-2 rounded-2xl transform transition-transform duration-300 hover:scale-105">
        <h1 className='w-2/5'>Frontend Technologies:</h1>
        <ul className={`sm:${font.className} w-1/3`}>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
        <ul className={`sm:${font.className} w-1/3`}>
          <li>Javascript (ES6+)</li>
          <li>TypeScript</li>
        </ul>
      </div>

      <div className=" sm:text-xl text-xs  hover:bg-slate-300 bg-slate-200 shadow-2xl w-4/5 flex justify-between font-mono font-semibold p-4 sm:p-8 mb-2 rounded-2xl transform transition-transform duration-300 hover:scale-105">
        <h1 className='w-2/5'>Frameworks & Libraries:</h1>
        <ul className={`sm:${font.className} w-1/3`}>
          <li>React.js</li>
          <li>Next.js</li>
        </ul>
        <ul className={`sm:${font.className} w-1/3`}>
          <li>Tailwind CSS</li>
          <li>Material UI</li>
        </ul>
      </div>

      <div className=" sm:text-xl text-xs  hover:bg-slate-300 bg-slate-200 w-4/5 shadow-2xl flex justify-between font-mono font-semibold p-4 sm:p-8 mb-2 rounded-2xl transform transition-transform duration-300 hover:scale-105">
        <h1 className='w-2/5'>State Management:</h1>
        <ul className={`sm:${font.className} w-1/3`}>
          <li>Redux</li>
          <li>Zustand</li>
        </ul>
        <ul className={`sm:${font.className} w-1/3`}></ul>
      </div>

      <div className=" sm:text-xl text-xs  hover:bg-slate-300 bg-slate-200 w-4/5 shadow-2xl flex justify-between font-mono font-semibold p-4 sm:p-8 mb-2 rounded-2xl transform transition-transform duration-300 hover:scale-105">
        <h1 className='w-2/5'>Backend Technologies:</h1>
        <ul className={`sm:${font.className} w-1/3`}>
          <li>Firebase</li>
          <li>Node.js</li>
        </ul>
        <ul className={`sm:${font.className} w-1/3`}></ul>
      </div>

      <div className=" sm:text-xl text-xs  hover:bg-slate-300 bg-slate-200 w-4/5 shadow-2xl flex justify-between font-mono font-semibold p-4 sm:p-8 mb-2 rounded-2xl transform transition-transform duration-300 hover:scale-105">
        <h1 className='w-2/5'>Additional Skills:</h1>
        <ul className={`sm:${font.className} w-1/3`}>
          <li>Git</li>
          <li>VS Code</li>
        </ul>
        <ul className={`sm:${font.className} w-1/3`}>
          <li>npm</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
