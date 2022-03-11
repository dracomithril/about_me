import style from "./style.module.css";
import { Section } from "../Section";

/**
 *
 * @typedef { import("../../../types").Hobby } Hobby
 * @typedef { import("../../../types").User } User
 */

/**
 * @param {Hobby} props
 * @returns
 */
const Hobby = (props) => {
  return (
    <div key={Math.random()} className={[style.hobby].join(" ")}>
      <h3>{props.title}</h3>
      <ul>
        {props.details.map((detail) => {
          return <li key={Math.random()}>{detail}</li>;
        })}
      </ul>
    </div>
  );
};

/**
 *
 * @param {{ hobbies: User['hobbies']}} props
 * @returns
 */
export const Hobbies = ({ hobbies }) => {
  return (
    <Section title="Hobby" id="hobby">
      <div className={style.hobbies}>
        {hobbies.map(({ title, details }) => {
          return <Hobby key={Math.random()} title={title} details={details} />;
        })}
      </div>
    </Section>
  );
};
