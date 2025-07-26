import PWABadge from "./PWABadge.jsx";
import { Button } from "@/components/ui/button.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl text-red-600">bazaarlink</h1>
      <PWABadge />
      <Button> Click Me</Button>
    </>
  );
}

export default App;
