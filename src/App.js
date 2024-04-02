import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import MobilePage from "./Pages/MobilePage";
import MobileSingle from "./SinglePages/MobileSingle";
import ComputerPage from "./Pages/ComputerPage";
import MenWearPage from "./Pages/MenWearPage";
import WomanWearPage from "./Pages/WomanWearPage";
import SpeakerPage from "./Pages/SpeakerPage";
import FurniturePage from "./Pages/FurniturePage";
import WatchPage from "./Pages/WatchPage";
import FridgePage from "./Pages/FridgePage";
import AcPage from "./Pages/AcPage";
import TvPage from "./Pages/TvPage";
import BookPage from "./Pages/BookPage";
import KitchenPage from "./Pages/KitchenPage";
import ComputerSingle from "./SinglePages/ComputerSingle";
import MenWearSingle from "./SinglePages/MenWearSingle";
import WomanWearSingle from "./SinglePages/WomanWeareSingle";
import SpeakerSingle from "./SinglePages/SpeakerSingle";
import FurnitureSingle from "./SinglePages/FurnitureSingle";
import WatchSingle from "./SinglePages/WatchSingle";
import FridgeSingle from "./SinglePages/FridgeSingle";
import AcSingle from "./SinglePages/AcSingle";
import TvSingle from "./SinglePages/TvSingle";
import BookSingle from "./SinglePages/BookSingle";
import KitchenSingle from "./SinglePages/KitchenSingle";
import UserCart from "./UserCart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/*Products Page*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/computers" element={<ComputerPage />} />
        <Route path="/mens" element={<MenWearPage />} />
        <Route path="/womans" element={<WomanWearPage />} />
        <Route path="/speakers" element={<SpeakerPage />} />
        <Route path="/furnitures" element={<FurniturePage />} />
        <Route path="/watches" element={<WatchPage />} />
        <Route path="/fridges" element={<FridgePage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/cart" element={<UserCart />} />
        {/* Single Product Page*/}
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/computers/:id" element={<ComputerSingle />} />
        <Route path="/mens/:id" element={<MenWearSingle />} />
        <Route path="/womans/:id" element={<WomanWearSingle />} />
        <Route path="/speakers/:id" element={<SpeakerSingle />} />
        <Route path="/furnitures/:id" element={<FurnitureSingle />} />
        <Route path="/watches/:id" element={<WatchSingle />} />
        <Route path="/fridges/:id" element={<FridgeSingle />} />
        <Route path="/ac/:id" element={<AcSingle />} />
        <Route path="/tv/:id" element={<TvSingle />} />
        <Route path="/books/:id" element={<BookSingle />} />
        <Route path="/kitchen/:id" element={<KitchenSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
