# Auto-Healing and Scaling Applications

The goal of this project was to implement an Amazon EC2 Auto Scaling Group for a gaming café to automatically replace failed servers while maintaining strict capacity limits, demonstrating how to balance high availability with controlled provisioning costs.

## Theory & the "Why"

**Automated Health Monitoring & Capacity Controls (Self-Healing with Budget Constraints):**
This is the primary reason for using Auto Scaling Groups with defined capacity limits. Gaming cafés need their servers to automatically recover from failures to maintain customer experience, but they also need to cap the number of running instances to control costs and prevent unlimited scaling. This enables use cases such as:

* Health checks that automatically terminate and replace unhealthy EC2 instances
* Minimum, maximum, and desired capacity settings to control infrastructure costs
* Automatic recovery from instance failures without manual intervention
* Predictable server capacity aligned with business requirements

The gaming café did not want to manually monitor and restart failed servers or risk runaway costs from uncapped scaling, so an Auto Scaling Group with capacity restrictions works well here—especially when balancing uptime requirements with budget constraints. Due to the self-healing nature of ASGs, you get reliability: when an instance fails health checks, it's automatically terminated and a replacement is launched within the defined capacity limits. AWS also provides health check grace periods and cooldown timers to prevent premature terminations.

In essence, you implement auto-healing with capacity controls when you need guaranteed server availability within defined limits, ensuring the gaming café's servers stay online for customers while operational costs remain predictable and controlled.

![Screenshot_23-2-2026_114513_](https://github.com/user-attachments/assets/c497b0dd-62db-42d9-98d1-988f441ce4ec)
