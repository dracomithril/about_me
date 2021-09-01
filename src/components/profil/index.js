import { h } from "preact";
import * as Icon from "preact-feather";
import style from "./style.css";
import { formatDistanceToNow } from "date-fns";
import { Employment } from "../work/Employment";
import { Education } from "../education/Education";
import { Section } from "./Section";

const Profile = ({ user }) => {
  const about_me = user.about_me.split("$time");
  return (
    <div class={style.profile}>
      <div className={style.user_info}>
        <h1>{`${user.name} ${user.surname}`}</h1>
        <div className={style.links}>
          {user.links.map((link) => {
            const LinkIcon = Icon[link.icon] || null;
            return (
              <a key={Math.random()} href={link.url} title={link.title} rel="noreferrer" target="_blank">
                <LinkIcon />
              </a>
            );
          })}
        </div>
        <div className={style.about_me}>
          <span>{about_me[0]}</span>
          <strong>{formatDistanceToNow(new Date(user.start))}</strong>
          <span>{about_me[1]}</span>
        </div>
        <p className={style.quote}>{user.quote}</p>
        <div className={style.avatar}>
          <img src={user.avatar} />
        </div>
      </div>

      <div>
        <section>
          <Section title="Soft skills" id="soft">
            <span>{user.softSkills}</span>
          </Section>
          <Section title="Hard skills and technologies" id="hard">
            <span>{user.hardSkills}</span>
          </Section>
          <Section title="Experience" id="experience" start={user.start}>
            <ul className={style.connected_list}>
              {user.experience.map((exp) => (
                <li key={Math.random()} className={style.list}>
                  <Employment data={exp} />
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Education" id="education">
            <ul>
              {user.education.map((edu) => (
                <li key={Math.random()} className={style.list}>
                  <Education data={edu} />
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Hobby" id="hobby">
            <ul>
              {user.hobby.map((hobby) => {
                return (
                  <li key={Math.random()} className={style.list}>
                    <div>
                      <h3>{hobby.title}</h3>
                      <ul>
                        {hobby.details.map((detail) => {
                          return <li key={Math.random()}>{detail}</li>;
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>
          <Section title="Projects" id="projects">
            <ul>
              {user.projects.map((project) => {
                return (
                  <li key={Math.random()} className={style.list}>
                    <div>
                      <h3>{project.title}</h3>
                      <a href={project.link}>{project.link}</a>
                      <p>
                        <span>{project.description}</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>
        </section>
      </div>
    </div>
  );
};

export default Profile;
