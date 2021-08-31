import { h } from "preact";
import * as Icon from "preact-feather";

import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <h1>
      <span>curriculum</span>
      <span>vitae</span>
    </h1>
    <nav>
      <a activeClassName={style.active} href="#experience">
        <Icon.Briefcase />
        <span>Experience</span>
      </a>
      <a activeClassName={style.active} href="#education">
        <Icon.BookOpen />
        <span>Education</span>
      </a>
      <a activeClassName={style.active} href="#hobby">
        <Icon.Headphones />
        <span>Hobby</span>
      </a>
    </nav>
  </header>
);

export default Header;
