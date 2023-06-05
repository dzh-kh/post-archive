import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import github from "../../assets/sprites/github.svg";
import telegram from "../../assets/sprites/telegram.svg";
import "./aboutMe.css";
type Props = {};

const AboutMe = (props: Props) => {
  const experience = aboutMeData.expirience.map((job) => {
    return (
      <div>
        <p className="job-post">
          {job.company} - {job.jobTitle}:
        </p>
        <ul>
          {job.responsibilities.map((res) => (
            <li>{res}</li>
          ))}
        </ul>
      </div>
    );
  });
  const skills = aboutMeData.skills.map((skill) => {
    return <li className="slill-item">{skill}</li>;
  });
  return (
    <div className="about__wrapper">
      <Row className="align-items-center flex-column mb-5 gy-2">
        <Col>
          <h2 className="about__title">{aboutMeData.name}</h2>
        </Col>
        <Col>
          <h4 className="about__subtitle">{aboutMeData.jobTitle}</h4>
          <div className="mail">
            <span>{aboutMeData.email}</span>
          </div>
        </Col>
        <Col>
          <div className="contacts">
            <div className="contact_item telegram me-2">
              <a href={aboutMeData.links.telegram} target="_blank">
                <span className="me-1">telegram</span>
                <Image width={20} src={telegram} roundedCircle />
              </a>
            </div>
            <div className="contact_item github">
              <a href={aboutMeData.links.github} target="_blank">
                <span className="me-1">github</span>
                <Image width={20} src={github} roundedCircle />
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={2}>
              <h5 className="section_name">Опыт</h5>
            </Col>
            <Col lg={10}>{experience}</Col>
          </Row>
        </Col>
        <Col lg={12}>
          <Row>
            <Col lg={2}>
              <h5 className="section_name">Навыки</h5>
            </Col>
            <Col lg={10}>
              <div>
                <ul className="skill">{skills}</ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;

const aboutMeData = {
  name: "Джукалаева Хава",
  jobTitle: "Фронтенд-разработчик",
  email: "dzukalaevahava@gmail.com",
  links: {
    github: "https://github.com/dzh-kh",
    telegram: "https://t.me/dzh_kh1",
  },
  skills: [
    "HTML",
    "CSS",
    "Sass",
    "Javascript",
    "Typescript",
    "React",
    "Express",
    "Redux",
    "Git",
    "Bootstrap",
    "Material UI",
    "REST",
    "RESTful API",
    "Ajax",
  ],
  expirience: [
    {
      company: "Omra",
      jobTitle: "Фронтенд-разработчик",
      responsibilities: [
        "Разработка пользовательского интерфейса для различных веб-приложений с использованием HTML, CSS и JavaScript",
        "Работа в команде с другими разработчиками для оптимизации функциональности сайта и повышения эффективности",
        "Работа в тесном сотрудничестве с командами бэкенда для интеграции API и обеспечения безупречного функционирования интерфейса.",
        "Использование фреймворков, таких как React и Vue.js, для создания динамичных веб-приложений.",
        "Тестирование и отладка веб-приложений для обеспечения максимальной производительности и отсутствия ошибок.",
        "Работа с Git для эффективного управления версиями и совместной работы.",
        "Участие в планировании проектов, включая оценку времени, ресурсов и сроков выполнения задач.",
        "Постоянное обучение и адаптация к новым технологиям и лучшим практикам в сфере веб-разработки.",
      ],
    },
  ],
};
