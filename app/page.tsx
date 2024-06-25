'use client';
import { motion } from 'framer-motion';
import Projects from '@/components/Projects'; // Correct import
import Skills from '@/components/Skills';
import { Jersey_10 } from 'next/font/google';
import Contact from '@/components/Contact';

const Jac = Jersey_10({
  subsets: ['latin'],
  weight: '400',
});
export default function Home() {
  const text =
    'A passionate and dedicated front-end focused Web Developer bringing your designs and ideas alive to websites and web apps that leads to the success of overall product.With a solid foundation in HTML, CSS, and JavaScript, and extensive experience with modern frameworks and libraries like React.js, Next.js, and Tailwind CSS, I strive to bring creative ideas to life through code.'.split(
      ' '
    );

  return (
    <main className="flex flex-col bg-slate-200 text-xs">
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-4  ">
        <h1
          className={`${Jac.className} animate-pulse text-4xl sm:text-6xl text-center text-slate-900 mt-16 sm:mt-32`}
        >
          Hello, I am Maneesh,
        </h1>
        <div className=" mt-28 ml-4 w-4/5 sm:w-3/5 p-6 2xl:w-4/5 border-4 border-double border-black">
          {text.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: i / 5 }}
              className={`${Jac.className} text-slate-900 sm:text-3xl text-lg font-bold font-mono text-balance`}

            >
              {el}{' '}
            </motion.span>
          ))}
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
