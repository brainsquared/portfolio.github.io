import Roadmap from "../components/Roadmap";
import { phases, pivots } from "../data/roadmap";

export default function Home() {
  return <Roadmap phases={phases} pivots={pivots} />;
}
