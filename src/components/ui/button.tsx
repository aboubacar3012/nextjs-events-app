import Link from "next/link";
import styles from "./button.module.css";
interface Props {
  children: JSX.Element | JSX.Element[] | string;
  link: string | null;
  onClick: any;
}

const Button = ({ children, link, onClick }: Props) => {
  if (link) {
    return (
      <Link className={styles.btn} href={link}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={onClick}>
        <span> {children}</span>
      </button>
    );
  }
};

export default Button;
