import ParticlesComponent from './components/particles';
import { Hero } from './components/Hero';

export default function Home() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <Hero />
    </div>
  );
}
