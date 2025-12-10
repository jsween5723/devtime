import styles from "./Column.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Column({ children }: Props) {
  return <section className={styles.column}>{children}</section>;
}
