import { LinkIcon } from "../icons";
import style from "./style.css";


export const Section = ({ id, title, children, className }) => {
  return (
    <section className={`${style.section} ${className}`}>
      <header>
        <h2>
          <a name={id} id={id} href={`#${id}`}>
            <LinkIcon />
          </a>
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
};
