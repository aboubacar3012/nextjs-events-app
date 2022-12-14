import styles from "./error-alert.module.css";
interface Props {
  children: JSX.Element;
}
function ErrorAlert({ children }: Props) {
  return <div className={styles.alert}>{children}</div>;
}

export default ErrorAlert;
