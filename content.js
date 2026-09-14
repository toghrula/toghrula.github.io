/* =====================================================================
   TOGHRUL AGHBABALI — WEBSITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to update your website.
   Every section of the page is generated from the data below.

   Rules of thumb:
   • Text goes inside quotes: "like this".
   • Items in a list are separated by commas. The last item may also
     have a trailing comma — that is fine.
   • To add a new paper, copy one { ... } block inside `papers` and
     edit it. Newest papers go at the top.
   • To remove something, delete its whole { ... } block (or line).
   • Leave a field empty ("" or []) if it does not apply.
   • Open index.html in your browser to check the result before
     uploading.
   ===================================================================== */

const SITE = {

  /* ---------- Identity ---------- */
  name: "Toghrul Aghbabali",
  title: "PhD Student in Finance",
  institution: "School of Management, University at Buffalo (SUNY)",
  location: "Buffalo, NY",
  email: "toghrula@buffalo.edu",
  photo: "photo.jpg",            // put your headshot at this path; leave "" to hide
  cvFile: "Toghrul_Aghbabali_CV.pdf",   // your CV PDF (in the same folder as index.html); "" hides the button

  // Profile links. Add or remove lines freely. Icons: "ssrn", "scholar",
  // "linkedin", "github", "twitter", "orcid", "email", "link".
  links: [
    { label: "SSRN",           url: "",                                                          icon: "ssrn" },
    { label: "Google Scholar", url: "",                                                          icon: "scholar" },
    { label: "LinkedIn",       url: "",                                                          icon: "linkedin" },
  ],

  /* ---------- Home / About ---------- */
  tagline: "Market microstructure · Generative AI in finance · Retail trading",

  about: [
    "I am a third-year PhD student in Finance at the School of Management, University at Buffalo (SUNY). My research sits at the intersection of market microstructure and the economics of artificial intelligence: how large language models and generative AI reshape information processing, trading, and price formation in financial markets, and how firms and investors are affected by their adoption.",
    "Before Buffalo, I earned an M.S. in Finance from the George Washington University, where I received the Charles and Florence Diehl Finance Student of the Year Prize, and dual bachelor's degrees from SUNY New Paltz and Istanbul Technical University, graduating first in my class at both. Outside research, I mentor high-school students on AI and financial literacy and work with Azerbaijan's National Artificial Intelligence Center on building research capacity in my home country.",
  ],

  interests: [
    "Market microstructure",
    "Generative AI and large language models in finance",
    "Retail trading and investor behavior",
    "Information processing and price discovery",
    "Empirical asset pricing",
  ],

  /* ---------- Research ---------- */
  // status options: "Working Paper", "Under Review", "Revise & Resubmit",
  //                 "Forthcoming", "Published". Add `journal` for published work.
  papers: [
    {
      title: "How Sure Is the Machine? Extracting Economically Meaningful Signals from LLM Response Confidence",
      coauthors: "with Kee H. Chung",
      date: "July 2026",
      status: "Working Paper",
      ssrn: "",
      abstract: "",
      notes: [
        "Scheduled: 3rd AI in Finance Conference, Montreal, Canada (October 2026)",
      ],
    },
    {
      title: "Who Benefits from Generative AI? Firm Performance and Valuation after ChatGPT",
      coauthors: "with Kee H. Chung",
      date: "May 2026",
      status: "Working Paper",
      ssrn: "",
      abstract: "",
      notes: [],
    },
    {
      title: "Augmentation Versus Substitution: Asymmetric Effects of Generative AI on Firm Performance and Share Prices",
      coauthors: "with Kee H. Chung",
      date: "March 2026",
      status: "Working Paper",
      ssrn: "https://ssrn.com/abstract=6300040",
      abstract: "",
      notes: [
        "Scheduled: 3rd Conference on AI in Finance, TUD Dresden University of Technology (September 2026)",
        "Presented by co-author at Yonsei University and Sungkyunkwan University (SKKU), June 2026",
      ],
    },
    {
      title: "When AI Reads the 10-Ks: The Effects of ChatGPT on Trading and Price Dynamics",
      coauthors: "with Kee H. Chung and Sahn-Wook Huh",
      date: "December 2025",
      status: "Working Paper",
      ssrn: "https://ssrn.com/abstract=5985874",
      abstract: "",
      award: "Outstanding Paper Award for Overseas Scholars — Joint Conference of the Allied Korean Finance Associations (AKFA), Seoul, May 2026",
      notes: [
        "Scheduled: FMA Asia & Pacific Conference, Auckland, New Zealand (December 2026)",
        "Featured in <a href=\"https://www.zertifikateberater.de/magazin/26-01\">Der Zertifikateberater</a>",
      ],
    },
    {
      title: "How to: Dynamic Reports and Reproducible Research",
      coauthors: "with Wan Soo Choi, Taihun Im, Dominik Rösch, and Prince Roy",
      date: "July 2025",
      status: "Working Paper",
      ssrn: "https://ssrn.com/abstract=5341980",
      abstract: "",
      notes: [],
    },
  ],

  /* ---------- Presentations & conference service ---------- */
  // Free-form list; newest first.
  presentations: [
    { year: "2026", text: "FMA Asia & Pacific Conference, Auckland, New Zealand (scheduled, December)" },
    { year: "2026", text: "3rd AI in Finance Conference, Montreal, Canada (scheduled, October)" },
    { year: "2026", text: "3rd Conference on AI in Finance, TUD Dresden University of Technology, Germany (scheduled, September)" },
    { year: "2026", text: "Joint Conference of the Allied Korean Finance Associations (AKFA), Seoul, Korea (May)" },
    { year: "2025", text: "Discussant, Financial Management Association (FMA) Annual Meeting, Vancouver, Canada" },
    { year: "2025", text: "Market Microstructure Summer School, University of Edinburgh (June)" },
  ],

  /* ---------- Writing & media ---------- */
  media: [
    {
      text: "Can Generative AI Disrupt Post-Earnings Announcement Drift (PEAD)?",
      outlet: "CFA Institute — Enterprising Investor",
      url: "https://blogs.cfainstitute.org/investor/2025/04/22/can-generative-ai-disrupt-post-earnings-announcement-drift-pead/",
    },
    {
      text: "Research featured in Der Zertifikateberater (issue 26-01)",
      outlet: "Der Zertifikateberater",
      url: "https://www.zertifikateberater.de/magazin/26-01",
    },
  ],

  /* ---------- Teaching ---------- */
  teaching: [
    {
      institution: "University at Buffalo, School of Management",
      role: "Graduate Teaching Assistant, Department of Finance",
      period: "August 2024 – present",
      courses: [
        "MGF 405",
        "MGF 403",
        "MGF 633 (MBA)",
      ],
    },
    {
      institution: "The George Washington University, School of Business",
      role: "Graduate Teaching Assistant, Department of Finance",
      period: "January 2023 – May 2024",
      courses: [
        "Intermediate Finance",
        "Financial Management",
        "Advanced Financial Management",
        "Corporate Finance",
      ],
    },
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "Ph.D. in Finance",
      school: "University at Buffalo (SUNY), School of Management",
      place: "Buffalo, NY",
      year: "Expected 2029",
      notes: [
        "Graduate Research and Teaching Assistant; award recipient",
        "Research focus: market microstructure, machine learning and AI in finance, retail trading",
      ],
    },
    {
      degree: "M.S. in Finance",
      school: "The George Washington University, School of Business",
      place: "Washington, DC",
      year: "2024",
      notes: [
        "GPA 4.00; merit-based scholarship recipient",
        "Charles and Florence Diehl “Finance Student of the Year” Prize",
        "Beta Gamma Sigma",
      ],
    },
    {
      degree: "B.S. in General Business",
      school: "State University of New York at New Paltz, School of Business",
      place: "New Paltz, NY",
      year: "2022",
      notes: [
        "First in Class of 2022; GPA 3.96, summa cum laude",
        "Full merit-based scholarship recipient",
      ],
    },
    {
      degree: "B.S. in Management",
      school: "Istanbul Technical University, School of Business",
      place: "Istanbul, Turkey",
      year: "2022",
      notes: [
        "First in Class of 2022; GPA 3.68",
        "Dual-degree program with SUNY New Paltz",
      ],
    },
  ],

  /* ---------- Honors & awards ---------- */
  awards: [
    { year: "2026", text: "Outstanding Paper Award for Overseas Scholars, Allied Korean Finance Associations (AKFA) Joint Conference, Seoul" },
    { year: "2026", text: "Mentor, “AI and Financial Literacy” high-school project — 3rd place nationally; Microsoft Special Award, International Science Education Fair, Arizona" },
    { year: "2024", text: "Charles and Florence Diehl “Finance Student of the Year” Prize, George Washington University" },
    { year: "2024", text: "Beta Gamma Sigma, GWU chapter" },
    { year: "2022", text: "First in Class, SUNY New Paltz (summa cum laude) and Istanbul Technical University" },
    { year: "2018–2022", text: "Full merit-based scholarship, SUNY New Paltz" },
  ],

  /* ---------- Professional experience (non-academic) ---------- */
  experience: [
    {
      role: "Research Assistant, Department of Finance",
      org: "The George Washington University, School of Business",
      place: "Washington, DC",
      period: "May 2023 – May 2024",
      text: "Empirical research on portfolio selection using Python.",
    },
    {
      role: "Investment Evaluations Intern",
      org: "Entrepreneurship Development and Innovation Fund",
      place: "Baku, Azerbaijan",
      period: "January – April 2021",
      text: "Evaluated more than 20 business plans in support of the Fund's investment decisions.",
    },
    {
      role: "Risk Department Intern",
      org: "Bayegan Ltd",
      place: "Istanbul, Turkey",
      period: "August – December 2020",
      text: "Supported the risk manager with oil and gas futures hedging and industry research.",
    },
  ],

  /* ---------- Memberships, certifications, skills, service ---------- */
  memberships: [
    "American Finance Association (2024– )",
    "Financial Management Association (2024– )",
    "Western Finance Association (2025– )",
  ],

  certifications: [
    "CFA Level I (2024)",
    "Securities Industry Essentials (SIE), FINRA (2024)",
    "Bloomberg Market Concepts (2024)",
  ],

  skills: [
    "Python", "R", "SAS", "MATLAB", "WRDS / TAQ data",
  ],

  service: [
    "Discussant, FMA Annual Meeting 2025",
    "Volunteer, IMF Annual and Spring Meetings (2022, 2023)",
    "Executive Vice President, International Business Organization, GWU",
    "Vice President, Azerbaijani Student Association, GWU",
    "Senior Student Analyst, Hawk Investment Fund, SUNY New Paltz",
    "Volunteer teacher, Junior Achievement, Northeastern New York",
  ],

  /* ---------- Outside work ---------- */
  // Short, human touches. Shown under "Additional". Leave [] to hide.
  hobbies: [
    "Huge soccer fan",
    "Skiing",
  ],

  /* ---------- Footer ---------- */
  footerNote: "",   // optional one-liner, e.g. "Last updated September 2026"
};
