import EventList from "../src/components/events/event-list";
import { getFeaturedEvents } from "../src/services/dummy-data";
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
