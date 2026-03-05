# Databases in Practice

The goal of this project was to implement Amazon RDS (Relational Database Service) for an insurance company to eliminate manual database administration tasks and improve availability through automated management and Multi-AZ deployments.

## Theory & the "Why"

**Managed Database Services & Automated Operations (Focus on Data, Not Infrastructure):**
This is the primary reason for using Amazon RDS over self-managed databases on EC2. RDS automates time-consuming operational tasks like patching, backups, software updates, and infrastructure provisioning, freeing database administrators to focus on data modeling, query optimization, and application performance rather than routine maintenance. This enables use cases such as:

* Automated patch management and version upgrades with maintenance windows
* Multi-AZ deployments for automatic failover and high availability
* Automated backups with point-in-time recovery capabilities
* Read replicas for scaling read-heavy workloads and reporting queries

The insurance company did not want their DBAs spending time on undifferentiated heavy lifting like patching servers or configuring replication, so a fully managed database service works well here especially when regulatory requirements demand high availability and disaster recovery capabilities. Due to RDS's automation, you get operational efficiency: AWS handles infrastructure management, monitoring, and failover while maintaining industry-standard database engines (MySQL, PostgreSQL, Oracle, SQL Server). RDS also provides Multi-AZ synchronous replication that automatically promotes standby instances during failures.

In essence, you implement Amazon RDS when you need enterprise-grade database capabilities without the operational overhead, ensuring the insurance company's critical data remains highly available while their database team focuses on strategic initiatives rather than routine maintenance tasks.

<img width="578" height="410" alt="Screenshot 2026-02-09 111608" src="https://github.com/user-attachments/assets/e84c909e-d49e-4e6a-bc01-daf9ac464bed" />


<img width="1200" height="664" alt="DatabasesinPractice" src="https://github.com/user-attachments/assets/78209ebb-e9b4-4f78-a53f-258c8d04007c" />

