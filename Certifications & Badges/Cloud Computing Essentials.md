# Cloud Computing Essentials

The goal of this project was to migrate a beach wave conditions web page to AWS core services (EC2, VPC, S3, and security groups) to improve reliability and availability, demonstrating how fundamental cloud infrastructure components work together to create a resilient web hosting solution.

## Theory & the "Why"

**Infrastructure Foundation & Service Integration (Building Reliable Web Hosting):**
This is the primary reason for understanding AWS core services. A web page experiencing reliability issues needs proper cloud infrastructure—compute resources that stay available, network isolation for security, and potentially object storage for static content. Combining EC2, VPC, and S3 creates a foundational architecture that's more reliable than a single server. This enables use cases such as:

* EC2 instances for hosting dynamic web applications
* VPCs for network isolation and security boundaries
* S3 for storing and serving static assets (images, CSS, JavaScript)
* Security groups acting as virtual firewalls to control traffic

The web team did not want their beach conditions page to experience downtime or performance issues during peak surf season, so a properly architected cloud solution works well here—especially when moving from unreliable hosting to AWS's proven infrastructure. Due to the integrated nature of AWS services, you get stability: EC2 provides compute, VPC ensures secure networking, and S3 offers durable storage, all working together seamlessly. AWS also provides built-in redundancy and monitoring capabilities that improve upon traditional hosting.

In essence, you implement cloud computing essentials when you need to build a reliable web presence using foundational AWS services, ensuring the wave conditions page remains accessible for beachgoers checking surf reports without interruption.

<img width="614" height="487" alt="image" src="https://github.com/user-attachments/assets/b5724232-cf26-40e4-a5bc-e546f8de7438" />
