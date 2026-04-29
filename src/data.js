const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Global AQI Analytics Dashboard",
    description: "Advanced environmental monitoring Tableau dashboard providing comprehensive insights into global Air Quality Index (AQI) trends, solutions, and regional comparisons.",
    image: `${base}aqi_project.png`,
    tags: ["tableau", "dashboard", "data-viz", "environment"],
    github: "#",
    live: "https://public.tableau.com/app/profile/mausam.kumar8507/viz/Tableau_Dashboard_Final/DB-3Solutions?publish=yes"
  },
  {
    name: "Valuation Ratio Analysis",
    description: "Financial modeling and valuation ratio analysis for BEL and HAL, including Earnings Per Share, Price to Earnings, and Price to Sales ratios.",
    image: `${base}valuation.png`,
    tags: ["excel", "finance", "data-analysis"],
    github: "#",
    live: "https://rishihoodeduin-my.sharepoint.com/:x:/g/personal/shreya_suman2024_rishihood_edu_in/IQAwKk1hbUNoRrDa8KXWG4XHARLfobwL4URywfzqQT_85rU?e=XZ8lST"
  },
  {
    name: "DuPont Analysis",
    description: "3-Stage and 5-Stage DuPont Analysis dashboard detailing Return on Asset (ROA) and Return on Equity (ROE) metrics for major corporations.",
    image: `${base}dup.png`,
    tags: ["excel", "finance", "dashboard"],
    github: "#",
    live: "https://docs.google.com/spreadsheets/d/1rXrg4fPHJ04Rn235QbPeTpmicKgpzqiM7FEksTKqKSg/edit?usp=sharing"
  },
  {
    name: "Developer Compensation & Job Satisfaction Analysis (2025)",
    description: "Comprehensive analysis of developer compensation and job satisfaction trends across different factors such as experience, location, and company size, utilizing data visualization techniques to uncover insights.",
    image: `${base}project.png`,
    tags: ["dashboard", "data-viz", "analytics"],
    github: "#",
    live: "https://docs.google.com/spreadsheets/d/1CUE1TSDbfonV3kL1XIwCiGaxcn4hCe6zfwbaep4yrMc/edit?usp=sharing"
  }
]

export default projects
