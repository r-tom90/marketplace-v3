import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Button = ({ href, children }: Props) => {
  return (
    <div className={styles.heroCtaContainer}>
      <Link className={styles.heroCta} href={href}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
