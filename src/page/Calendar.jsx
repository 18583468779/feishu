import Header from "../components/header/Header";
import { CaledarFooter } from "../components/calendar/CaledarFooter";
import { CaledarBanner } from "../components/calendar/CaledarBanner";
import { CaledarSection } from "../components/calendar/CaledarSection";

const Calendar = () => {
  return (
    <>
      <Header />
      <CaledarBanner />
      <CaledarSection />
      <CaledarFooter />
    </>
  );
};
export default Calendar;
