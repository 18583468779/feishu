import Header from "../components/header/Header";
import { CaledarFooter } from "../components/calendar/CaledarFooter";
import { MessengerBanner } from "../components/messenger/MessengerBanner";
import { CaledarSection } from "../components/calendar/CaledarSection";

const Messenger = () => {
  return (
    <>
      <Header />
      <MessengerBanner />
      <CaledarSection />
      <CaledarFooter />
    </>
  );
};
export default Messenger;
