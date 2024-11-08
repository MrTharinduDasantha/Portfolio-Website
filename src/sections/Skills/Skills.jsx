import styles from "./SkillsStyles.module.css"
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from "../../common/SkillList"
import { useTheme } from '../../common/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill={"HTML"} />
            <SkillList src={checkMarkIcon} skill={"CSS"} />
            <SkillList src={checkMarkIcon} skill={"JavaScript"} />
            <SkillList src={checkMarkIcon} skill={"Java"} />
            <SkillList src={checkMarkIcon} skill={"Python"} />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill={"React JS"} />
            <SkillList src={checkMarkIcon} skill={"Tailwind CSS"} />
            <SkillList src={checkMarkIcon} skill={"Node JS"} />
            <SkillList src={checkMarkIcon} skill={"Express JS"} />
            <SkillList src={checkMarkIcon} skill={"MongoDB"} />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill={"Docker"} />
            <SkillList src={checkMarkIcon} skill={"Kubernetes"} />
            <SkillList src={checkMarkIcon} skill={"Terraform"} />
            <SkillList src={checkMarkIcon} skill={"Jenkins"} />
            <SkillList src={checkMarkIcon} skill={"Selenium"} />
            <SkillList src={checkMarkIcon} skill={"AWS"} />
            <SkillList src={checkMarkIcon} skill={"Git"} />
        </div>
    </section>
  )
}

export default Skills