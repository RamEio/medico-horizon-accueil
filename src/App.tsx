import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Stagiaires from "./pages/Stagiaires";
import Internes from "./pages/Internes";
import Remplacements from "./pages/Remplacements";
import Installation from "./pages/Installation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stagiaires" element={<Stagiaires />} />
          <Route path="/internes" element={<Internes />} />
          <Route path="/remplacements" element={<Remplacements />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
