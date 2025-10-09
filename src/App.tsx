import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Membership from "./pages/Membership";
import Training from "./pages/Training";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Programmes from "./pages/Programmes";
import Notice from "./pages/Notice";
import NotFound from "./pages/NotFound"; 
import VideoCarousel from "./components/ui/VideoCarousel";

// Institute Section Pages
import Mission from "./pages/institute/Mission";
import Ethics from "./pages/institute/Ethics";
import ChairmanMessage from "./pages/institute/ChairmanMessage";
import EC20232025 from "./pages/institute/EC20232025";
import EC20252027 from "./pages/institute/EC20252027";
import FormerChairmen from "./pages/institute/FormerChairmen";
import FormerPresidents from "./pages/institute/FormerPresidents";

// Education Section Pages
import Courses from "./pages/education/Courses";
import Prospectus from "./pages/education/Prospectus";
import Fees from "./pages/education/Fees";
import Faculty from "./pages/education/Faculty";
import Forms from "./pages/education/Forms";
import StudentZone from "./pages/education/StudentZone";

import { Youtube } from "lucide-react";

// Import membership components
import WhyJoinIIMM from "./pages/membership/WhyJoinIIMM";
import MembershipTypes from "./pages/membership/MembershipTypes";
import ApplicationForms from "./pages/membership/ApplicationForms";
import IIMMBranches from "./pages/membership/IIMMBranches";

// Payment Pages
import DelhiBranch from "./pages/payment/DelhiBranch";
import NHQMembership from "./pages/payment/NHQMembership";
import NHQEducation from "./pages/payment/NHQEducation";
import GSTInfo from "./pages/payment/GSTInfo";
import AlumniHome from "./pages/alumni";
import SuccessStories from "./pages/alumni/success-stories";
import AlumniEvents from "./pages/alumni/events";
import MentorshipProgram from "./pages/alumni/mentorship";
import AlumniNetwork from "./pages/alumni/network";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Institute Section Routes */}
            <Route path="/institute/about" element={<About />} />
            <Route path="/institute/mission" element={<Mission />} />
            <Route path="/institute/ethics" element={<Ethics />} />
            <Route path="/institute/chairman-message" element={<ChairmanMessage />} />
            <Route path="/institute/ec-2023-2025" element={<EC20232025 />} />
            <Route path="/institute/ec-2025-2027" element={<EC20252027 />} />
            <Route path="/institute/former-chairmen" element={<FormerChairmen />} />
            <Route path="/institute/former-presidents" element={<FormerPresidents />} />
            
            {/* Education Section Routes */}
            <Route path="/education/courses" element={<Courses />} />
            <Route path="/education/prospectus" element={<Prospectus />} />
            <Route path="/education/fees" element={<Fees />} />
            <Route path="/education/faculty" element={<Faculty />} />
            <Route path="/education/forms" element={<Forms />} />
            <Route path="/education/student-zone" element={<StudentZone />} />
            <Route path="/education/student-zone/*" element={<StudentZone />} />
            
            {/* Other Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/:section" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/:section" element={<Academics />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:section" element={<Events />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/publications/:section" element={<Publications />} />
            {/* Membership Section Routes */}
            <Route path="/membership" element={<Membership />}>
              <Route index element={null} />
              <Route path="why-join" element={<WhyJoinIIMM />} />
              <Route path="types" element={<MembershipTypes />} />
              <Route path="forms" element={<ApplicationForms />} />
              <Route path="branches" element={<IIMMBranches />} />
            </Route>
            <Route path="/training" element={<Training />} />
            {/* Alumni Section Routes */}
            <Route path="/alumni" element={<AlumniHome />} />
            <Route path="/alumni/success-stories" element={<SuccessStories />} />
            <Route path="/alumni/events" element={<AlumniEvents />} />
            <Route path="/alumni/mentorship" element={<MentorshipProgram />} />
            <Route path="/alumni/mentorship/apply" element={<div>Mentee Application Form</div>} />
            <Route path="/alumni/mentorship/become-mentor" element={<div>Mentor Application Form</div>} />
            <Route path="/alumni/network" element={<AlumniNetwork />} />
            <Route path="/training/:section" element={<Training />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/Youtube" element={<Youtube/>} />
            
            {/* Payment Routes */}
            <Route path="/payment/delhi" element={<DelhiBranch />} />
            <Route path="/payment/nhq-membership" element={<NHQMembership />} />
            <Route path="/payment/nhq-education" element={<NHQEducation />} />
            <Route path="/payment/gst" element={<GSTInfo />} />
            
            {/* 404 - Not Found Route - Keep this at the bottom */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
