# Cloud First Steps

The goal of this project was to implement a multi-Availability Zone (AZ) architecture for an island stabilization team's system, demonstrating how AWS regions and availability zones provide fault tolerance and high availability for mission-critical applications.

## Theory & the "Why"

**Geographic Redundancy & High Availability (Eliminating Single Points of Failure):**
This is the primary reason for understanding AWS global infrastructure. Deploying resources across multiple Availability Zones within a region ensures that if one data center experiences an outage, the application continues running from another physically separate location. This is foundational knowledge for building resilient systems. This enables use cases such as:

* Multi-AZ deployments for critical applications requiring 99.99% uptime
* Automatic failover between availability zones during infrastructure failures
* Load distribution across geographically separated data centers
* Disaster recovery and business continuity planning

The island stabilization team did not want their system to go offline due to a single data center failure, so a multi-AZ deployment works well here—especially for systems where downtime could have serious consequences. Due to AWS's infrastructure design, you get resilience: each Availability Zone has independent power, cooling, and networking, so failures are isolated and don't cascade. AWS also connects AZs with high-bandwidth, low-latency networking, enabling synchronous replication.

In essence, you implement multi-AZ architecture when you need to ensure your application remains available even during infrastructure failures, making it perfect for the stabilization team's reliability requirements where system uptime is non-negotiable.



<img width="577" height="414" alt="Screenshot 2026-02-09 110643" src="https://github.com/user-attachments/assets/98727465-411c-4f95-be1b-d59502138478" />
