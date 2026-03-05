# Highly Available Web Applications

The goal of this project was to implement an Elastic Load Balancer and Auto Scaling Group across multiple Availability Zones for a travel agency's web application, demonstrating how to eliminate single points of failure and maintain service availability during component failures.

## Theory & the "Why"

**Load Balancing & Redundant Architecture (Fault Tolerance for Customer-Facing Applications):**
This is the primary reason for using Application Load Balancers with Auto Scaling Groups. Travel agencies cannot afford downtime during peak booking seasons if a single server fails, customers should never experience interruptions. Distributing traffic across multiple instances in different AZs with automated health checks ensures continuous availability. This enables use cases such as:

* Traffic distribution across healthy instances in multiple Availability Zones
* Automatic removal of failed instances from the load balancer rotation
* Health checks that detect application-level failures, not just server failures
* Zero-downtime deployments and rolling updates

The travel agency did not want customers encountering errors or losing bookings due to server failures, so a load-balanced, multi-AZ architecture works well here especially during high-traffic periods like holiday booking seasons. Due to the ELB's health monitoring, you get resilience: unhealthy instances are automatically taken out of service while the load balancer routes traffic only to healthy targets, and Auto Scaling replaces failed instances automatically. AWS also provides cross-zone load balancing to evenly distribute traffic even if one AZ has more instances.

In essence, you implement highly available web applications when customer-facing services cannot tolerate downtime, ensuring the travel agency's booking platform remains accessible 24/7 even when individual servers or entire data centers experience failures.

<img width="614" height="482" alt="image" src="https://github.com/user-attachments/assets/74e7bc39-5e55-46ef-bbb3-4f0301e060a3" />
