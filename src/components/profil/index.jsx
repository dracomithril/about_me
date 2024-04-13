import { h } from "preact";
import * as Icon from "preact-feather";
import style from "./style.module.css";
import { formatDistanceToNow } from "date-fns";
import { Employment } from "../work/Employment";
import { School } from "../education/School";
import { Section } from "../Section";
import { Hobbies } from "../hobbies";

/**
 * @typedef { import("../../../types").Project } Project
 * @typedef { import("../../../types").User } User
 */

/**
 * @param {Project} param0
 * @returns
 */
const Project = ({ title, link, description }) => (
  <div>
    <h3>{title}</h3>
    <a href={link}>{link}</a>
    <p>
      <span>{description}</span>
    </p>
  </div>
);

/**
 *
 * @param {Project} project
 * @returns {import("preact").JSX.Element}
 */
const mapProjects = ({ title, link, description }) => {
  return (
    <li key={Math.random()} className={style.list}>
      <Project title={title} link={link} description={description} />
    </li>
  );
};
/**
 *
 * @param {{skills: string[], title: string, id: string}} param0
 * @returns
 */
const Skills = ({ skills, title, id }) => {
  return (
    <Section title={title} id={id}>
      <span>{skills.join(", ")}</span>
    </Section>
  );
};

function Links(props) {
  return (
    <div className={style.links}>
      {props.links.map((link) => {
        const LinkIcon = Icon[link.icon] || null;
        return (
          <a
            key={Math.random()}
            href={link.url}
            title={link.title}
            rel="noreferrer"
            target="_blank"
            className={style.link}
          >
            <LinkIcon />
            <span>{link.url}</span>
          </a>
        );
      })}
    </div>
  );
}

const Experience = (props) => {
  return (
    <Section title="Experience" id="experience" start={props.user.start}>
      <ul className={style.connected_list}>
        {props.user.experience.map((exp) => (
          <li key={Math.random()} className={style.list}>
            <Employment data={exp} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

const Education = (props) => {
  return (
    <Section title="Education" id="education">
      <ul>
        {props.education.map((edu) => (
          <li key={Math.random()} className={style.list}>
            <School data={edu} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

const UserInfo = (props) => {
  return (
    <div className={style.user_info}>
      <h1>{`${props.user.name} ${props.user.surname}`}</h1>
      <Links links={props.user.links} />
      <div className={style.about_me}>
        I have been a manager for{" "}
        <strong>{formatDistanceToNow(new Date(props.user.lead))}</strong> and
        developer for{" "}
        <strong>{formatDistanceToNow(new Date(props.user.start))}</strong>. I
        enjoy working with people, grooming their potential, providing them with
        good space to work and collaborate. Not only that, but I also enjoy
        programming. Resolving issues during development is a rewarding
        experience. I believe that there is always a higher hill to climb up to.
        Either regarding knowledge, skills or being a better person.
      </div>
      <p className={style.quote}>{props.user.quote}</p>
      <div className={style.avatar}>
        <img src={props.user.avatar} />
      </div>
    </div>
  );
};

function UserDetails(props) {
  return (
    <div className={style.user_details}>
      <Skills title="Soft skills" id="soft" skills={props.user.softSkills} />
      <Skills
        title="Hard skills and technologies"
        id="hard"
        skills={props.user.hardSkills}
      />
      <Experience user={props.user} />
      <Education education={props.user.education} />
      <Hobbies hobbies={props.user.hobbies} />
      <Section title="Projects" id="projects">
        <ul>{props.user.projects.map(mapProjects)}</ul>
      </Section>
    </div>
  );
}

/**
 *
 * @param {{ user: User}} param0
 * @returns
 */
const Profile = ({ user }) => {
  const about_me = user.about_me.split("$time");
  return (
    <div class={style.profile}>
      <UserInfo about_me={about_me} user={user} />
      <UserDetails user={user} />
    </div>
  );
};

export default Profile;
