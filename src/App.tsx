import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Music from "@/pages/Music";
import Tours from "@/pages/Tours";
import Store from "@/pages/Store";
import Checkout from "@/pages/Checkout";
import About from "@/pages/About";
import EPK from "@/pages/EPK";
import EPKStandalone from "@/pages/EPKStandalone";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Standalone EPK without navigation */}
      <Route path="/epk-press">
        <div className="min-h-screen bg-railway-black">
          <EPKStandalone />
        </div>
      </Route>
      
      {/* Main site with navigation */}
      <Route>
        <div className="min-h-screen bg-railway-black flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/music" component={Music} />
              <Route path="/tours" component={Tours} />
              <Route path="/store" component={Store} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/about" component={About} />
              <Route path="/epk" component={EPK} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
