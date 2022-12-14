import { getAllEvents } from "../../src/services/dummy-data";
import EventList from "../../src/components/events/event-list";
import EventsSearch from "../../src/components/events/events-search";

import { useRouter } from "next/router";

const EventsListPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: number, month: number) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </div>
  );
};

export default EventsListPage;
