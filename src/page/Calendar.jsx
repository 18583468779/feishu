import Header from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { CaledarBanner } from "../components/calendar/CaledarBanner";
import { CaledarSection } from "../components/calendar/CaledarSection";

const Calendar = () => {
  return (
    <>
      <Header />
      <CaledarBanner />
      <CaledarSection />
      <Footer />
    </>
  );
};
export default Calendar;
