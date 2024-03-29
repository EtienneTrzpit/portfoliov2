import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function SavoirFaire(props) {
  return (
    <section
      ref={(ref) => (props.cardRefs.current[1] = ref)}
      className="cards knowledge"
      id="savoir-faire"
    >
      <div className="cards-header">
        <FontAwesomeIcon icon={faBrain} size="2xl" />
        <h2 className="cards-header-title">Savoir-Faire</h2>
      </div>
      <div className="cards-main">
        <article className="cards-box box-knowledge">
          <h3 className="cards-box-title titles-knowledge">Front-End</h3>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faHtml5}
                size="xl"
                className="knowledge-icons"
              />
              HTML5 Sémantique
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="xl"
                className="knowledge-icons"
              />
              CSS3 Animation
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSquareJs}
                size="xl"
                className="knowledge-icons"
              />
              Javascript
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSass}
                size="lg"
                className="knowledge-icons"
              />
              Sass
            </li>
          </ul>
        </article>
        <article className="cards-box box-knowledge">
          <h3 className="cards-box-title titles-knowledge">Déploiement</h3>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faGitAlt}
                size="xl"
                className="knowledge-icons"
              />
              Git
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="knowledge-icons"
              />{" "}
              GitHub
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCode}
                size="lg"
                className="knowledge-icons"
              />{" "}
              VS Code
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                size="lg"
                className="knowledge-icons"
              />{" "}
              Netlify
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
