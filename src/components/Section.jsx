import * as Icon from "preact-feather";
import style from "./components.module.css";

export const Section = ({ id, title, children, className }) => {
  return (
    <section className={`${style.section} ${className || ''}`}>
      <header>
        <h2>
          <a name={id} id={id} href={`#${id}`}>
            <Icon.Link />
          </a>
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
};
