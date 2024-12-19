import Hero from "@/app/sections/Hero/Hero";
import SelectedWorks from "@/app/sections/SelectedWorks/SelectedWorks";
import Services from "@/app/sections/Services/Services";
import Intro from "@/app/sections/Intro/Intro";

export default function App() {
  return (
      <div className="bg-offwhitebackground">
          <Hero/>
          <SelectedWorks/>
          <Services/>
      </div>
  );
}
