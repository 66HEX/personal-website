import Hero from "@/app/sections/Hero/Hero";
import SelectedWorks from "@/app/sections/SelectedWorks/SelectedWorks";
import Testimonials from "@/app/sections/Testimonials/Testimonials";
import Intro from "@/app/sections/Intro/Intro";

export default function App() {
  return (
      <div>
          <Hero/>
          <Intro/>
          <SelectedWorks/>
          <Testimonials/>
      </div>
  );
}
