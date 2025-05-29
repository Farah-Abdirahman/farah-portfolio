import React from 'react';
import './App.css'

const pinnedProjects = [
  {
    name: 'AI Legal Analyzer',
    url: 'https://github.com/Farah-Abdirahman/ai-legal-analyzer',
    description: 'Summarizes, extracts key clauses, and flags risks from contracts using Amazon Nova.'
  },
  {
    name: 'Lecture Summarization AWS',
    url: 'https://github.com/Farah-Abdirahman/lecturesummarization_aws',
    description: 'Event-driven architecture for transcribing audio and generating summaries using AWS Bedrock.'
  },
  {
    name: 'Azure AI Search Demo',
    url: 'https://github.com/Farah-Abdirahman/azure-ai-search-demo',
    description: 'ChatGPT-like experiences over your own data using Azure OpenAI and Retrieval Augmented Generation.'
  },
  {
    name: 'Sign Language Detection',
    url: 'https://github.com/Farah-Abdirahman/sign-language-detection',
    description: 'Real-time sign language letter detection using MediaPipe and Keras.'
  },
  {
    name: 'Pharmacy Chatbot',
    url: 'https://github.com/Farah-Abdirahman/pharmacy-chatbot',
    description: 'A chatbot solution for pharmacies using Azure services.'
  },
  {
    name: 'Covid19 Image Processor',
    url: 'https://github.com/Farah-Abdirahman/covid19imageprocessor',
    description: 'Deep learning for COVID-19 detection in X-ray images.'
  }
];

// Updated certifications with real links
const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    url: 'https://www.credly.com/badges/0190154c-66e3-42a4-8e75-56f9c5584478/linked_in_profile',
    date: 'Issued May 2024',
    license: 'Credential ID: AWS-0001'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    url: 'https://www.credly.com/badges/f39f110c-d288-4e30-b375-78769209c7bf/linked_in_profile',
    date: 'Issued Mar 2023',
    license: 'Credential ID: AWS-0002'
  },
  {
    name: 'LFS158: Introduction to Kubernetes',
    issuer: 'The Linux Foundation',
    url: 'https://www.credly.com/badges/7966949b-6589-4e62-aef4-91542a7e2335/linked_in_profile',
    date: 'Issued Jan 2024',
    
  },
  {
    name: 'LFS250: Kubernetes and Cloud Native Essentials',
    issuer: 'The Linux Foundation',
    url: 'https://www.credly.com/badges/0d6fb893-119b-4283-92f3-a6b59cf7f136/linked_in_profile',
    date: 'Issued Feb 2024',
    
  }
];

const speakingEngagements = [
  {
    title: 'Microsoft Reactor: AI Fundamentals with Azure',
    url: 'https://www.linkedin.com/posts/farah-abdirahman_thrilled-to-have-been-a-part-of-devfest-activity-7134971364498620416-z7Pw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1NkJQBM0h2RWrm9kso3ARKku4V7q31odM'
  },
  {
    title: 'AWS Community Day: Amazon Bedrock & Gen AI',
    url: 'https://www.linkedin.com/posts/farah-abdirahman_techinnovation-awscommunityday-activity-7181269746066071553-MEjs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1NkJQBM0h2RWrm9kso3ARKku4V7q31odM'
  },
  {
    title: 'Experts Live Kenya: RAG Chat App with Azure Cosmos DB & OpenAI',
    url: 'https://www.linkedin.com/posts/experts-live-kenya_expertsliveke-azure-activity-7205855215378423808-t5OC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1NkJQBM0h2RWrm9kso3ARKku4V7q31odM'
  },
  {
    title: 'AT Summit: Cloud & AI Integration',
    url: 'https://www.linkedin.com/posts/africa%27s-talking-ltd_africastalkingsummit2024-softwaredevelopment-activity-7250087465737228290-OVlp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1NkJQBM0h2RWrm9kso3ARKku4V7q31odM'
  },
  {
    title: 'DevFest MtKenya: API Function Calling in Gemini',
    url: 'https://www.linkedin.com/posts/farah-abdirahman_just-wrapped-up-a-fantastic-time-at-devfest-activity-7261999062671912960-i4w1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1NkJQBM0h2RWrm9kso3ARKku4V7q31odM'
  },
  {
    title: 'DevFest Pwani: Computer Vision in Healthcare',
    url: 'https://www.linkedin.com/posts/farah-abdirahman_what-an-incredible-experience-at-devfest-activity-7267231692665344001-mDAM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1NkJQBM0h2RWrm9kso3ARKku4V7q31odM'
  },
  {
    title: 'AgentCon: Azure AI Foundry & AI Agent Creation',
    url: '#'
  }
];

const awards = [
  {
    name: 'Amazon Q Developer Coin (AWS, 2024)',
    url: 'https://www.linkedin.com/posts/farah-abdirahman_i-won-an-amazon-q-developer-coin-i-recently-activity-7257475337041657857-ciR7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1NkJQBM0h2RWrm9kso3ARKku4V7q31odM'
  },
  {
    name: 'Honours Award, KCA University (2024)',
    url: 'https://www.linkedin.com/posts/farah-abdirahman_kcauniversity-activity-7223350769024962560-etcr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1NkJQBM0h2RWrm9kso3ARKku4V7q31odM'
  },
  {
    name: '3rd Place, Assistive Technology Hackathon (2025)',
    url: '#'
  }
];

function TabbedSection({ tabs }) {
  const [active, setActive] = React.useState(0);
  return (
    <div className="tabbed-section">
      <div className="tab-buttons">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={active === i ? 'button-accent active-tab' : 'button-accent'}
            onClick={() => setActive(i)}
            style={{ minWidth: 120 }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content-wrapper">{tabs[active].content}</div>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio-root" style={{minHeight: '100vh', width: '100vw', boxSizing: 'border-box', background: 'var(--background)'}}>
      <TabbedSection
        tabs={[
          {
            label: 'About',
            content: (
              <section className="profile-section">
                <img src="https://avatars.githubusercontent.com/u/90638797?v=4" alt="Farah Abdirahman" className="profile-img" />
                <h1>Farah Abdirahman</h1>
                <h2>AI/ML, Cloud & DevOps Engineer</h2>
                <p className="profile-summary"> 
Passionate about building scalable, intelligent solutions at the intersection of AI, cloud, and engineering. Experienced in backend development, AWS and Azure, and DevOps automation.I have contributed to impactful 
projects at IBM Research and continuously enhance technical skills. As an AWS Community Builder, I Am committed to knowledge sharing, 
mentoring over 60 students and being recognized as a Most Active Speaker in 2024.  
                </p>
                <div className="cta-buttons">
                  <a className="button-accent" href="mailto:abdifarah076@gmail.com">Contact Me</a>
                  <a className="button-accent" href="https://www.linkedin.com/in/farah-abdirahman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="button-accent" href="https://github.com/Farah-Abdirahman" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </section>
            )
          },
          {
            label: 'Featured Projects',
            content: (
              <section>
                <h2 style={{textAlign: 'center'}}>Featured Projects</h2>
                <ul style={{textAlign: 'left', maxWidth: 700, margin: '2rem auto'}}>
                  {pinnedProjects && pinnedProjects.length > 0 ? (
                    pinnedProjects.map(project => (
                      <li key={project.name} style={{marginBottom: '1.2em', fontSize: '1.08em'}}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
                        {project.description && <span style={{color: '#555', marginLeft: 8}}>- {project.description}</span>}
                      </li>
                    ))
                  ) : (
                    <li style={{color: 'red'}}>No projects found.</li>
                  )}
                </ul>
              </section>
            )
          },
          {
            label: 'Licenses & Certifications',
            content: (
              <section>
                <h2 style={{textAlign: 'center'}}>Licenses & Certifications</h2>
                <ul style={{textAlign: 'left', maxWidth: 700, margin: '2rem auto'}}>
                  {certifications && certifications.length > 0 ? (
                    certifications.map(cert => (
                      <li key={cert.name} style={{marginBottom: '1.2em', fontSize: '1.08em'}}>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.name}</a>
                        <span style={{color: '#555', marginLeft: 8}}>
                          {cert.issuer && `(${cert.issuer}`}{cert.date ? `, ${cert.date}` : ''}{cert.issuer ? ')' : ''}
                        </span>
                        {cert.license && <span style={{color: '#888', marginLeft: 8}}>{cert.license}</span>}
                      </li>
                    ))
                  ) : (
                    <li style={{color: 'red'}}>No certifications found.</li>
                  )}
                </ul>
              </section>
            )
          },
          {
            label: 'Skills',
            content: (
              <section className="skills-section">
                <h2>Skills</h2>
                <ul>
                  <li><b>AI/ML:</b> 
                    <ul>
                      <li>Machine Learning: Deep Learning (TensorFlow, PyTorch), Scikit-learn, Model evaluation & deployment</li>
                      <li>Natural Language Processing (NLP): Sentiment analysis, Text summarization, Named Entity Recognition (NER)</li>
                      <li>Computer Vision: Image classification, Image segmentation</li>
                      <li>Data Analysis: Pandas, NumPy, Data visualization</li>
                    </ul>
                  </li>
                  <li><b>Cloud Computing:</b>
                    <ul>
                      <li>Platforms: AWS (Amazon Web Services), Azure</li>
                      <li>Services: Compute (EC2, Azure VMs, Google Compute Engine), Storage (S3, Azure Blob Storage), Databases (RDS, Azure SQL Database), Serverless (Lambda, Azure Functions)</li>
                      <li>Infrastructure as Code (IaC): Terraform, CloudFormation</li>
                    </ul>
                  </li>
                  <li><b>Programming:</b> Python, Flask, FastAPI</li>
                  <li><b>DevOps:</b> Docker, Kubernetes, CI/CD (GitHub Actions)</li>
                </ul>
              </section>
            )
          },
          {
            label: 'Experience',
            content: (
              <section className="experience-section">
                <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Experience</h2>
                <div style={{maxWidth: 700, margin: '0 auto'}}>
                  <div style={{marginBottom: '2.2em'}}>
                    <h3 style={{margin: 0, fontSize: '1.18em', color: 'var(--accent)'}}>Software Engineering Intern – IBM Research</h3>
                    <div style={{fontSize: '1em', color: '#666', marginBottom: '0.2em'}}>Nairobi, Kenya | Jun 2024 – Aug 2024</div>
                    <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: '1.2em'}}>
                      <li>Developed a Corrective Service for SQL queries, reducing hallucination errors in a text-to-SQL pipeline by 10%, enhancing LLM reliability.</li>
                      <li>Automated deployment pipelines with Helm, Tilt, and Boomerang CI/CD, cutting manual DevOps work by 40%.</li>
                      <li>Enforced secure container deployment by configuring CI/CD to pre-scan Docker images, reducing vulnerabilities.</li>
                      <li>Contributed to open-source SQLGlot integration with IBM DB2, improving validation of AI-generated SQL queries.</li>
                      <li>Built SQL-INSTRUCT, a dataset generator for instruction-tuning LLMs in enterprise data management workflows.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{margin: 0, fontSize: '1.18em', color: 'var(--accent)'}}>Software Engineer – Modcom Institute of Technology</h3>
                    <div style={{fontSize: '1em', color: '#666', marginBottom: '0.2em'}}>Nairobi, Kenya | May 2021 – Apr 2023</div>
                    <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: '1.2em'}}>
                      <li>Led the development of an Android + React health app, increasing patient accessibility by 30%, enabling home delivery of medication.</li>
                      <li>Designed robust REST APIs and async background workers using Python (Django), supporting 1000+ client requests daily.</li>
                      <li>Collaborated in modernizing internal systems, improving system reliability and staff productivity by 25%.</li>
                    </ul>
                  </div>
                </div>
              </section>
            )
          },
          {
            label: 'Awards',
            content: (
              <section className="awards-section">
                <h2>Awards</h2>
                <ul>
                  {awards.map(award => (
                    <li key={award.name}>
                      <a href={award.url} target="_blank" rel="noopener noreferrer">{award.name}</a>
                    </li>
                  ))}
                </ul>
              </section>
            )
          },
          {
            label: 'Speaking Engagements',
            content: (
              <section className="speaking-section">
                <h2>Speaking Engagements</h2>
                <ul>
                  {speakingEngagements.map(s => (
                    <li key={s.title}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
                    </li>
                  ))}
                </ul>
              </section>
            )
          },
          {
            label: 'Contact',
            content: (
              <section>
                <h2>Contact</h2>
                <p>Email: <a href="mailto:abdifarah076@gmail.com">abdifarah076@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/farah-abdirahman/" target="_blank">farah-abdirahman</a></p>
                <p>GitHub: <a href="https://github.com/farah-abdirahman" target="_blank">farah-abdirahman</a></p>
              </section>
            )
          }
        ]}
      />
    </div>
  );
}

export default App;
