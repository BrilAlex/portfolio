import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import {Skills} from "./Skills/Skills";
import {LinkButton} from "../../common/components/LinkButton/LinkButton";
import s from "./Resume.module.css";
import {ExperienceBox} from "./ExperienceBox/ExperienceBox";
import cvFileLink from "../../assets/files/CV_Alexei_Brilevski.pdf";

export const Resume = () => {
  return (
    <section id={"resume"}>
      <div className={"container"}>
        <SectionTitle title={"Resume"} subtitle={"Education & Experience"}/>
        <div className={s.resumeContent}>
          <div className={s.resumeItem}>
            <h3>My Education</h3>
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
            <h3>My Experience</h3>
            <div>
              <ExperienceBox
                startYear={2021}
                finishYear={"Present"}
                title={"Front-end developer"}
                description={"Part-time"}
              />
              <ExperienceBox
                startYear={2010}
                finishYear={2021}
                title={"Marketing specialist"}
                description={""}
              />
            </div>
          </div>
        </div>
        <Skills/>
        <div className={s.resumeFooter}>
          <LinkButton url={cvFileLink} target={"_blank"}>Download CV</LinkButton>
        </div>
      </div>
    </section>
  );
};
