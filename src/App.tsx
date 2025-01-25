import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MainSidebar } from "@/components/MainSidebar";
import Index from "@/pages/Index";
import SignIn from "@/pages/SignIn";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/signin" 
          element={<SignIn />} 
        />
        <Route
          path="/*"
          element={
            <div className="flex min-h-screen">
              <MainSidebar />
              <main className="flex-1">
                <Index />
              </main>
            </div>
          }
        />
        <Route 
          path="/" 
          element={<Navigate to="/signin" replace />} 
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;