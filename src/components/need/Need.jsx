import { useState } from "react";
import styles from "./Need.module.css";

const issues = [
  {
    id: 1,
    stat: "84%",
    title: "Female Genital Mutilation",
    summary: "FGM remains widespread in Kuria, affecting an estimated 84% of girls and women.",
    details: "While Kenya's national prevalence of Female Genital Mutilation has fallen to approximately 15% according to the 2022 Kenya Demographic and Health Survey (KDHS), the practice remains alarmingly high in Kuria, where local health reporting indicates an estimated 84% of women and girls have undergone the practice. Often carried out during school holidays, the practice exposes girls to lifelong physical and psychological harm while increasing their vulnerability to child marriage, school dropout, and early pregnancy. For girls living in border communities affected by recurring conflict, these risks are further intensified by displacement, insecurity, and disrupted access to protection services."
  },
  {
    id: 2,
    stat: "17.1",
    title: "Early & Forced Marriage",
    summary: "Migori County records one of Kenya's lowest median ages at first marriage pushing many girls into adulthood before they can pursue their potential.",
    details: "Data from the Kenya National Bureau of Statistics confirms that Migori County records one of the lowest median ages at first marriage in Kenya at 17.1 years. In Kuria East, early and forced marriage remains closely linked to harmful traditional practices, poverty, and gender inequality. Once a girl undergoes the cut, she is often considered ready for marriage regardless of her age, a practice that continues to deny girls their right to education, personal development, and economic opportunity. Recurring conflict further increases household vulnerability, placing more girls at risk of early marriage as families struggle with insecurity and economic hardship."
  },
  {
    id: 3,
    stat: "22%",
    title: "Early Childhood & Teenage Pregnancy",
    summary: "An estimated 22% of girls aged 15–19 in Migori County have begun childbearing putting their education and future at risk..",
    details: "Kuria East continues to face a high burden of adolescent pregnancy, driven by early marriage, limited access to reproductive health information, and poverty. According to the 2022 KDHS, 22% of girls aged 15–19 in Migori County have begun childbearing, a rate significantly above the national average, placing thousands of girls at risk of dropping out of school and remaining trapped in cycles of poverty. The instability caused by recurring conflict further limits access to education and essential health services, increasing girls' vulnerability."
  },
  {
    id: 4,
    stat: "23–35%",
    title: "Barriers to Girls' Education",
    summary: "Only 23%–35% of girls in Kuria transition to secondary school, limiting their future opportunities..",
    details: "Many girls in Kuria East never complete their education due to the combined effects of harmful cultural practices, child marriage, and economic hardship. With local Ministry of Education transition data indicating that only 23% to 35% of girls progress to secondary education in this region, thousands are denied the knowledge, skills, and opportunities needed to reach their full potential. Periodic conflict and displacement further interrupt learning, forcing many girls out of school for extended periods."
  },
  {
    id: 5,
    stat: "GBV",
    title: "Gender-Based Violence",
    summary: "Poverty and economic dependence continue to heighten the risk of violence against women and girls.",
    details: "Research conducted in Kuria East highlights a strong relationship between economic dependency and exposure to abuse. Poverty, unequal power relations and limited access to resources leave many women vulnerable to physical, emotional, sexual and economic abuse, while barriers to reporting and accessing support services remain significant. These risks are heightened during periods of conflict, when displacement, insecurity, and weakened protection systems expose women and girls to even greater harm."
  },
  {
    id: 6,
    stat: "<12%",
    title: "Conflict, Widowhood & Economic Exclusion",
    summary: "Recurring conflict along the Gwitembe-Ang'ata Barikoi border fuels displacement, widens economic exclusion, and deepens poverty.",
    details: "The ongoing border conflict has created a humanitarian crisis, leaving displaced young women in vulnerable conditions. Widows are disproportionately affected, losing breadwinners and primary income. With farms abandoned, these women face extreme dependency. This is compounded by land inequality; with women holding less than 12% of individual titles per Kenya Land Alliance data, they lack the assets to rebuild. International Land Coalition research confirms insecure tenure drives poverty, making urgent intervention essential."
  },
  {
    id: 7,
    stat: "+30%",
    title: "Climate Change & Food Insecurity",
    summary: "Over 30% increase in climate-driven agricultural losses is deepening food insecurity among women-led households, who face greater pressure to secure their families' needs.",
    details: "In Kuria East, erratic rainfall and drought have devastated food security. Women-led households bear the extreme burden of securing resources amidst dwindling resources. With regional assessments from the Lake Region Economic Bloc showing climate-driven agricultural losses have surged by over 30%, these households remain the most vulnerable to food poverty, creating a critical gap in climate resilience that demands urgent intervention. In conflict-affected communities, displacement and loss of livelihoods further reduce families' ability to recover from climate shocks, compounding food insecurity."
  }
];

export default function Need() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section className={styles.need}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.tag}>THE NEED</span>
          <h1>Breaking barriers.<br />Expanding opportunities.</h1>
          <p>Building a stronger Kuria community through the power of girls and women.</p>
        </div>
      </section>

      <section className={styles.stats}>
        {/* <div className="container">
          <div className={styles.statsGrid}>
            <div><h2>84%</h2><p>FGM</p></div>
            <div><h2>17.1</h2><p>First Marriage</p></div>
            <div><h2>22%</h2><p>Teen Pregnancy</p></div>
            <div><h2>23–35%</h2><p>Secondary School</p></div>
            <div><h2>&lt;12%</h2><p>Land Ownership</p></div>
            <div><h2>30%</h2><p>Climate Losses</p></div>
          </div>
        </div> */}
      </section>

      <section className={styles.cards}>
        <div className="container">
          <div className={styles.grid}>
            {issues.map((item) => (
              <div key={item.id} className={`${styles.card} ${item.id === 7 ? styles.full : ""}`}>
                <div className={styles.badge}>{item.stat}</div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>

                <div className={`${styles.details} ${openCard === item.id ? styles.show : ""}`}>
                  <p>{item.details}</p>
                </div>

                <button onClick={() => toggleCard(item.id)} className={styles.button}>
                  {openCard === item.id ? "Show Less" : "Read More"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Together We Can Change This Story</h2>
          <p>Every girl deserves the opportunity to learn, lead and thrive. Together we can build safer communities, expand opportunities and create lasting change for generations to come.</p>
          <a href="/donate" className={styles.ctaButton}>Support Our Work</a>
        </div>
      </section>
    </section>
  );
}