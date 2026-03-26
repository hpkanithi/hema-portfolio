import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="logo">Hema</div>
    <nav class="nav">
      <a href="#intro">Intro</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
    </nav>
  </header>

  <main>
    <section id="intro" class="section hero-section">
      <div class="section-content hero-content">
        <div class="hero-text">
          <h1>Hi, I'm Hema</h1>
          <h2>Cloud engineer building scalable, real-world systems</h2>
          <p class="section-description">
            I design and build cloud-native solutions with a focus on AWS,
            automation, and practical system design.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="button primary-button">View Projects</a>
            <a href="#experience" class="button secondary-button">View Experience</a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="image-placeholder">
            Ghibli-style image<br />goes here later
          </div>
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
  </main>
`