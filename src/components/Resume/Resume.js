import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import {Skills} from "./Skills/Skills";
import {LinkButton} from "../../common/components/LinkButton/LinkButton";
import s from "./Resume.module.css";
import {ExperienceBox} from "./ExperienceBox/ExperienceBox";

export const Resume = () => {
  return (
    <div id={"resume"}>
      <div className={"container"}>
        <SectionTitle title={"Education & Experience"}/>
        <div className={s.resumeContent}>
          <div className={s.resumeItem}>
            <h3>Education</h3>
            <div>
              <ExperienceBox
                startYear={2021}
                finishYear={2022}
                title={"IT-Incubator"}
                description={"Front-end developer React/Redux/JS/TS"}
              />
              <ExperienceBox
                startYear={2005}
                finishYear={2010}
                title={"Belarusian State University"}
                description={"Manager-economist"}
              />
            </div>
          </div>
          <div className={s.resumeItem}>
            <h3>Experience</h3>
            <div>
              <ExperienceBox
                startYear={2021}
                finishYear={"Present"}
                title={"Front-end developer, Part-time projects"}
                description={"Study Cards (Start-up project), Social Network (Self-education project), To-Do List (Educational project)"}
              />
              <ExperienceBox
                startYear={2010}
                finishYear={"Present"}
                title={"Marketing specialist"}
                description={""}
              />
            </div>
          </div>
        </div>
        <Skills/>
        <div className={s.resumeFooter}>
          <LinkButton>Download CV</LinkButton>
        </div>
      </div>
    </div>
  );
};
