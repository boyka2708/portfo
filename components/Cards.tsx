import Image from "next/image";
import Link from "next/link";
import { Faustina, Rubik_Bubbles } from "next/font/google";
type Props = {
  name: string;
  src: string;
  href: string;
  info: string;
};

const rubik = Rubik_Bubbles({
  subsets: ['latin'],
  weight: '400'
})
const faust = Faustina({
  subsets: ['latin'],
  weight: '700',
})

function Cards({ src,name,href,info}: Props) {
  return (
    <div className="flex flex-col shadow-2xl xl:flex-row rounded-xl bg-white space-y-2 items-center w-11/12 mt-2 mb-2">
        <div className="flex flex-col items-center pt-1 w-5/6 h-[250px] sm:h-[450px] ">
          <h1 className={`${rubik.className} font-mono text-3xl`}>{name}</h1>
          <div className="relative w-4/5 h-[500px]">
            <Image
              src={src}
              alt="lll"
              fill={true}
            />
          </div>
          <Link href={href} className="text-center mx-auto my-2 ">
            <p className={`${faust.className} bg-blue-700 p-2 rounded-xl font-semibold`}>
              Visit Live Demo
            </p>
          </Link>
        </div>

        <p className=" sm:font-bold xl:w-5/12 sm:text-lg text-center mx-auto p-2">
          {info}
        </p>
      </div>
  );
}

export default Cards;
