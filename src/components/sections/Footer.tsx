import SkeuomorphicButton from "../ui/SkeuomorphicButton";
import { FaGithub, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white py-32 border-t-2 border-dashed border-gray-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-sans font-black text-4xl md:text-7xl mb-12 uppercase tracking-tight">
          Ready to start?
        </h2>
        
        <div className="flex justify-center mb-20">
            <SkeuomorphicButton text="Let's Connect" />
        </div>

        <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6">
                {[FaGithub, FaTwitter, FaLinkedin, FaDribbble].map((Icon, i) => (
                    <a key={i} href="#" className="text-2xl text-gray-400 hover:text-black transition-colors hover:scale-110 transform duration-200">
                        <Icon />
                    </a>
                ))}
            </div>
            <p className="font-mono text-sm text-gray-400">
                © 2024 Daniel Sun. All rights reserved. <br/>
                Made with copious amounts of coffee.
            </p>
        </div>
      </div>
    </footer>
  );
}