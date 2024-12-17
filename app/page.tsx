import Hero from "@/app/sections/Hero/Hero";
import Intro from "@/app/sections/Intro/Intro";
import SelectedWorks from "@/app/sections/SelectedWorks/SelectedWorks";

export default function App() {
  return (
      <div className="bg-offwhitebackground">
          <Hero/>
          <hr className="border border-black opacity-10 mx-4 md:mx-8"/>
          <SelectedWorks/>
          <hr className="border border-black opacity-10 mx-4 md:mx-8"/>
          <Intro/>
      </div>
  );
}
