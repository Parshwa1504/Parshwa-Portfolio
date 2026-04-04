"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  { id: "all", label: "All" },
  { id: "ai-ml", label: "AI & ML" },
  { id: "sql-data", label: "SQL & Data Analytics" },
  { id: "data-engineering", label: "Data Engineering" },
  { id: "fullstack", label: "Full Stack" },
  { id: "dashboard", label: "Dashboard & BI" },
]

const projects = [
  {
    id: 1,
    category: "ai-ml",
    categoryLabel: "AI & ML",
    title: "AI Code Review and Security Auditor Agent",
    summary: "AI-powered system for automated code analysis and security auditing using Python and large language models.",
    description: "Developed an AI-powered system for automated code analysis and security auditing using Python and large language models. The system uses a multi-stage pipeline to detect vulnerabilities and generate actionable remediation insights using NLP techniques, with reusable components for large-scale codebase analysis.",
    keyImpact: "Detects critical vulnerabilities like SQLi and XSS with automated remediation suggestions, improving code security at scale.",
    tags: ["Python", "LLMs", "NLP", "Security", "AI"],
    github: "https://github.com/Parshwa1504/AI-Code-Review-and-Security-Auditor-Agent",
  },
  {
    id: 2,
    category: "sql-data",
    categoryLabel: "SQL & Data Analytics",
    title: "Amazon Sales Analysis Using SQL",
    summary: "Normalized Amazon-style relational database with 9+ tables for business-critical analysis across 20+ real-world scenarios.",
    description: "Designed and normalized an Amazon-style relational database (Amazon_DB) with 9+ interrelated tables for categories, products, customers, orders, payments, inventory, and shipping using MySQL. Implemented advanced SQL queries for business-critical analysis including sales performance, product profitability, customer behavior, inventory alerts, and shipping delays.",
    keyImpact: "Delivered actionable insights for revenue forecasting, order optimization, cross-selling opportunities, and efficient inventory management in an e-commerce setting.",
    tags: ["MySQL", "SQL", "Window Functions", "Stored Procedures", "E-Commerce"],
    github: "https://github.com/Parshwa1504/Amazon-Sales-Analysis-Using-SQL",
  },
  {
    id: 3,
    category: "dashboard",
    categoryLabel: "Dashboard & BI",
    title: "Bank Loan Analysis",
    summary: "End-to-end analysis on a 38K+ record bank loan dataset with interactive dashboards in Tableau and Excel.",
    description: "Conducted end-to-end analysis on a 38K+ record bank loan dataset to derive actionable insights on loan status, funded amounts, repayment, and DTI using Excel and Tableau. Engineered calculated KPIs like MTD, PMTD, and MOM for critical metrics such as total funded amount, interest rates, and DTI to monitor business performance.",
    keyImpact: "Enabled decision-makers to evaluate funding distribution and risk metrics across states, loan terms, employee tenure, and ownership patterns through interactive dashboards.",
    tags: ["Excel", "Tableau", "KPI Analysis", "Data Visualization", "Finance"],
    github: "https://github.com/Parshwa1504/Bank-Loan-Analysis",
  },
  {
    id: 4,
    category: "dashboard",
    categoryLabel: "Dashboard & BI",
    title: "Coffee Shop Sales Analysis",
    summary: "SQL-based ETL pipeline analyzing 149K+ row dataset with interactive Power BI dashboard for business KPIs.",
    description: "Designed a SQL-based ETL pipeline to clean, transform, and analyze a 149K+ row coffee shop sales dataset using MySQL. Used advanced SQL queries including window functions, aggregations, and date-time transformations to uncover business KPIs and sales trends. Created an interactive Power BI dashboard featuring daily/monthly sales, top product categories, store-wise performance, and peak-hour analysis.",
    keyImpact: "Identified key revenue drivers and optimized store performance by visualizing sales behavior across time and regions.",
    tags: ["MySQL", "Power BI", "ETL", "SQL", "Data Visualization"],
    github: "https://github.com/Parshwa1504/Coffee-Shop-Sales-Analysis",
  },
  {
    id: 5,
    category: "sql-data",
    categoryLabel: "SQL & Data Analytics",
    title: "Content Policy Violation Detection — Netflix Metadata Analysis",
    summary: "Relational database analyzing Netflix metadata to uncover content insights and policy violations using SQL.",
    description: "Designed and structured a relational database using MySQL to store and analyze Netflix's movie and TV show metadata, including title, cast, rating, country, and genre. Executed advanced SQL queries to uncover key business insights such as most common ratings, top content-producing countries, trends in content release years, genre popularity, and director-based filtering.",
    keyImpact: "Solved 15+ real-world analytical questions including actor appearances, regional content analysis, and keyword-based classification of content, delivering insights to drive Netflix's content strategy.",
    tags: ["MySQL", "SQL", "Content Moderation", "Data Analysis", "NLP"],
    github: "https://github.com/Parshwa1504/Content-Policy-Violation-Detection-Netflix-Metadata-Analysis",
  },
  {
    id: 6,
    category: "ai-ml",
    categoryLabel: "AI & ML",
    title: "Credit Card Fraud Detection",
    summary: "Robust ML pipeline using XGBoost, CatBoost, and LightGBM achieving 80% accuracy on 450K+ imbalanced records.",
    description: "Built a robust ML pipeline using XGBoost, CatBoost, and LightGBM to predict customer default behavior on credit card payments using an American Express dataset. Performed extensive data preprocessing including grouping by customer ID, imputing missing values, and feature selection for improved model accuracy. Conducted EDA using seaborn, matplotlib, and plotly to understand feature impact and class distributions.",
    keyImpact: "Enabled proactive risk assessment by identifying 80% of defaults accurately and optimizing model explainability for real-world applications.",
    tags: ["Python", "XGBoost", "CatBoost", "LightGBM", "EDA"],
    github: "https://github.com/Parshwa1504/Credit-Card-Default-Detection",
  },
  {
    id: 7,
    category: "dashboard",
    categoryLabel: "Dashboard & BI",
    title: "Cricket Data Analytics Using Web Scraping",
    summary: "T20 World Cup 2022 analytics pipeline with Power BI dashboard for player performance and Final 12 selection.",
    description: "Collected T20 World Cup 2022 data using BrightData web scraping, stored it in JSON format, and converted it into structured CSVs using Python and Pandas for analysis. Cleaned and preprocessed player-level stats (batting, bowling, match results, player info), building an integrated dataset for multi-dimensional insights. Designed an interactive Power BI dashboard to visualize key performance indicators including strike rate, average, and bowling economy.",
    keyImpact: "Enabled user-driven Final 12 player selection with drill-down tooltip analysis for individual match-wise performance metrics.",
    tags: ["Python", "Web Scraping", "Power BI", "Pandas", "Cricket Analytics"],
    github: "https://github.com/Parshwa1504/Cricket-Data-Analytics-Project-Using-Webscraping",
  },
  {
    id: 8,
    category: "fullstack",
    categoryLabel: "Full Stack",
    title: "Dating Web Application",
    summary: "Full-stack dating platform with swipe-based UI, JWT auth, real-time chat, and personalized profile matching.",
    description: "Developed a full-stack dating platform to solve the problem of impersonal and non-intelligent matchmaking, by implementing a modern swipe-based user interface and personalized profile matching logic. Built secure user authentication and session management using JWT, bcrypt, and Node.js. Designed real-time chat functionality and profile setup features using React.js, Express, and MongoDB.",
    keyImpact: "Created a responsive UI with Material-UI, optimizing user flow from registration to chat and increasing engagement while reducing drop-offs.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Express"],
    github: "https://github.com/Parshwa1504/Dating-Web-Application",
  },
  {
    id: 9,
    category: "ai-ml",
    categoryLabel: "AI & ML",
    title: "Driver Drowsiness Detection System",
    summary: "Real-time drowsiness detection using CNN and OpenCV with automated audio alerts for driver safety.",
    description: "Developed a real-time Driver Drowsiness Detection system using OpenCV for facial and eye detection and a CNN model built with Keras & TensorFlow for classifying eye states. Captured live webcam input and implemented a scoring mechanism to monitor continuous eye closure, triggering alerts using Pygame for early warning. Trained the model on a Kaggle dataset with thousands of eye images, achieving reliable predictions under various lighting conditions.",
    keyImpact: "Simulated a safety mechanism that reduces accident risk by detecting driver fatigue and issuing real-time audio alerts.",
    tags: ["CNN", "OpenCV", "Keras", "TensorFlow", "Python"],
    github: "https://github.com/Parshwa1504/Driver-Drowsiness-Detection-System",
  },
  {
    id: 10,
    category: "fullstack",
    categoryLabel: "Full Stack",
    title: "E-Commerce Website using MERN Stack",
    summary: "Full-stack MERN application with REST APIs, role-based access control, and web scraping for product discovery.",
    description: "Built a full-stack MERN application with REST APIs and role-based access control for secure user management. Engineered a responsive frontend using React and scalable backend services with Node.js and MongoDB. Incorporated external data pipelines through web scraping and developed a crawler to improve product discovery and information retrieval.",
    keyImpact: "Delivered a scalable e-commerce platform with secure authentication, dynamic product management, and automated product discovery via web crawling.",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Web Scraping"],
    github: "https://github.com/Parshwa1504/E-Commerce-Website-using-MERN-Stack",
  },
  {
    id: 11,
    category: "dashboard",
    categoryLabel: "Dashboard & BI",
    title: "Excel Blinkit Sales Analysis",
    summary: "End-to-end Blinkit grocery sales analysis with interactive Excel dashboard tracking KPIs and sales trends.",
    description: "Conducted end-to-end analysis of Blinkit's grocery sales data using Microsoft Excel, including data cleaning, transformation, and KPI tracking using pivot tables, formulas, and visualizations. Designed an interactive Excel dashboard to visualize key performance indicators like Total Sales, Average Sales, Number of Items, Fat Content, Outlet Type, and Sales Trends. Applied Power Query and Excel functions to organize data and create dynamic views.",
    keyImpact: "Revealed that Tier 3 outlets generate highest revenue (~$472K) and 'Fruits & Vegetables' is the top-selling category, enabling data-driven business decisions.",
    tags: ["Excel", "Power Query", "Pivot Tables", "KPI", "Data Analysis"],
    github: "https://github.com/Parshwa1504/Excel_Blinkit_Sales_Analysis",
  },
  {
    id: 12,
    category: "data-engineering",
    categoryLabel: "Data Engineering",
    title: "Geospatial Data Pipeline for Taxi Analytics",
    summary: "Automated ELT pipeline on GCP processing 10M+ geospatial taxi trips with 40% query performance improvement.",
    description: "Built an automated ELT pipeline on GCP using Mage AI and BigQuery to process 10M+ geospatial taxi trips, improving query performance by 40%. Orchestrated batch ingestion and transformation workflows with Cloud Composer, and delivered KPI dashboards via Looker Studio. Demonstrated cloud-native data engineering, geospatial ETL, and dashboarding at scale.",
    keyImpact: "Achieved 40% query performance improvement on 10M+ geospatial records with automated orchestration and real-time KPI dashboards.",
    tags: ["GCP", "BigQuery", "Mage AI", "Cloud Composer", "Looker Studio"],
    github: "https://github.com/Parshwa1504/Geospatial-Data-Pipeline-for-Taxi-Analytics",
  },
  {
    id: 13,
    category: "sql-data",
    categoryLabel: "SQL & Data Analytics",
    title: "Library Management System using SQL",
    summary: "Normalized relational database managing books, members, branches with full CRUD and automated fine calculation.",
    description: "Designed and implemented a normalized relational database (library_db) to manage books, members, branches, employees, and transactions for a library system, ensuring referential integrity using MySQL. Performed full-cycle CRUD operations, CTAS, and built advanced SQL queries for overdue tracking, rental income, branch performance, and member activity using joins, groupings, subqueries, and stored procedures.",
    keyImpact: "Delivered a robust backend system capable of generating insightful reports for operational efficiency, improving book availability tracking, and streamlining library operations through smart automation.",
    tags: ["MySQL", "SQL", "Stored Procedures", "CRUD", "Database Design"],
    github: "https://github.com/Parshwa1504/Library-Management-System-using-SQL-Project",
  },
  {
    id: 14,
    category: "sql-data",
    categoryLabel: "SQL & Data Analytics",
    title: "SQL India General Election Result Analysis",
    summary: "Normalized election database analyzing India's 2024 results across 543 constituencies with 15+ complex queries.",
    description: "Designed a fully normalized relational database (India_Election_DB) to store and manage Indian general election results with entity relationships and referential integrity. Executed complex SQL queries for insightful analytics, including alliance-wise seat wins, constituency-level stats, EVM vs postal vote distribution, and state-wise summaries. Built reusable, optimized queries using window functions, joins, constraints, and aggregations.",
    keyImpact: "Enabled detailed, data-driven understanding of India's 2024 election performance by alliance and constituency, supporting electoral insights at scale across 543 constituencies.",
    tags: ["MySQL", "Window Functions", "SQL", "Political Analytics", "Database Design"],
    github: "https://github.com/Parshwa1504/SQL-INDIA-GENERAL-ELECTION-RESULT-ANALYSIS",
  },
  {
    id: 15,
    category: "data-engineering",
    categoryLabel: "Data Engineering",
    title: "Stock Market ETL Predictive Analytics Pipeline",
    summary: "Cloud-based ETL workflow using Airflow, dbt, and Snowflake for stock analytics with 70% ML prediction accuracy.",
    description: "Engineered a cloud-based ETL workflow using Airflow, dbt, and Snowflake to ingest stock, earnings, and sentiment data for 100+ companies. Implemented data modeling and storage in columnar formats (Parquet), and automated ML-driven predictions with 70% accuracy. Enabled real-time stakeholder access through an interactive Streamlit dashboard and Snowflake views.",
    keyImpact: "Achieved 70% ML prediction accuracy on stock data for 100+ companies with real-time Streamlit dashboard for stakeholder access.",
    tags: ["Airflow", "dbt", "Snowflake", "Streamlit", "ML"],
    github: "https://github.com/Parshwa1504/Stock-Market-ETL-Predictive-Analytics-Pipeline",
  },
]

const categoryColors: Record<string, string> = {
  "AI & ML": "#d1fae5",
  "SQL & Data": "#dbeafe",
  "Data Engineering": "#ede9fe",
  "Full Stack": "#fce7f3",
  "Dashboard & BI": "#fef3c7",
}

const categoryTextColors: Record<string, string> = {
  "AI & ML": "#065f46",
  "SQL & Data": "#1e40af",
  "Data Engineering": "#5b21b6",
  "Full Stack": "#9d174d",
  "Dashboard & BI": "#92400e",
}

const cardAccentColors = [
  "#0D9488", "#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b",
  "#10b981", "#6366f1", "#ef4444", "#14b8a6", "#f97316",
  "#84cc16", "#06b6d4", "#a855f7", "#e11d48", "#0ea5e9",
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [modalIndex, setModalIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const openModal = (project: typeof projects[0]) => {
    const idx = filteredProjects.findIndex((p) => p.id === project.id)
    setModalIndex(idx)
    setSelectedProject(project)
  }

  const closeModal = () => setSelectedProject(null)

  const goNext = () => {
    const next = (modalIndex + 1) % filteredProjects.length
    setModalIndex(next)
    setSelectedProject(filteredProjects[next])
  }

  const goPrev = () => {
    const prev = (modalIndex - 1 + filteredProjects.length) % filteredProjects.length
    setModalIndex(prev)
    setSelectedProject(filteredProjects[prev])
  }

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <section id="projects" className="py-20 md:py-32" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label — centered with lines on both sides like Smit's */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ backgroundColor: "#0D9488" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0D9488" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#0D9488" }}>
              Projects
            </span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0D9488" }} />
            <div className="h-px w-16" style={{ backgroundColor: "#0D9488" }} />
          </div>

          {/* Heading — two lines like Smit's */}
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Real-World Challenges,
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "#0D9488" }}>
              Actionable Solutions
            </h2>
          </div>
          <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            Each project reflects my passion for combining ML, SQL, data engineering, and systems thinking to solve real-world challenges.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border"
                style={
                  activeCategory === cat.id
                    ? { backgroundColor: "#1a1a2e", color: "#ffffff", borderColor: "#1a1a2e" }
                    : { backgroundColor: "transparent", color: "#6b7280", borderColor: "#d1d5db" }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                onClick={() => openModal(project)}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Colored top bar */}
                <div className="h-2 w-full" style={{ backgroundColor: cardAccentColors[index % cardAccentColors.length] }} />
                <div className="p-6">
                  {/* Category badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      backgroundColor: categoryColors[project.categoryLabel] || "#f0fdfb",
                      color: categoryTextColors[project.categoryLabel] || "#065f46",
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md text-xs font-medium"
                        style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium" style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev / Next arrows */}
              <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>

              <div className="p-8">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>

                {/* Category badge */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{
                    backgroundColor: categoryColors[selectedProject.categoryLabel] || "#f0fdfb",
                    color: categoryTextColors[selectedProject.categoryLabel] || "#065f46",
                  }}
                >
                  {selectedProject.categoryLabel}
                </span>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight pr-8">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Key Impact box */}
                <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "#f8fffe", border: "1px solid #d1fae5" }}>
                  <p className="text-sm font-bold text-gray-900 mb-2">Key Impact</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedProject.keyImpact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-sm font-medium border"
                      style={{ backgroundColor: "#f9fafb", color: "#4b5563", borderColor: "#e5e7eb" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project button */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#1a1a2e" }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
