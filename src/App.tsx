import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import ChairmanMessage from "./pages/institute/ChairmanMessage";
import FormerChairmen from "./pages/institute/FormerChairmen";
import FormerPresidents from "./pages/institute/FormerPresidents";
import IIMMHouse from "./pages/institute/IIMMHouse";
import GuestHouse from "./pages/institute/GuestHouse";
import Evolution from "./pages/institute/Evolution";
import ValuesPage from "./pages/institute/Values";
import Administration from "./pages/institute/Administration";
import BoardOfStudies from "./pages/institute/BoardOfStudies";
import Network from "./pages/institute/Network";

// Education Section Pages
import Courses from "./pages/education/Courses";
import Prospectus from "./pages/education/Prospectus";
import Fees from "./pages/education/Fees";
import Faculty from "./pages/education/Faculty";
import Forms from "./pages/education/Forms";
import StudentZone from "./pages/education/StudentZone";
import ExamSchedule from "./pages/education/ExamSchedule";
import Results from "./pages/education/Results";
import MandatoryDisclosures from "./pages/education/MandatoryDisclosures";

import { Youtube } from "lucide-react";

// Import membership components
import WhyJoinIIMM from "./pages/membership/WhyJoinIIMM";
import MembershipTypes from "./pages/membership/MembershipTypes";
import ApplicationForms from "./pages/membership/forms";
import OrdinaryApplicationPage from "./pages/membership/forms/OrdinaryApplicationPage";
import InstitutionalApplicationPage from "./pages/membership/forms/InstitutionalApplicationPage";
import IIMMBranches from "./pages/membership/branches";
import NorthBranch from "./pages/membership/branches/NorthBranch";
import SouthBranch from "./pages/membership/branches/SouthBranch";
import EastBranch from "./pages/membership/branches/EastBranch";
import WestBranch from "./pages/membership/branches/WestBranch";
import CentralBranch from "./pages/membership/branches/CentralBranch";

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
            <Route path="/institute/chairman-message" element={<ChairmanMessage />} />
            <Route path="/institute/former-chairmen" element={<FormerChairmen />} />
            <Route path="/institute/former-presidents" element={<FormerPresidents />} />
            <Route path="/institute/iimm-house" element={<IIMMHouse />} />
            <Route path="/institute/guest-house" element={<GuestHouse />} />
            <Route path="/institute/evolution" element={<Evolution />} />
            <Route path="/institute/values" element={<ValuesPage />} />
            <Route path="/institute/administration" element={<Administration />} />
            <Route path="/institute/board-of-studies" element={<BoardOfStudies />} />
            <Route path="/institute/network" element={<Network />} />
         
            
            
            {/* Education Section Routes */}
            <Route path="/education/courses" element={<Courses />} />
            <Route path="/education/prospectus" element={<Prospectus />} />
            <Route path="/education/fees" element={<Fees />} />
            <Route path="/education/faculty" element={<Faculty />} />
            <Route path="/education/forms" element={<Forms />} />
            <Route path="/education/student-zone" element={<StudentZone />}>
              <Route index element={null} />
              <Route path="academic-calendar" element={<div>Academic Calendar Page</div>} />
              <Route path="course-materials" element={<div>Course Materials Page</div>} />
              <Route path="exam-schedule" element={<div>Exam Schedule Page</div>} />
              <Route path="portal" element={<div>Student Portal Page</div>} />
              <Route path="assignments" element={<div>Assignments Page</div>} />
              <Route path="books" element={<div>Books & Resources Page</div>} />
              <Route path="exam-timetable" element={<div>Exam Timetable Page</div>} />
              <Route path="certification" element={<div>Certification Forms Page</div>} />
              <Route path="question-papers" element={<div>Previous Question Papers Page</div>} />
            </Route>
            <Route path="/education/exam-schedule" element={<ExamSchedule />} />
            <Route path="/education/exam-schedule/:type" element={<ExamSchedule />} />
            <Route path="/education/results" element={<Results />} />
            <Route path="/education/results/:type" element={<Results />} />
            <Route path="/education/results/:type/:year" element={<Results />} />
            <Route path="/education/mandatory-disclosures" element={<MandatoryDisclosures />} />
            
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
              <Route path="forms" element={<ApplicationForms />}>
                <Route index element={<Navigate to="ordinary" replace />} />
                <Route path="ordinary" element={<OrdinaryApplicationPage />} />
                <Route path="institutional" element={<InstitutionalApplicationPage />} />
              </Route>
              <Route path="branches" element={<IIMMBranches />}>
                <Route index element={<Navigate to="north" replace />} />
                <Route path="north" element={<NorthBranch />} />
                <Route path="south" element={<SouthBranch />} />
                <Route path="east" element={<EastBranch />} />
                <Route path="west" element={<WestBranch />} />
                <Route path="central" element={<CentralBranch />} />
              </Route>
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
