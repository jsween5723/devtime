import styles from "./Row.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Row({ children }: Props) {
  return <section className={styles.row}>{children}</section>;
}
