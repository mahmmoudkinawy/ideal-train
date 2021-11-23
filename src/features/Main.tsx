import { Fragment } from "react";

export default function Main() {
  const profiles = [
    { cName: "fas fa-ruler-horizontal", name: "Designer" },
    { cName: "fas fa-city", name: "London, UK" },
    { cName: "fas fa-envelope", name: "ex@mail.com" },
    { cName: "fas fa-phone", name: "1224435534" },
  ];

  const languages = [
    { cName: "l-p-bar", lang: "English" },
    { cName: "l-p-bar", lang: "Spanish" },
    { cName: "l-p-bar", lang: "German" },
  ];

  const jobs = [
    {
      name: "Web Developer / something.com",
      date: "Mar 2012 - Dec 2014",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium error, at quibusdam ullam dolor, aliquam fuga modifugiat dolores.",
    },
    {
      name: "Graphic Designer / designsomething.com",
      date: "Jan 2010 - Mar 2012",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium error, at quibusdam ullam dolor, aliquam fuga modifugiat dolores.",
    },
  ];
  return (
    <main>
      <aside>
        <div className="profil">
          <img
            src="https://avatars.githubusercontent.com/u/57391128?v=4"
            alt=""
          />
          <h1>Jane Doe</h1>
        </div>
        <ul className="profileul">
          {profiles.map((profile, k) => (
            <li key={k}>
              <i className={profile.cName}></i> {profile.name}
            </li>
          ))}
        </ul>
        <hr />
        <div className="skills">
          <h3>
            <i className="fas fa-star"></i> Skills
          </h3>
          <div>
            <h4>Adobe Photoshop</h4>
            <div className="s-progress">
              <div className="s-p-bar1">90%</div>
            </div>
          </div>
          <div>
            <h4>Photoshop</h4>
            <div className="s-progress">
              <div className="s-p-bar2">82%</div>
            </div>
          </div>
          <div>
            <h4>Illustrator</h4>
            <div className="s-progress">
              <div className="s-p-bar3">75%</div>
            </div>
          </div>
          <div>
            <h4>Media</h4>
            <div className="s-progress">
              <div className="s-p-bar4">50%</div>
            </div>
          </div>
        </div>
        <div className="languages">
          <h3>
            <i className="fas fa-language"></i> Languages
          </h3>
          <div>
            {languages.map((lang, k) => (
              <Fragment key={k}>
                <h4>{lang.lang}</h4>
                <div className="l-progress">
                  <div className={lang.cName + k}></div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </aside>
      <div className="column">
        <section>
          <h2>
            <i className="fas fa-building"></i> Work Experience
          </h2>
          <div className="item">
            <h5>Front End Developer / w3schools.com</h5>
            <div className="date">
              <i className="fas fa-calendar-alt"></i> Jan 2015 -{" "}
              <span>Current</span>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium error, at quibusdam ullam dolor, aliquam fuga modi
              fugiat dolores.
            </p>
          </div>
          <hr />
          {jobs.map((job, k) => (
            <div className="item" key={k}>
              <h5>{job.name}</h5>
              <div className="date">
                <i className="fas fa-calendar-alt"></i> {job.date}
              </div>
              <p>{job.text}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>
            <i className="fas fa-university"></i> Education
          </h2>
          <div className="item">
            <h5>W3schools.com</h5>
            <div className="date">
              <i className="fas fa-infinity"></i> Forever
            </div>
            <p> Web Development All I need to know in one place </p>
          </div>
          <hr />
          <div className="item">
            <h5>London Business School</h5>
            <div className="date">
              <i className="fas fa-calendar-alt"></i> 2013 - 2015
            </div>
            <p> Master Degree </p>
          </div>
          <hr />
          <div className="item">
            <h5>School of Coding</h5>
            <div className="date">
              <i className="fas fa-calendar-alt"></i> 2010 - 2013
            </div>
            <p> Bachelor Degree </p>
          </div>
        </section>
      </div>
    </main>
  );
}
