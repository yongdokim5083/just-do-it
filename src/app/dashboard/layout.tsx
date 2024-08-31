import styles from './page.module.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.dashboard}>{children}</section>;
}
