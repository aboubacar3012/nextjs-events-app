import { useRouter } from "next/router";
import EventList from "../../src/components/events/event-list";
import ResultsTitle from "../../src/components/events/results-title";
import Button from "../../src/components/ui/button";
import ErrorAlert from "../../src/components/ui/error-alert";
import { getFilteredEvents } from "../../src/services/dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2022 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>Invalid filter. Please adjuste your values...</p>
        </ErrorAlert>
        <Button onClick={undefined} link={"/events"}>
          Show All Events
        </Button>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({ year: filteredYear, month: filteredMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No events found for the chose filter !</p>
        </ErrorAlert>
        <Button onClick={undefined} link={"/events"}>
          Show All Events
        </Button>
      </div>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
