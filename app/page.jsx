import Roadmap from "../components/Roadmap";
import { units, pivots } from "../data/roadmap";

export default function Home() {
  return <Roadmap units={units} pivots={pivots} />;
}
