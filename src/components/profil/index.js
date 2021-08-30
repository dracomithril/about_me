import { h } from "preact";
import style from "./style.css";
import { Employment } from "../work/Employment";
import { Education } from "../education/Education";
import { Section } from "./Section";

const Profile = ({ user }) => (
  <div class={style.profile}>
    <h1>{`${user.name} ${user.surname}`}</h1>
    <p>{user.quote}</p>
    <div>
      <section>
        <Section title="Soft skills" id="soft">
          <span>{user.softSkills}</span>
        </Section>
        <Section title="Hard skills and technologies" id="hard">
          <span>{user.hardSkills}</span>
        </Section>
        <Section title="Experience" id="experience">
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
              <li key={Math.random()} className={style.list} >
                <Education data={edu} />
              </li>
            ))}
          </ul>
        </Section>
      </section>
    </div>
  </div>
);

export default Profile;
