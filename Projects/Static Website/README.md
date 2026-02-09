# Cafena Café Website Redesign and AWS Deployment Demonstration

## Abstract

This project presents the redesign of the Cafena Café website alongside the migration of its hosting infrastructure from a local cloud provider to Amazon Web Services (AWS). The objective is to improve performance, availability, scalability, and cost efficiency by adopting a cloud-native, serverless architecture. The solution utilises AWS S3 for static website hosting, CloudFront for content delivery, Route 53 for domain management, IAM for access control, and CloudWatch for basic monitoring. The project evaluates technical and financial implications and demonstrates the suitability of AWS for small-to-medium business web workloads.

---

## 1. Introduction

Cafena Café is a locally established business that has expanded into a regional operation through continuous innovation and service improvement. As the business grew, limitations in the existing website infrastructure became more apparent, particularly in terms of scalability, reliability, and operational cost.

This project aims to redesign the Cafena Café website and modernise its hosting infrastructure using AWS services. The focus is on providing a reliable, scalable, and cost-effective solution that supports current needs while remaining adaptable to future digital expansion.

---

## 2. Problem Statement

The existing hosting environment presented several challenges:

* Performance degradation during peak traffic periods
* Limited scalability combined with fixed and inflexible pricing
* Inconsistent availability and uptime
* Difficulty integrating advanced cloud services

These challenges negatively impacted both user experience and operational efficiency.

---

## 3. Business and Technical Impact

### 3.1 Hosting Model Comparison

| Factor            | AWS (S3)    | Local Cloud Provider | On-Premises             |
| ----------------- | ----------- | -------------------- | ----------------------- |
| Monthly cost      | Near $0     | Fixed monthly fee    | Fixed + operating costs |
| Pricing model     | Usage-based | Fixed plan           | Capital + maintenance   |
| Scalability       | Automatic   | Plan-based           | Manual                  |
| HTTPS             | Automatic   | Varies               | Complex                 |
| Maintenance       | None        | Minimal              | High                    |
| Disaster recovery | Built-in    | Limited              | Manual                  |

The comparison highlights AWS as the most cost-effective and scalable solution for a static website workload.

---

## 4. Project Deliverables

### 4.1 Static Website

A fully functional static website hosted on Amazon S3, including:

* Home page
* Menu section
* Booking section
* Order submission form

### 4.2 AWS Migration Presentation

A structured presentation covering:

* Existing challenges and business impact
* Market cost comparison
* Detailed cost analysis
* Proposed AWS architecture
* Support and service considerations
* Benefits of migration

---

## 5. AWS Architecture and Implementation

### 5.1 Services Used

| Requirement       | AWS Service | Purpose                                   |
| ----------------- | ----------- | ----------------------------------------- |
| Website hosting   | Amazon S3   | Static website hosting and asset storage  |
| Domain management | Route 53    | Custom domain configuration               |
| Content delivery  | CloudFront  | Global caching and reduced latency        |
| Access control    | IAM         | Secure identity and permission management |
| Monitoring        | CloudWatch  | Basic metrics and operational visibility  |

---

## 6. Cost Analysis

### 6.1 Monthly Cost Scenarios (ZAR)

| Scenario                   | Monthly Cost | Notes                                |
| -------------------------- | ------------ | ------------------------------------ |
| S3 only                    | R0           | Replacement for local static hosting |
| S3 + CloudFront            | R0           | Improved performance and caching     |
| S3 + CloudFront + Route 53 | ~R10 – R20   | Custom domain support                |
| CloudWatch                 | R0           | Optional monitoring                  |

**Estimated Monthly Cost:** **~R9.50 – R19.00**

### 6.2 Cost Justification

* Route 53 hosted zone: **$0.50/month ≈ R9.50**
* Minor DNS query charges may increase the total marginally
* Domain registration (**≈ $12/year ≈ R228/year**) is billed annually

This represents a significant reduction compared to fixed-cost local cloud hosting.

---
## 7 Presentation
<img width="1846" height="806" alt="Screenshot 2026-02-08 193114" src="https://github.com/user-attachments/assets/606ef1bf-1ec1-48a8-a588-c7851e5fd4c6" />
<img width="1852" height="799" alt="Screenshot 2026-02-08 193059" src="https://github.com/user-attachments/assets/4eb9f4d4-1c5f-4487-8068-9a459cd2d11f" />
<img width="1836" height="896" alt="Screenshot 2026-02-08 193041" src="https://github.com/user-attachments/assets/2f354e4a-94a7-4fb8-b386-18396d9aec20" />
<img width="1853" height="903" alt="Screenshot 2026-02-08 193136" src="https://github.com/user-attachments/assets/fcfc9ffe-7e4c-4d52-a61a-f2d2c322f74b" />



---

## 8. Deployment Methodology

1. Website files uploaded to Amazon S3
2. Static website hosting enabled
3. Bucket policies configured for controlled public access
4. CloudFront distribution configured for global delivery
5. Domain connected using Route 53

---

## 9. Testing and Validation

* Website content and media verified for correct loading
* Forms tested for correct submission behaviour
* CloudWatch used to observe basic metrics and availability

---

## 10. Conclusion

This project demonstrates that migrating a static business website from a local cloud provider to AWS can significantly reduce hosting costs while improving reliability, scalability, and security. AWS enables Cafena Café to focus on core business operations while benefiting from enterprise-grade infrastructure with minimal operational overhead. The implemented architecture is suitable for future expansion into additional digital services.

---

## 11. Future Work

Potential enhancements include:

* Online payment integration
* Customer loyalty and engagement features
* Advanced analytics and reporting
* Automated deployment using AWS CI/CD services

---

If you want, I can now:

* Align this to a **specific academic rubric**
* Add **citations and references**
* Convert it into a **formal report (PDF/Word)**
* Adapt it for **AWS Practitioner assessment language**


