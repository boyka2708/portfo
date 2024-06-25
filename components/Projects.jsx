import { BriefcaseIcon } from 'lucide-react';
import Cards from './Cards';

function Projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col justify-center space-y-20 items-center "
    >
      <h1 className=" sm:mt-12 mt-6 font-bold flex text-2xl items-center sm:text-4xl font-mono">
        Projects{<BriefcaseIcon />}
      </h1>
      <Cards
        name="Ecommerce App"
        src="/999.png"
        href="https://ecommerce-jet-five-69.vercel.app"
        info="Ecomm is a modern e-commerce web application designed for a seamless
          shopping experience, featuring static product serving for fast load
          times. It leverages Firebase for real-time database management and
          user authentication, ensuring secure data handling. Stripe integration
          facilitates smooth and secure payment processing. The app, built with
          Next.js and Tailwind CSS, offers a responsive and user-friendly
          interface. Key technologies include React Hook Form for form
          management and Zustand for state management, enhancing overall
          performance and user engagement."
      />

      <Cards
        name="Netflix Home clone"
        src="/uii.png"
        href="https://netflix-clone-ddab7.web.app/"
        info="The app is a Netflix clone UI that showcases the latest movies across various genres, 
        allowing users to log in and subscribe to either premium or basic plans. It is built using 
        React and utilizes Redux for state management. User information and subscription details are 
        securely stored in Firebase. The app also incorporates Stripe for payment processing. With a clean
         and intuitive interface, users can easily browse and select movies, ensuring a seamless viewing experience.
         The application leverages key technologies including Axios for API requests and React Router for navigation."
      />

      <Cards
        name="Messaging App"
        src="/78.png"
        href="https://saas-translation-6bp8zgsqc-maneesh-singhs-projects.vercel.app"
        info="This messaging app allows users to create groups and add members, supporting both direct and group chats.
        It offers free and pro versions, with the free version having limitations and the pro version providing full access to features. 
        A notable feature is the real-time language translator, supporting various languages through a Firebase extension. User data, messages, 
        and subscription details are securely stored in Firestore. Payment integration with Stripe manages pro version subscriptions, ensuring seamless 
        access and secure transactions. The app leverages Next.js, Firebase, and Zustand for a robust and responsive user experience."
      />

      <Cards
        name="Dropbox Clone"
        src="/444.png"
        href="https://dropbox-37mosr5g1-maneesh-singhs-projects.vercel.app"
        info="The app is a Dropbox clone built with Next.js, providing users with a seamless 
        file storage and management experience. It features user authentication via Clerk, 
        real-time database management using Firebase, and employs Zustand for state management.
       The app uses Tailwind CSS for styling and Radix UI components for a responsive and accessible interface. 
       Users can easily upload, organize, and share files with the help of React Dropzone and React File Icon. 
       Additionally, it includes features like theme toggling with Next Themes and efficient state handling through Tanstack React Table."
      />

      <Cards
        name="Nike Shopping Page"
        src="/545.png"
        href="https://nike-page-526de.web.app/"
        info="This app is a simple home page for Nike, showcasing modern web development skills and technologies. Built with React and Vite 
        for fast and efficient development, the app employs Tailwind CSS for styling, ensuring a responsive and visually appealing design.
         Firebase is integrated for backend services, providing secure data management. The development environment is enhanced with ESLint 
         for code quality and Prettier for code formatting. Utilizing these technologies, the app offers a clean and streamlined user experience 
         while demonstrating proficiency in contemporary web development practices."
      />
    </div>
  );
}

export default Projects;
