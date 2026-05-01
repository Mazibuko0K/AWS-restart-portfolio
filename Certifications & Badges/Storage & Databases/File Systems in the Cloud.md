# File Systems in the Cloud

The goal of this project was to implement Amazon EFS to provide a fully managed, scalable file system that can be accessed across multiple branch locations (in this case, for a pet store).

## Theory & the “Why”

**Shared Access (Centralized Data Source):**
This is the primary reason for using EFS. Multiple EC2 instances (up to thousands) can concurrently read from and write to the same EFS file system, even across different Availability Zones (AZs). This enables use cases such as:

* Web serving and content management systems
* Container storage
* Enterprise applications and home directories
* Big data and analytics

The customer did not want to manage the backend infrastructure, so a “set it and forget it” solution works well here—especially when paired with Auto Scaling. Due to the nature of EFS storage, you get persistent data: if one EC2 instance goes down, another instance can still access the same data. EFS also integrates well with on-premises systems, enabling a hybrid cloud workflow.

In essence, you mount EFS to EC2 instances when you need a resilient, scalable, and easy-to-manage file system that can be accessed simultaneously by multiple compute resources.



<img width="1005" height="766" alt="Screenshot 2026-02-03 123308" src="https://github.com/user-attachments/assets/c65e5c4e-b22d-4069-b421-44dbeeaa3806" />
figure A: certificate of completion.

<img width="1500" height="943" alt="FileSystemsintheCloud" src="https://github.com/user-attachments/assets/790feb92-9cc5-4ddb-9d8d-ceab221afbbc" />
Figure B: Simple model on how this works.
