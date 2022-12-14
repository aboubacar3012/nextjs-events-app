import Button from "../ui/button";
import styles from "./results-title.module.css";
interface Props {
  date: Date;
}
function ResultsTitle({ date }: Props) {
  const humanReadableDate = new Date(date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate.toUpperCase()}</h1>
      <Button link="/events" onClick={undefined}>
        Show all events
      </Button>
    </section>
  );
}

export default ResultsTitle;
