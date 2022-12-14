import { useRouter } from "next/router";
import { getEventById } from "../../src/services/dummy-data";
import EventSummary from "../../src/components/event-detail/event-summary";
import EventContent from "../../src/components/event-detail/event-content";
import EventLogistics from "../../src/components/event-detail/event-logistics";
import ErrorAlert from "../../src/components/ui/error-alert";

const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId?.toString();

  if (!eventId) {
    return (
      <ErrorAlert>
        <h1>EventId not found</h1>
      </ErrorAlert>
    );
  }

  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <h1>Not event found !</h1>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>{event.description}</EventContent>
    </>
  );
};

export default EventPage;
