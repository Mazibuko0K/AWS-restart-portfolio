# Auto Healing and Scaling Applications

The goal of this project was to implement Amazon EC2 Auto Scaling to automatically maintain application availability and dynamically adjust capacity based on demand, ensuring optimal performance while minimizing costs.

## Theory & the "Why"

**High Availability & Automatic Recovery (Resilient Infrastructure):**
This is the primary reason for using Auto Scaling with auto healing capabilities. Auto Scaling Groups (ASGs) continuously monitor the health of EC2 instances and automatically replace unhealthy instances, while also scaling capacity up or down based on demand. This enables use cases such as:

* Web applications with variable traffic patterns
* Microservices and containerized workloads
* Batch processing and scheduled workloads
* Mission-critical applications requiring high uptime

The customer did not want to manually intervene during traffic spikes or instance failures, so an automated solution works well here—especially when paired with CloudWatch alarms and target tracking policies. Due to the self-healing nature of Auto Scaling, you get continuous availability: if an instance fails health checks, it's automatically terminated and replaced. Auto Scaling also optimizes costs by scaling in during low-demand periods and scaling out during peak times.

In essence, you implement Auto Scaling with auto healing when you need a resilient, cost-effective, and self-managing infrastructure that automatically responds to both failures and changing demand without manual intervention.

![Screenshot_23-2-2026_114513_](https://github.com/user-attachments/assets/c497b0dd-62db-42d9-98d1-988f441ce4ec)
