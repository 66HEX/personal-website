import Hero from "@/app/sections/Hero/Hero";
import SelectedWorks from "@/app/sections/SelectedWorks/SelectedWorks";
import Testimonials from "@/app/sections/Testimonials/Testimonials";
import Services from "@/app/sections/Services/Services";

export default function App() {
  return (
      <div>
          <Hero/>
          <SelectedWorks/>
          <Services/>
          <Testimonials/>
      </div>
  );
}
