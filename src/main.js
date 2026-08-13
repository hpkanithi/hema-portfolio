import "./style.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <div class="logo">Hema</div>
    <nav class="nav">
      <a href="#intro">Intro</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#architecture-breakdown">Architecture</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  
  <main>
    <section id="intro" class="section hero-section">
      <div class="section-content hero-content">
        <div class="hero-text">
          <h1>Hi, I'm Hema</h1>
          <h2>Cloud & DevOps engineer specializing in scalable AWS systems</h2>
          <p class="section-description">
            I design and build cloud-native solutions with a focus on AWS, automation, and practical system design.
          </p>

          <p class="section-description">
            Experienced in Terraform, Kubernetes, CI/CD, and building production-ready cloud workflows.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="button primary-button">View Projects</a>
            <a href="#experience" class="button secondary-button">View Experience</a>
            <a href="#architecture-breakdown" class="button secondary-button">View Architecture Blog</a>
          </div>
        </div>

        <div class="hero-visual">
          <img src="/assets/profile.jpeg" alt="Hema Praharsha" class="hero-image" />
        </div>
      </div>
    </section>

    <section id="experience" class="section">
      <div class="section-content">
        <p class="eyebrow">Experience</p>
        <h2>Professional Experience</h2>
        <div class="card-list">
          <article class="info-card">
            <h3>Senior Cloud Engineer</h3>
            <p class="card-subtitle">CVS Health · Jan 2025 – Present</p>

            <ul class="card-list-points">
              <li>Automated cloud infrastructure using Terraform and CI/CD pipelines (Jenkins, GitLab) across AWS and Azure environments.</li>
              <li>Containerized and orchestrated applications using Docker and Kubernetes (EKS, OpenShift), improving scalability and deployment efficiency.</li>
              // <li>Developed automation scripts in Python, Bash, and PowerShell for deployments, monitoring, and security workflows.</li>
              <li>Integrated monitoring and observability using Prometheus, Grafana, and Splunk to ensure system reliability and performance.</li>
              <li>Implemented secure infrastructure practices using HashiCorp Vault and Terraform Sentinel for compliance and policy enforcement.</li>
            </ul>
          </article>

          <article class="info-card">
            <h3>AWS Cloud Engineer</h3>
            <p class="card-subtitle">Accenture Solutions Pvt. Ltd. · Oct 2022 – Jan 2024</p>

            <ul class="card-list-points">
              <li>Architected an AWS migration platform supporting 50+ TB of data across 20+ workloads.</li>
              <li>Built reusable Terraform modules for VPC, IAM, ECS, MWAA, and multi-environment deployments.</li>
              <li>Designed serverless workflows using Lambda, DynamoDB, SNS, CloudWatch, and Parameter Store.</li>
              <li>Implemented secure hybrid-cloud migrations using DataSync, Transfer Family, S3, and VPN.</li>
              <li>Automated application deployments using Terraform, Docker, ECR, and ECS.</li>
            </ul>
          </article>

          <article class="info-card">
            <h3>Software Engineer II</h3>
            <p class="card-subtitle">Amazon India Pvt. Ltd. · Sept 2021 – May 2022</p>

            <ul class="card-list-points">
              <li>Supported mission-critical Amazon Go platforms, troubleshooting production software and device incidents.</li>
              <li>Performed log analysis and root cause analysis to identify defects and restore service availability.</li>
              <li>Improved SOPs and operational runbooks, reducing incident resolution time.</li>
              <li>Delivered technical guidance and knowledge transfer on production support workflows.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-content">
        <p class="eyebrow">Projects</p>
        <h2>Featured Projects</h2>
        <div class="card-list">
          <article class="info-card featured-project">
            <h3>Multi-Region AWS SaaS Platform</h3>
            <p class="card-subtitle">Terraform · ECS Fargate · ALB · GitHub Actions · CloudWatch · Docker</p>

            <p class="project-summary">
              Designed and deployed a production-grade multi-region AWS architecture using Terraform,
              featuring ECS Fargate, environment-aware CI/CD pipelines with approval gates, CloudWatch monitoring,
              and disaster recovery support across regions.
            </p>

            <ul class="card-list-points">
              <li>Designed a multi-region deployment model with primary and disaster recovery environments.</li>
              <li>Built separate CI/CD pipelines for application and infrastructure delivery using GitHub Actions.</li>
              <li>Implemented approval-gated infrastructure changes for safer and controlled deployments.</li>
              <li>Deployed containerized workloads on ECS Fargate behind an Application Load Balancer.</li>
              <li>Integrated CloudWatch alarms for ECS utilization and load balancer health monitoring.</li>
              <li>Configured remote Terraform state management using S3 and DynamoDB.</li>
            </ul>

            <div class="project-links">
              <a href="https://github.com/hpkanithi/aws-multi-region-saas" target="_blank" rel="noopener noreferrer">View Project Code</a>
            </div>
          </article>

          <article class="info-card">
            <h3>AWS Receipt Processing System</h3>
            <p class="card-subtitle">S3 · Textract · Lambda · DynamoDB · SNS/SES · QuickSight</p>

            <p class="project-summary">
              Built a serverless receipt-processing workflow that extracts receipt data,
              stores structured records, sends notifications, and supports dashboard-based
              spending insights.
            </p>

            <ul class="card-list-points">
              <li>Designed an event-driven pipeline where receipts uploaded to Amazon S3 trigger downstream processing.</li>
              <li>Used AWS Textract to extract structured receipt information for automated data capture.</li>
              <li>Processed and stored receipt metadata using AWS Lambda and DynamoDB for scalable, serverless handling.</li>
              <li>Integrated SNS/SES notifications and QuickSight dashboards to enable visibility and expense tracking.</li>
            </ul>
          </article>

          <article class="info-card">
            <h3>Federated Learning for Privacy-Preserving Healthcare AI</h3>
            <p class="card-subtitle">Python · Machine Learning · Distributed Systems · Data Privacy</p>

            <p class="project-summary">
              Designed and implemented a federated learning framework to train machine learning models across distributed healthcare datasets without sharing sensitive patient data.
            </p>

            <ul class="card-list-points">
              <li>Simulated multiple hospital environments by partitioning datasets for decentralized training under real-world privacy constraints.</li>
              <li>Built and evaluated centralized vs federated models (Logistic Regression, LSTM, CNN/ResNet) to compare accuracy and efficiency.</li>
              <li>Implemented Federated Averaging (FedAvg) for secure aggregation of local model updates across distributed nodes.</li>
              <li>Analyzed model performance under non-IID data distributions reflecting real-world healthcare variability.</li>
              <li>Optimized distributed training workflows to improve scalability and communication efficiency.</li>
              <div class="project-links">
                <a href="https://github.com/hpkanithi/federated-learning-healthcare" target="_blank" rel="noopener noreferrer">View Project Code</a>
              </div>
            </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="architecture-breakdown" class="section architecture-breakdown-section">
      <div class="section-content">

        <p class="eyebrow">Architecture Breakdown</p>
        <h2>Architecture Breakdown</h2>

        <p class="section-description">
          Rebuilding real-world engineering architectures at portfolio scale,
          exploring design decisions, failure scenarios, and infrastructure tradeoffs.
        </p>

        <div class="architecture-grid">

          <!-- Company 01: Slack -->
          <article class="architecture-card">

            <div class="architecture-card-image">
              <img
                src="/assets/architecture/slack/architecture-diagram.svg"
                alt="Slack job queue architecture recreated on AWS"
              />

              <span class="architecture-company-label">
                Company 01 · Slack
              </span>
            </div>

            <div class="architecture-card-content">

              <h3>
                Building Slack's Job Queue Pattern, on a $5 AWS Bill
              </h3>

              <p class="architecture-tech">
                AWS · Terraform · ECS · SQS · Redis · CloudWatch
              </p>

              <p class="architecture-summary">
                Rebuilt Slack's durable job queue pattern using ECS, SQS,
                Redis, a dead-letter queue, and CloudWatch, then tested
                worker failure to prove queued messages survive downtime.
              </p>

              <div class="architecture-links">
                <a
                  href="/company1"
                  class="button secondary-button"
                >
                  Read Full Article
                </a>
              </div>

            </div>
          </article>

        </div>

      </div>
    </section>

    <section id="contact" class="section">
      <div class="section-content contact-content">
        <p class="eyebrow">Contact</p>
        <h2>Let’s Connect</h2>
        <p class="section-description">
          I’m open to cloud, DevOps, and platform engineering opportunities. Feel free to connect or reach out.
        </p>

        <div class="contact-actions">
          <a
            href="mailto:hemapraharsha.k@gmail.com"
            class="contact-button"
            aria-label="Email"
          >
            <span class="contact-icon">✉</span>
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hema-praharsha-kanithi-100aa1287/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-button"
            aria-label="LinkedIn"
          >
            <span class="contact-icon">in</span>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/hpkanithi"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-button"
            aria-label="GitHub"
          >
            <span class="contact-icon">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
                -1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 
                3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.93 
                0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 
                3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404 
                2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176 
                .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 
                .43.37.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 
                0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </span>
            <span>GitHub</span>
          </a>
        </div>

        <div class="hero-actions">
          <a
            href="/resume-view.html"
            target="_blank"
            rel="noopener noreferrer"
            class="button primary-button"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  </main>
`;
