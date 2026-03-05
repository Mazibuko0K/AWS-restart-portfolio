# Computing Solutions

The goal of this project was to upgrade a school's class scheduling system by selecting and implementing the appropriate EC2 instance type to meet increased computing power and memory requirements, demonstrating how to match workload demands with optimal compute resources.

## Theory & the "Why"

**Instance Type Selection & Vertical Scaling (Right-Sizing Compute Resources):**
This is the primary reason for understanding EC2 instance families and types. Different workloads require different combinations of CPU, memory, storage, and network capacity. Selecting the wrong instance type can lead to either wasted money on over-provisioned resources or poor performance from under-provisioned ones. This enables use cases such as:

* Memory-optimized instances (R-family) for in-memory databases and caching
* Compute-optimized instances (C-family) for batch processing and high-performance computing
* General-purpose instances (T/M-family) for balanced web applications
* Storage-optimized instances (I/D-family) for data warehousing

The school did not want to continue experiencing performance issues with their current instance, so upgrading to a properly sized EC2 instance works well here—especially when workload requirements have grown beyond the original deployment. Due to the flexibility of EC2, you get adaptability: instances can be stopped, resized, and restarted with minimal downtime, allowing infrastructure to evolve with application needs. AWS also offers a wide range of instance types optimized for specific workload characteristics.

In essence, you implement computing solutions when you need to align your infrastructure with actual application requirements, ensuring the class scheduling system has adequate resources to handle increased demand without overpaying for unnecessary capacity.

<img width="584" height="427" alt="Screenshot 2026-02-09 111032" src="https://github.com/user-attachments/assets/3733671b-97d0-46c8-a99a-20d49188470a" />
