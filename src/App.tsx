import { BrowserRouter as Router } from "react-router-dom";
import { MainSidebar } from "@/components/MainSidebar";
import Index from "@/pages/Index";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <MainSidebar />
        <main className="flex-1">
          <Index />
        </main>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;