import { Event } from "../../interfaces/event";
import EventItem from "./event-item";

import styles from "./event-list.module.css";

interface Props {
  events: Event[];
}

const EventList = ({ events }: Props) => {
  return (
    <ul className={styles.list}>
      {events.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
