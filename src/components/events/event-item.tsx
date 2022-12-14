import Image from "next/image";
import Link from "next/link";
import { Event } from "../../interfaces/event";
import styles from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "./../icons/date-icon";
import AddressIcon from "./../icons/address-icon";
import ArrowRightIcon from "./../icons/arrow-right-icon";

interface Props {
  event: Event;
}

const EventItem = ({ event }: Props) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString();
  const formattedAddress = event.location.replace(", ", "\n");
  const exploreLink = `/events/${event.id}`;

  return (
    <li className={styles.item}>
      <Image src={event.image} height={500} width={500} alt={event.title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{event.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address> {formattedAddress} </address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button onClick={undefined} link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
