import { h } from "preact";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <h1>curriculum vitae</h1>
    <nav>
      <a activeClassName={style.active} href="#experience">
        Experience
      </a>
      <a activeClassName={style.active} href="#education">
        Education
      </a>
      <a activeClassName={style.active} href="#hobby">
        Hobby
      </a>
    </nav>
  </header>
);

export default Header;
