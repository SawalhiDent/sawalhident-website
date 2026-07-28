import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./context/LanguageContext";
import { AppLayout } from "./components/layout/AppLayout";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Implants from "@/pages/services/Implants";
import Cosmetic from "@/pages/services/Cosmetic";
import Orthodontics from "@/pages/services/Orthodontics";
import BlogIndex from "@/pages/blog/Index";
import BlogPost1 from "@/pages/blog/Post1";
import BlogPost2 from "@/pages/blog/Post2";
import BlogPost3 from "@/pages/blog/Post3";
import BlogPost4 from "@/pages/blog/Post4";
import BlogPost5 from "@/pages/blog/Post5";
import LocalSEOPage from "@/pages/local/LocalSEOPage";
import PublicationsIndex from "@/pages/publications/PublicationsIndex";
import BooksIndex from "@/pages/publications/BooksIndex";
import BookPage from "@/pages/publications/BookPage";
import AuthorPage from "@/pages/publications/AuthorPage";
function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <Route path="/services/implants" component={Implants} />
        <Route path="/services/cosmetic" component={Cosmetic} />
        <Route path="/services/orthodontics" component={Orthodontics} />

        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/implant-cost-ramallah" component={BlogPost1} />
        <Route path="/blog/hollywood-smile" component={BlogPost2} />
        <Route path="/blog/best-dentist-ramallah" component={BlogPost3} />
        <Route path="/blog/is-implant-painful" component={BlogPost4} />
        <Route path="/blog/braces-duration" component={BlogPost5} />

        <Route path="/publications" component={PublicationsIndex} />
        <Route path="/publications/books" component={BooksIndex} />
        <Route path="/publications/books/:slug" component={BookPage} />
        <Route path="/publications/author/mohamed-sawalhi" component={AuthorPage} />

        <Route path="/ar/:page" component={LocalSEOPage} />
        <Route path="/he/:page" component={LocalSEOPage} />

        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
