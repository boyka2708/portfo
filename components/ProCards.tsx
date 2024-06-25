import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useEffect } from 'react';

type Props = {
  src: string;
  desc: string;
  name: string;
  link: string;
};

export default function ProCards({ src, desc, name, link }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1,
        },
      });
    } else {
      controls.start({
        x: -500, // Reset to initial position when out of viewport
        opacity: 0,
      });
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className=" rounded-3xl shadow-2xl flex bg-slate-100 flex-col space-y-12 justify-center sm:items-center"
    >
      <h1 className=" text-4xl font-semibold underline">{name}</h1>
      <motion.div
        animate={controls}
        initial={{ x: -500, opacity: 0 }}
        className="flex flex-col lg:flex-row space-y-5 space-x-5"
      >
        <Link href={link} target='_blank'>
          <Image
            src={src}
            alt="pro"
            width={400}
            height={400}
            className="sm:rounded-xl hover:scale-105 "
          />
        </Link>

        <p>{desc}</p>
      </motion.div>
    </div>
  );
}
