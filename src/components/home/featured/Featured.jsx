import "./Featured.css";
import {
  FaFemale,
  FaGraduationCap,
  FaHandsHelping,
  FaLeaf,
  FaPeopleCarry,
} from "react-icons/fa";

const programs = [
  {
    icon: <FaFemale />,
    title: "Mitigating Female Genital Mutilation and Gender-Based Violence",
    color: "red",
  },
  {
    icon: <FaGraduationCap />,
    title: "Championing Education Access for Girls and Young Women",
    color: "green",
  },
  {
    icon: <FaHandsHelping />,
    title: "Rebuilding Livelihoods for Young Widows of Conflict",
    color: "gold",
  },
  {
    icon: <FaLeaf />,
    title: "Building Capacity for Climate Change and Agriculture",
    color: "purple",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Building Partnerships for Community Change",
    color: "blue",
  },
];

export default function ProgramsSection() {
  return (
    <section className="programs-section">
      <div className="container">

        <div className="section-heading">

          <span>OUR PROGRAMS</span>

          <h2>
            Creating Sustainable Impact
            <br />
            {/* Community-Led Initiatives */}
          </h2>

          <p>
            Our work focuses on empowering vulnerable communities through
            education, protection, economic empowerment, climate resilience,
            and strategic partnerships that create lasting change.
          </p>

        </div>

        <div className="program-grid">

          {programs.map((program, index) => (
            <div
              key={index}
              className={`program-card ${program.color}`}
            >
              <div className="icon-box">
                {program.icon}
              </div>

              <h3>{program.title}</h3>

              {/* <a href="/">
                Learn More →
              </a> */}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}