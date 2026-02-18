# Entry & Edge Layer - Why I Chose These

### **Amazon Route 53**

I chose Route 53 because I need a highly available and globally distributed DNS layer. It gives me:

* Reliable domain resolution
* Health checks for failover
* Tight integration with CloudFront and ALB

It acts as my resilient entry point into the system.

---

### **Amazon CloudFront**

Since customers interact with 3D models, latency matters. I use CloudFront to:

* Cache static 3D assets and frontend files
* Reduce origin load
* Improve global performance
* Absorb traffic spikes

It also allows security controls to be enforced at the edge before traffic reaches my VPC.

---

### **AWS WAF**

I use WAF to filter malicious requests at Layer 7. This protects against:

* Common OWASP attacks
* Injection attempts
* Bot abuse
* Excessive request rates

It reduces risk before traffic reaches compute.

---

### **AWS Shield**

Shield protects the system from volumetric DDoS attacks at the network layer. Since I’m exposing an e-commerce app publicly, availability protection is critical.

---

# Compute & Networking - My Approach

### **Amazon Elastic Load Balancing (ALB)**

I use ALB because:

* It distributes traffic across multiple AZs
* It performs health checks
* It supports Layer 7 routing
* It integrates with WAF

It ensures no single compute instance becomes a failure point.

---

### **AWS Fargate**

I chose Fargate to avoid managing EC2 instances. My goals were:

* Stateless compute
* Automatic scaling
* Reduced operational overhead

I prioritized operational simplicity over deep infrastructure control.

---

# Data & Storage - Design Decisions

### **Amazon DynamoDB**

I selected DynamoDB because:

* Traffic is unpredictable
* I need automatic scaling
* It provides built-in multi-AZ replication
* It is fully managed

Tradeoff: I sacrifice relational joins and complex query flexibility for scalability and operational ease.

---

### **Amazon S3**

S3 stores:

* 3D models
* Static assets
* Media

It offers extreme durability and integrates directly with CloudFront. Since rendering is client-side, S3 primarily serves as durable asset storage.

---

### **Amazon ElastiCache**

I added ElastiCache to:

* Reduce read pressure on DynamoDB
* Improve response times
* Handle frequently accessed data

The tradeoff is cache invalidation complexity, but performance gains justify it.

---

# Private Connectivity - Why It Matters

### VPC Gateway Endpoints (S3 & DynamoDB)

I use gateway endpoints so traffic from private subnets:

* Never traverses the public internet
* Does not require NAT
* Reduces data transfer costs
* Improves security posture

This keeps my compute layer fully private.

---

# Observability & Governance - Defense in Depth

### **Amazon CloudWatch**

Used for metrics, logs, alarms, and scaling triggers.

### **AWS CloudTrail**

Tracks API activity for auditing and compliance.

### **Amazon GuardDuty**

Provides intelligent threat detection.

### **AWS Config**

Monitors configuration drift.

### **AWS Secrets Manager**

Prevents hardcoded credentials and supports automatic rotation.

I implemented layered monitoring instead of relying on a single security mechanism.

---

# Cost Management - Why This Model Works

I designed the system around elasticity:

* Fargate scales per demand
* DynamoDB on-demand pricing
* CloudFront reduces origin costs
* VPC endpoints reduce NAT charges

With budgets, cost anomaly detection, and Trusted Advisor, I maintain cost visibility and control.

---

# How My Architecture Meets the 5 Requirements

## High Availability

* Multi-AZ deployment
* Managed services with built-in redundancy
* ALB health checks
* Edge-level resilience

I removed single points of failure.

---

## Scalability

* Stateless compute
* Auto-scaling Fargate
* DynamoDB elastic throughput
* CloudFront absorbing global traffic

Scaling happens at every layer.

---

## Performance

* Edge caching
* In-memory caching
* Client-side rendering
* Private low-latency service access

Performance is optimized from user to database.

---

## Security

* Edge protection (WAF + Shield)
* Private subnets for compute
* VPC endpoints for internal services
* IAM least privilege
* Monitoring and audit controls

Security is layered, not centralized.

---

## Cost Optimization

* Pay-per-use compute
* No idle servers
* Reduced data transfer
* Auto-scaling instead of overprovisioning

The architecture aligns cost with traffic demand.

---

# My Core Tradeoff Strategy

I intentionally chose:

* Managed services over custom infrastructure
* Multi-AZ over multi-region
* Scalability over relational flexibility
* Operational simplicity over full control

This design favors resilience, elasticity, and maintainability for an unpredictable e-commerce workload with interactive 3D assets.

![Untitled Diagram](https://github.com/user-attachments/assets/034a0523-29aa-4fb7-a4d4-8c99796717cf)

