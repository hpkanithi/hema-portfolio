import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="logo">Hema</div>
    <nav class="nav">
      <a href="#intro">Intro</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
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
            <h3>Senior DevOps Engineer</h3>
            <p class="card-subtitle">CVS Health · Jan 2025 – Present</p>

            <ul class="card-list-points">
              <li>Automated cloud infrastructure using Terraform and CI/CD pipelines (Jenkins, GitLab) across AWS and Azure environments.</li>
              <li>Containerized and orchestrated applications using Docker and Kubernetes (EKS, OpenShift), improving scalability and deployment efficiency.</li>
              <li>Developed automation scripts in Python, Bash, and PowerShell for deployments, monitoring, and security workflows.</li>
              <li>Integrated monitoring and observability using Prometheus, Grafana, and Splunk to ensure system reliability and performance.</li>
              <li>Implemented secure infrastructure practices using HashiCorp Vault and Terraform Sentinel for compliance and policy enforcement.</li>
            </ul>
          </article>

          <article class="info-card">
            <h3>AWS Senior Developer</h3>
            <p class="card-subtitle">Accenture · Oct 2022 - Jan 2024</p>
            <ul class="card-list-points">
              <li>Managed AWS DevOps tasks, production deployments, and regression testing with post - GoLive hypercare support</li>
              <li>Built and maintained AWS environments using Terraform, leveraging AWS Lambda, Datasync, and Transfer Family.</li>
              <li>Designed scalable data pipelines with MWAA, integrated monitoring with CloudWatch dashboards for improved system visibility.</li>
              <li>Worked with AWS databases including DynamoDB, RDS, and PostgreSQL (pgAdmin) to support reliable and scalable data storage solutions.</li>
            </ul>
          </article>

          <article class="info-card">
            <h3>AWS Application Developer</h3>
            <p class="card-subtitle">Amazon · Sept 2021 – May 2022</p>
            <ul class="card-list-points">
              <li>Built and deployed applications on AWS using EC2, S3, IAM, and RDS.</li>
              <li>Automated CI/CD pipelines with Jenkins and Git, improving deployment consistency.</li>
              <li>Monitored system performance using CloudWatch and supported application deployments on Tomcat.</li>
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
              <a href="https://github.com/hpkanithi/aws-multi-region-saas" target="_blank" rel="noopener noreferrer">View GitHub</a>
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
            <h3>Data Migration Pipeline</h3>
            <p class="card-subtitle">EC2 · ECS · Lambda · MWAA · Terraform · DynamoDB · RDS</p>

            <p class="project-summary">
              Worked on cloud-based data migration workflows with orchestration, monitoring,
              and database validation across AWS services.
            </p>

            <ul class="card-list-points">
              <li>Designed and supported orchestration workflows using AWS Managed Workflows for Apache Airflow (MWAA).</li>
              <li>Used Terraform to provision and manage cloud resources for data flow execution.</li>
              <li>Supported monitoring and validation of migrated data using DynamoDB and Amazon RDS.</li>
              <li>Leveraged AWS Lambda for automation and cost-optimized workflow execution.</li>
            </ul>
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
            href="mailto:hemaprahrshakanithi@gmail.com"
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
`