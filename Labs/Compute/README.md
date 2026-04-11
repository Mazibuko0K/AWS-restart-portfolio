# AWS Certified Cloud Practitioner (CLF-C02) — Complete Study Guide
---

## Exam Overview

### Domain Weightings

| Domain | Weight |
|---|---|
| 1. Cloud Concepts | 24% |
| 2. Security & Compliance | 30% |
| 3. Cloud Technology & Services | 34% |
| 4. Billing, Pricing & Support | 12% |

---

## Domain 1: Cloud Concepts (24%)

### What is Cloud Computing?
On-demand delivery of IT resources over the internet with pay-as-you-go pricing. Instead of buying and maintaining physical data centres, you access technology services like compute power, storage, and databases.

### Six Advantages of Cloud Computing
1. **Trade capital expense for variable expense** — pay only for what you consume
2. **Benefit from massive economies of scale** — AWS aggregates usage from many customers
3. **Stop guessing capacity** — scale up/down as needed
4. **Increase speed and agility** — provision resources in minutes
5. **Stop spending money on data centre operations**
6. **Go global in minutes** — deploy in multiple regions easily

### Cloud Deployment Models

| Model | Description | Example |
|---|---|---|
| **Public Cloud** | Fully on a cloud provider | AWS, Azure, GCP |
| **Private Cloud** | On-premises, managed like cloud | VMware on-prem |
| **Hybrid Cloud** | Mix of public and private | AWS + on-prem data centre |

### Cloud Service Models

| Model | You Manage | Provider Manages | Example |
|---|---|---|---|
| **IaaS** | OS, middleware, apps | Hardware, network, virtualisation | EC2 |
| **PaaS** | Applications, data | Everything else | Elastic Beanstalk |
| **SaaS** | Nothing (just use it) | Everything | Gmail, Salesforce |

### AWS Global Infrastructure
- **Regions** — Geographic areas (e.g. us-east-1). Each region has multiple AZs. Choose based on: compliance, latency, service availability, pricing.
- **Availability Zones (AZs)** — One or more discrete data centres with redundant power/networking. Min 3 per region. Used for high availability.
- **Edge Locations** — Used by CloudFront (CDN) to cache content closer to users. More locations than regions.
- **Local Zones** — Extensions of regions for ultra-low latency in specific cities.
- **Wavelength Zones** — For ultra-low latency via 5G networks.

### AWS Well-Architected Framework — 6 Pillars

| Pillar | Key Concept |
|---|---|
| **Operational Excellence** | Run and monitor systems; automate changes |
| **Security** | Protect data, systems, assets |
| **Reliability** | Recover from failures; meet demand |
| **Performance Efficiency** | Use resources efficiently |
| **Cost Optimisation** | Avoid unnecessary costs |
| **Sustainability** | Minimise environmental impact |

---

## Domain 2: Security & Compliance (30%)

### Shared Responsibility Model ⭐ (Very Important)

**AWS is responsible for "Security OF the Cloud":**
- Physical security of data centres
- Hardware and network infrastructure
- Hypervisor / virtualisation layer
- Managed service infrastructure (e.g. RDS patching)

**Customer is responsible for "Security IN the Cloud":**
- Data encryption (at rest and in transit)
- Identity and Access Management (IAM)
- OS, applications, and firewall configuration
- Network traffic protection
- Customer data

> **Memory tip:** AWS owns the building; you own what's inside.

### IAM — Identity and Access Management

**Key components:**
- **Users** — Individual people or applications; have long-term credentials
- **Groups** — Collection of users; assign policies to groups, not individuals
- **Roles** — Temporary credentials assumed by users, services, or external identities
- **Policies** — JSON documents defining permissions (Allow/Deny)

**Best practices:**
- Enable MFA on root account immediately
- Never use root account for daily tasks
- Grant least privilege access
- Use roles for EC2 instances and cross-account access
- Rotate access keys regularly

**Policy evaluation:** Explicit Deny > Explicit Allow > Default Deny

**IAM Identity Centre (SSO)** — Centralised access management for multiple AWS accounts and apps.

### Security Services

| Service | Purpose |
|---|---|
| **AWS Shield** | DDoS protection. Standard (free, automatic) vs Advanced (paid, 24/7 support) |
| **AWS WAF** | Web Application Firewall — blocks SQLi, XSS, bad bots |
| **Amazon GuardDuty** | Threat detection using ML on CloudTrail, VPC Flow Logs, DNS logs |
| **Amazon Inspector** | Automated vulnerability scanning for EC2, containers, Lambda |
| **AWS Macie** | Uses ML to find and protect sensitive data (PII) in S3 |
| **AWS Config** | Records and audits resource configurations and changes over time |
| **AWS CloudTrail** | Logs all API calls made in your account (who did what, when, from where) |
| **AWS Security Hub** | Centralised security findings across multiple security services |
| **Amazon Detective** | Investigates security incidents using graph analysis |
| **AWS Artifact** | On-demand access to AWS compliance reports and agreements |
| **AWS KMS** | Key Management Service — create and manage encryption keys |
| **AWS Secrets Manager** | Store and rotate secrets (DB passwords, API keys) |
| **AWS Certificate Manager (ACM)** | Provision and manage SSL/TLS certificates |
| **AWS Firewall Manager** | Centrally manage WAF rules and Shield Advanced across accounts |
| **AWS Network Firewall** | Managed network firewall for VPCs |
| **Amazon Cognito** | User authentication for web/mobile apps |

### Compliance & Governance

- **AWS Artifact** — Download SOC reports, PCI compliance docs, ISO certifications
- **AWS Compliance Programs** — AWS meets many global standards: HIPAA, PCI DSS, SOC, ISO 27001, GDPR
- **AWS Trusted Advisor** — Real-time recommendations across 5 categories: Cost Optimisation, Performance, Security, Fault Tolerance, Service Limits

### Encryption
- **At rest:** KMS, S3 SSE (Server-Side Encryption), EBS encryption
- **In transit:** TLS/SSL, ACM certificates
- **Client-side encryption:** Customer encrypts before sending to AWS

### Penetration Testing
Customers can perform pen testing on their own AWS resources without prior approval for specific services (EC2, RDS, CloudFront, etc.). Some tests are prohibited (e.g. DDoS simulation without approval).

---

## Domain 3: Cloud Technology & Services (34%)

### Compute Services

#### EC2 — Elastic Compute Cloud
Virtual servers in the cloud.

**Instance types:**
- **General purpose** (t3, m5) — Balanced compute/memory/network
- **Compute optimised** (c5) — High-performance processors
- **Memory optimised** (r5, x1) — Large in-memory datasets
- **Storage optimised** (i3, d2) — High disk I/O
- **Accelerated computing** (p3, g4) — GPUs, ML workloads

**Purchasing options:**

| Option | Use Case | Savings |
|---|---|---|
| **On-Demand** | Short-term, unpredictable | Baseline (no discount) |
| **Reserved (1 or 3 yr)** | Predictable steady-state | Up to 72% |
| **Savings Plans** | Flexible committed spend | Up to 66% |
| **Spot Instances** | Fault-tolerant, flexible workloads | Up to 90% |
| **Dedicated Hosts** | Compliance, licensing requirements | — |
| **Dedicated Instances** | Single-tenant hardware | — |

**Auto Scaling** — Automatically adds/removes EC2 instances based on demand. Works with a Launch Template and Scaling Policies.

**Elastic Load Balancing (ELB):**
- **Application Load Balancer (ALB)** — HTTP/HTTPS, layer 7, path-based routing
- **Network Load Balancer (NLB)** — TCP/UDP, layer 4, ultra-low latency
- **Gateway Load Balancer (GWLB)** — Deploy third-party virtual appliances

#### Serverless & Containers

| Service | Description |
|---|---|
| **AWS Lambda** | Run code without managing servers; triggered by events; pay per invocation |
| **Amazon ECS** | Elastic Container Service — run Docker containers |
| **Amazon EKS** | Elastic Kubernetes Service — managed Kubernetes |
| **AWS Fargate** | Serverless container compute (works with ECS and EKS) |
| **AWS Elastic Beanstalk** | PaaS — deploy and manage web apps without managing infrastructure |
| **AWS Batch** | Run batch computing workloads at scale |
| **Amazon Lightsail** | Simple, low-cost VPS for small workloads |
| **AWS Outposts** | Run AWS infrastructure on-premises |

---

### Storage Services

| Service | Type | Key Facts |
|---|---|---|
| **Amazon S3** | Object storage | Unlimited storage; 5TB max per object; 99.999999999% (11 9s) durability |
| **Amazon EBS** | Block storage | Attached to EC2; like a hard drive; persists independently of instance |
| **Amazon EFS** | File storage | Managed NFS; shared across multiple EC2 instances; automatically scales |
| **Amazon FSx** | Managed file systems | FSx for Windows (SMB), FSx for Lustre (HPC) |
| **AWS Storage Gateway** | Hybrid storage | Connect on-premises to AWS cloud storage |
| **AWS Snow Family** | Physical data transfer | Snowcone, Snowball Edge, Snowmobile (for petabyte-scale migrations) |
| **Amazon S3 Glacier** | Archive storage | Low-cost; retrieval in minutes to hours |

**S3 Storage Classes:**

| Class | Use Case | Retrieval |
|---|---|---|
| S3 Standard | Frequently accessed | Milliseconds |
| S3 Intelligent-Tiering | Unknown/changing access patterns | Milliseconds |
| S3 Standard-IA | Infrequently accessed | Milliseconds |
| S3 One Zone-IA | Non-critical, infrequently accessed | Milliseconds |
| S3 Glacier Instant Retrieval | Archive, occasional access | Milliseconds |
| S3 Glacier Flexible Retrieval | Archive | Minutes to hours |
| S3 Glacier Deep Archive | Long-term archive | Up to 12 hours |

---

### Database Services

| Service | Type | Key Facts |
|---|---|---|
| **Amazon RDS** | Managed relational DB | Supports MySQL, PostgreSQL, Oracle, SQL Server, MariaDB |
| **Amazon Aurora** | AWS relational DB | MySQL/PostgreSQL compatible; up to 5× faster; auto-scaling storage |
| **Amazon DynamoDB** | NoSQL (key-value) | Serverless; single-digit ms latency; fully managed |
| **Amazon ElastiCache** | In-memory cache | Redis or Memcached; reduces DB load |
| **Amazon Redshift** | Data warehouse | Analytical queries; petabyte-scale |
| **Amazon DocumentDB** | Document DB | MongoDB-compatible |
| **Amazon Neptune** | Graph database | For highly connected data |
| **Amazon QLDB** | Ledger database | Immutable, cryptographically verifiable transaction log |
| **Amazon Keyspaces** | Managed Cassandra | Wide-column NoSQL |
| **Amazon Timestream** | Time-series database | IoT and operational data |
| **AWS Database Migration Service (DMS)** | Migration tool | Migrate databases to AWS |

**RDS Multi-AZ:** Automatic failover to standby replica in another AZ. For high availability (not performance).

**RDS Read Replicas:** Copies for read-heavy workloads. Improves performance (not HA by itself).

---

### Networking Services

#### VPC — Virtual Private Cloud
Your isolated section of the AWS cloud. You control IP ranges, subnets, routing, and gateways.

**Key VPC components:**
- **Subnets** — Public (internet-facing) or private (internal only)
- **Internet Gateway (IGW)** — Allows public subnet resources to reach the internet
- **NAT Gateway** — Allows private subnet instances to initiate outbound internet traffic
- **Route Tables** — Control traffic routing within VPC
- **Security Groups** — Instance-level stateful firewall (allow rules only)
- **Network ACLs (NACLs)** — Subnet-level stateless firewall (allow and deny rules)
- **VPC Peering** — Connect two VPCs privately
- **VPC Endpoints** — Private connection to AWS services without internet
- **AWS Transit Gateway** — Central hub to connect multiple VPCs and on-premises networks

#### Connectivity

| Service | Purpose |
|---|---|
| **AWS Direct Connect** | Dedicated private network connection from on-premises to AWS |
| **AWS VPN** | Encrypted connection over the public internet to AWS |
| **Amazon Route 53** | DNS service; domain registration; routing policies (simple, weighted, latency, failover, geolocation) |
| **Amazon CloudFront** | CDN — caches content at edge locations globally |
| **AWS Global Accelerator** | Routes traffic through AWS global network for improved performance |
| **AWS PrivateLink** | Securely expose services to other VPCs without internet |

**Security Groups vs NACLs:**

| Feature | Security Group | NACL |
|---|---|---|
| Level | Instance | Subnet |
| State | Stateful | Stateless |
| Rules | Allow only | Allow and Deny |
| Evaluation | All rules | Rules in order |

---

### Management & Monitoring Services

| Service | Purpose |
|---|---|
| **AWS CloudWatch** | Monitor metrics, logs, set alarms, dashboards |
| **AWS CloudTrail** | Audit log of all API calls (governance, compliance) |
| **AWS Config** | Track resource configuration changes; check compliance |
| **AWS Systems Manager** | Operational management of EC2 and on-prem at scale |
| **AWS Trusted Advisor** | Best practice recommendations (cost, security, performance, fault tolerance, limits) |
| **AWS Health Dashboard** | Personalised view of AWS service health affecting your account |
| **AWS Well-Architected Tool** | Review workloads against best practices |
| **AWS Control Tower** | Set up and govern multi-account environments |
| **AWS Organizations** | Manage multiple AWS accounts centrally; consolidated billing; SCPs |
| **AWS Service Catalog** | Create and manage approved IT service catalogues |
| **AWS OpsWorks** | Chef/Puppet-based configuration management |

**AWS Systems Manager — Session Manager:**
A feature of Systems Manager that provides secure browser-based or CLI shell access to EC2 instances and on-premises servers **without opening any inbound ports, managing SSH keys, or using a bastion host.**

| Feature | Detail |
|---|---|
| **No open ports needed** | Works through SSM Agent + IAM, not network ports |
| **Fully audited** | Session logs sent to S3 or CloudWatch Logs |
| **IAM-controlled access** | No SSH keys; access via IAM policies |
| **Works on-premises too** | Any server running the SSM Agent |
| **No bastion host required** | Eliminates jump boxes entirely |

| | SSH | Session Manager |
|---|---|---|
| Requires open port 22 | Yes | No |
| Requires key pairs | Yes | No |
| Audit trail | Manual | Built-in |
| Access control | Key-based | IAM policies |

> Exam tip: If a question asks how to access EC2 securely with no open ports or SSH keys → **Session Manager**

**CloudWatch key concepts:**
- **Metrics** — Data points over time (CPU, network, disk)
- **Alarms** — Trigger actions based on metric thresholds
- **Logs** — Collect and monitor log files
- **Events/EventBridge** — Respond to state changes in AWS resources

---

### Developer & Deployment Tools

| Service | Purpose |
|---|---|
| **AWS CodeCommit** | Managed Git repository |
| **AWS CodeBuild** | Build and test code |
| **AWS CodeDeploy** | Automate application deployments |
| **AWS CodePipeline** | CI/CD pipeline orchestration |
| **AWS CloudFormation** | Infrastructure as Code (IaC) — provision resources using templates |
| **AWS CDK** | Define cloud infrastructure using programming languages |
| **AWS SAM** | Serverless Application Model — simplified CloudFormation for Lambda |
| **AWS X-Ray** | Distributed tracing for application debugging |
| **AWS Cloud9** | Cloud-based IDE |

---

### AI & ML Services

| Service | Purpose |
|---|---|
| **Amazon SageMaker** | Build, train, deploy ML models |
| **Amazon Rekognition** | Image and video analysis |
| **Amazon Transcribe** | Speech to text |
| **Amazon Polly** | Text to speech |
| **Amazon Translate** | Language translation |
| **Amazon Comprehend** | NLP — extract insights from text |
| **Amazon Lex** | Build chatbots (powers Alexa) |
| **Amazon Kendra** | Intelligent enterprise search |
| **Amazon Personalize** | Real-time personalisation recommendations |
| **Amazon Forecast** | Time-series forecasting |
| **Amazon Textract** | Extract text and data from documents |
| **AWS DeepRacer** | Reinforcement learning racing car |
| **Amazon Bedrock** | Access foundation models (FMs) via API |
| **AWS CodeWhisperer** | AI-powered coding assistant |

---

### Application Integration Services

| Service | Purpose |
|---|---|
| **Amazon SQS** | Simple Queue Service — message queue; decouples components |
| **Amazon SNS** | Simple Notification Service — pub/sub messaging; sends notifications |
| **Amazon EventBridge** | Serverless event bus |
| **AWS Step Functions** | Orchestrate workflows using state machines |
| **Amazon MQ** | Managed message broker (RabbitMQ, ActiveMQ) |
| **Amazon Kinesis** | Real-time data streaming |
| **AWS AppSync** | Managed GraphQL API |
| **Amazon API Gateway** | Create and manage APIs |

**SQS vs SNS:**
- **SQS** — Pull-based queue; one consumer processes each message; good for decoupling
- **SNS** — Push-based; fan-out to multiple subscribers simultaneously

---

## Domain 4: Billing, Pricing & Support (12%)

### AWS Pricing Principles
1. **Pay for what you use** — no long-term commitments required
2. **Pay less when you reserve** — Reserved Instances and Savings Plans
3. **Pay less with volume** — tiered pricing (e.g. S3 per-GB cost decreases with usage)
4. **Pay less as AWS grows** — prices have trended downward over time

### Key Pricing Factors by Service

**EC2:** Instance type, OS, region, purchase option, tenancy

**S3:** Storage class, storage amount, requests, data transfer OUT (data transfer IN is free)

**Data Transfer:** Inbound to AWS is free. Outbound to internet has a cost. Transfer between AZs has a cost. Transfer within the same AZ using private IP is free.

### Cost Management Tools

| Tool | Purpose |
|---|---|
| **AWS Cost Explorer** | Visualise, understand, and forecast costs and usage |
| **AWS Budgets** | Set custom budgets and alerts when costs exceed thresholds |
| **AWS Cost and Usage Report (CUR)** | Most detailed billing data available |
| **AWS Pricing Calculator** | Estimate costs before deploying |
| **AWS Billing Console** | View monthly bills and invoices |
| **Savings Plans** | Flexible commitment model for EC2, Fargate, Lambda |
| **Reserved Instances** | Commit to 1 or 3 years for significant discounts |
| **Spot Instances** | Use spare EC2 capacity at up to 90% discount |

### AWS Organizations & Consolidated Billing
- Manage multiple accounts under one organisation
- **Consolidated Billing** — One payment method for all accounts; volume discounts aggregated across accounts
- **Service Control Policies (SCPs)** — Restrict what member accounts can do
- **AWS Control Tower** — Automates multi-account setup with guardrails

### Support Plans

| Plan | Price | Key Features |
|---|---|---|
| **Basic** | Free | Documentation, whitepapers, forums, AWS Health Dashboard |
| **Developer** | $29/month | Business hours email support; 1 contact |
| **Business** | $100/month | 24/7 phone/chat/email; full Trusted Advisor checks; <1hr response for production down |
| **Enterprise On-Ramp** | $5,500/month | Pool of TAMs; <30min response for business-critical |
| **Enterprise** | $15,000/month | Dedicated TAM; <15min response for critical; concierge support |

**Technical Account Manager (TAM)** — Provided with Enterprise On-Ramp and Enterprise plans. Proactive guidance and advocacy.

**Trusted Advisor Full Checks** — Available with Business and above.

### Free Tier
Three types:
- **Always free** — Lambda (1M requests/month), DynamoDB (25GB), CloudWatch (10 metrics)
- **12 months free** — EC2 t2.micro (750 hrs/month), S3 (5GB), RDS (750 hrs/month)
- **Trials** — Short-term trials of specific services

---

## Key Concepts to Remember

### High Availability vs Fault Tolerance vs Disaster Recovery
- **High Availability (HA)** — System remains operational with minimal downtime (e.g. Multi-AZ RDS)
- **Fault Tolerance** — System continues operating despite component failure (no downtime)
- **Disaster Recovery** — Recover from a major failure; measured by RTO and RPO

### Scalability Types
- **Vertical scaling (Scale Up)** — Add more power to existing instance (bigger instance type)
- **Horizontal scaling (Scale Out)** — Add more instances (Auto Scaling + ELB)

### RTO vs RPO
- **RTO** (Recovery Time Objective) — How quickly must you recover?
- **RPO** (Recovery Point Objective) — How much data loss is acceptable?

### Common Architecture Patterns
- **Multi-AZ** — Deploy across multiple AZs for high availability
- **Multi-Region** — Deploy across multiple regions for disaster recovery / global performance
- **Decoupled architecture** — Use SQS/SNS between components
- **Serverless** — Lambda + API Gateway + DynamoDB

### Elasticity vs Scalability
- **Scalability** — Ability to handle increased load (can scale up/out)
- **Elasticity** — Ability to scale up AND scale back down automatically

---

## Quick Reference: "Which Service For…?"

| Scenario | Service |
|---|---|
| Host a static website | S3 |
| Run a virtual server | EC2 |
| Run code without servers | Lambda |
| Relational database (managed) | RDS or Aurora |
| NoSQL database | DynamoDB |
| Cache database queries | ElastiCache |
| CDN / serve content globally | CloudFront |
| DNS management | Route 53 |
| Send emails / SMS / push | SNS |
| Queue between microservices | SQS |
| Monitor metrics and logs | CloudWatch |
| Audit who did what in your account | CloudTrail |
| Check for security vulnerabilities | Inspector or GuardDuty |
| Find sensitive data in S3 | Macie |
| Provision infrastructure as code | CloudFormation |
| Connect on-premises to AWS (private) | Direct Connect |
| Connect on-premises to AWS (internet) | Site-to-Site VPN |
| Store secrets and passwords | Secrets Manager |
| Manage encryption keys | KMS |
| Estimate AWS costs | Pricing Calculator |
| Set cost alerts | AWS Budgets |
| Analyse spending trends | Cost Explorer |
| Get compliance reports | AWS Artifact |
| Run containers without managing servers | Fargate |
| Move petabytes of data offline | Snowball / Snowmobile |
| Global edge network (non-CDN) | Global Accelerator |

---

## Migration & Cloud Adoption

### The 6 R's of Migration ⭐

| Strategy | Description | Example |
|---|---|---|
| **Rehost** ("Lift & Shift") | Move as-is to AWS | EC2 replacing on-prem server |
| **Replatform** ("Lift & Reshape") | Minor optimisations, no code changes | Move DB to RDS |
| **Repurchase** | Switch to a different product | Move CRM to Salesforce SaaS |
| **Refactor / Re-architect** | Redesign for cloud-native | Monolith → microservices + Lambda |
| **Retire** | Decommission what you don't need | Turn off unused apps |
| **Retain** | Keep on-premises for now | Legacy systems not ready to migrate |

### AWS Cloud Adoption Framework (CAF)
A framework to guide cloud migrations across 6 perspectives:
- **Business, People, Governance** (business side)
- **Platform, Security, Operations** (technical side)

### Migration Services

| Service | Purpose |
|---|---|
| **AWS Migration Hub** | Central place to track migration progress |
| **AWS Application Discovery Service** | Discovers on-prem servers, dependencies, and performance data |
| **AWS Database Migration Service (DMS)** | Migrate databases with minimal downtime |
| **AWS Server Migration Service (SMS)** | Migrate on-prem VMs to AWS |
| **AWS DataSync** | Automate data transfer between on-prem and AWS storage |

---

## Cost Optimisation Extras

### AWS Compute Optimizer
Uses ML to analyse EC2 usage and recommend **right-sizing** (e.g. downgrade an over-provisioned instance). Free service.

### AWS Cost Anomaly Detection
Automatically detects unusual spending using ML and alerts you. Works with AWS Budgets.

### Total Cost of Ownership (TCO)
- **AWS Pricing Calculator** — Estimate future AWS costs
- When comparing on-prem vs cloud, factor in: hardware, facilities, power, cooling, staff, and licensing — not just compute costs
- Moving to cloud typically **reduces TCO** even if per-unit compute cost looks similar

---

## Security Extras

### IAM Access Analyzer
Identifies resources (S3 buckets, IAM roles, etc.) shared with **external entities** — helps find unintended public or cross-account access.

### AWS Resource Access Manager (RAM)
Share AWS resources (subnets, Transit Gateways, etc.) **across accounts** within your AWS Organisation.

### VPC Flow Logs
Capture IP traffic information going to/from network interfaces in your VPC. Used for **security analysis and troubleshooting** — sent to CloudWatch or S3.

### AWS CloudHSM
**Dedicated Hardware Security Module** — you manage the keys entirely. More control than KMS. Used for strict compliance requirements.

| | KMS | CloudHSM |
|---|---|---|
| Key management | AWS manages hardware | You manage keys entirely |
| Multi-tenant | Yes | No (dedicated) |
| Cost | Lower | Higher |
| Use case | General encryption | Strict compliance |

---

## Networking Extras

### Direct Connect vs VPN

| | Direct Connect | Site-to-Site VPN |
|---|---|---|
| Connection | Private, dedicated line | Encrypted over public internet |
| Speed | Up to 100 Gbps | Limited by internet |
| Setup time | Weeks | Minutes |
| Cost | Higher | Lower |
| Reliability | Very high | Dependent on internet |

> Exam tip: If a question mentions **consistent, low-latency, high-throughput** connection to on-prem → **Direct Connect**

### Route 53 Routing Policies

| Policy | Use Case |
|---|---|
| **Simple** | Single resource |
| **Weighted** | A/B testing, gradual traffic shifts |
| **Latency** | Route to lowest-latency region |
| **Failover** | Active/passive — failover to backup |
| **Geolocation** | Route based on user's location |
| **Geoproximity** | Route based on geographic distance (with bias) |
| **Multi-value** | Return multiple healthy records |

---

## S3 Features

| Feature | What it does |
|---|---|
| **Versioning** | Keep multiple versions of objects; protects against accidental deletion |
| **Object Lock / WORM** | Write Once Read Many — prevents deletion for compliance |
| **MFA Delete** | Requires MFA to delete objects or disable versioning |
| **Cross-Region Replication (CRR)** | Automatically replicate objects to another region |
| **Same-Region Replication (SRR)** | Replicate within the same region |
| **S3 Transfer Acceleration** | Speeds up uploads using CloudFront edge locations |
| **Lifecycle Policies** | Automatically transition objects between storage classes or delete them |
| **Static Website Hosting** | Host a static site directly from an S3 bucket |
| **Pre-signed URLs** | Grant temporary access to private objects |

---

## Governance & Multi-Account Extras

### AWS Control Tower
Automates setting up a secure, multi-account AWS environment (called a **Landing Zone**) with pre-configured guardrails.

### Service Control Policies (SCPs)
Applied via AWS Organizations — restrict what **member accounts** can do, even for admins. SCPs don't grant permissions — they set the maximum permissions boundary.

### AWS License Manager
Track, manage, and control software licenses (Windows Server, SQL Server, etc.) to avoid compliance violations.

---

## Commonly Confused Services — Cheat Sheet

| Pair | Key Distinction |
|---|---|
| **CloudWatch vs CloudTrail** | CloudWatch = performance metrics & logs; CloudTrail = API audit trail |
| **Inspector vs GuardDuty** | Inspector = scan MY resources for vulnerabilities; GuardDuty = detect threats from activity logs |
| **Macie vs Inspector** | Macie = sensitive data in S3; Inspector = vulnerabilities in EC2/containers |
| **Config vs CloudTrail** | Config = what did my resources look like over time; CloudTrail = who made API calls |
| **SQS vs SNS** | SQS = queue (pull, 1 consumer); SNS = pub/sub (push, many subscribers) |
| **Direct Connect vs VPN** | Direct Connect = private, fast, expensive; VPN = internet, quick to set up, cheaper |
| **WAF vs Shield** | WAF = filter bad web traffic (layer 7); Shield = DDoS protection |
| **Secrets Manager vs Parameter Store** | Secrets Manager = auto-rotation, costs money; Parameter Store = cheaper, no auto-rotation |
| **EBS vs EFS vs S3** | EBS = one EC2 block storage; EFS = shared file system; S3 = object storage |
| **Reserved Instances vs Savings Plans** | RI = specific instance type/region; Savings Plans = more flexible commitment |
| **KMS vs CloudHSM** | KMS = AWS managed hardware, multi-tenant; CloudHSM = dedicated, you control keys |
| **Compute Optimizer vs Trusted Advisor** | Compute Optimizer = ML-based right-sizing for EC2; Trusted Advisor = broad best practice checks |

---

## Exam Tips

1. **Know the Shared Responsibility Model cold** — It appears in many questions.
2. **Understand IAM thoroughly** — Users, groups, roles, policies, MFA, least privilege.
3. **Know which support plan includes what** — TAMs, Trusted Advisor, response times.
4. **Differentiate similar services** — SQS vs SNS, CloudTrail vs CloudWatch vs Config, Inspector vs GuardDuty vs Macie.
5. **Always think "most cost-effective"** — Questions often ask for the cheapest solution that meets requirements.
6. **Global Infrastructure** — Know Regions, AZs, and Edge Locations and when to use each.
7. **Free Tier** — Know what's always free vs 12-month free.
8. **Data transfer costs** — Inbound is free; outbound has a cost; same-AZ is free with private IP.
9. **Reserved vs Spot vs On-Demand** — Match purchase option to use case.
10. **Read every option carefully** — AWS exam questions are precise; watch for "automatic", "managed", "without additional cost".

---

*AWS Certified Cloud Practitioner CLF-C02 | Study Guide*
