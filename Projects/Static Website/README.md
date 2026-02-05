# Cafena Cafe Wesite & AWS Deployment Demonstation

This Projects demonstates the Redisgn of the Cafena website along with that fresh coat of paint is a whole new engine underneath the hood providing consistent performance even at peak capabilities, ths involves using aws services from hosting to using cloudfront.

## Overview
Cafena is a beloved Local Cafe that grew over the years into a regional powerhpuse thats continously innovates within the field. 

now the goal of this project was to provide a overhaul for the entire website and infrastructure, improving the website to provide consistency on the user-end.

---

### Current Problem

- Performance limitations during peaks hours or times with high traffic.
- limitedscalability alongside high costs that dont heave much flexibility. 
- inconsistent availability and availability.
- difficulty itegrating advance cloud services.

### business impact

**AWS vs Local Cloud vs On-Prem**

|Factor |	AWS (S3) |	Local Cloud	On-Prem |
|-------|----------|----------------------|
| Monthly cost |	Near $0 |	Fixed local fee |	Fixed + operating costs |
| Pricing model |	Usage-based	Fixed plan |	Capital + maintenance |
| Scaling |	Automatic |	Plan-based |	Manual |
| HTTPS |	Automatic |	Varies |	Complex |
| Maintenance |	None	Minimal	High |
| Disaster recovery |	Built-in |	Limited |	Manual |

---

## Project Deliverables

### Static Website
- Fully functional static website hosted on **AWS S3**
- Key features:
  - Home Page
  - Menu Section
  - Booking Section
  - Order Submission Form
 
### Aws Migration Presentation
- Slides covering:
  - Challenges and impact
  - Cost for Available options in the market
  - Cost analysis
  - Proposed AWS solution
  - Support and service
  - Benefits of migration
---

## Presentation

---

## AWS Implementation

### Services Used
| Requirement | AWS Service | Purpose |
|-------------|-------------|---------|
| Host website | S3 | Static website hosting & image storage |
| Domain management | Route 53 | Custom domain setup |
| Content delivery | CloudFront | Faster load times worldwide |
| Access control | IAM | Security and access management |
| Data monitering  | CloudWatch | basic monitoring of a static site |

| Scenario                   | Monthly Cost | Notes                                       |
| -------------------------- | ------------ | ------------------------------------------- |
| S3 only                    | R0           | Direct replacement for local static hosting |
| S3 + CloudFront            | R0           | Faster performance                          |
| S3 + CloudFront + Route 53 | ~R10 – R20   | Custom domain                               |
| CloudWatch                 | R0           | Optional monitoring                         |

### Monthly Cost: ~R9.50 – R19.00

#### S3 + CloudFront + Route 53

**Reasoning:**

Route 53 hosted zone: $0.50/month ≈ R9.50

Minor DNS query charges may push total close to R19 at most.

Domain registration (≈ $12/year ≈ R228/year) is billed annually, not monthly.

---

## Project Structure


---

## Deployment Steps
1. Upload website files to **S3**  
2. Enable **Static Website Hosting**  
3. Configure **Bucket Policy** for public access  
4. Use **CloudFront** for fast global delivery  
5. Connect domain using **Route 53**  

---

## Testing & Observations
- Forms tested for correct submission  
- Website content and media load properly from S3  
- Booking confirmations and menu access verified  
- CloudWatch used to monitor resource usage and availability  

---

## Conclusion
This project demonstrates how Nastro Bliss can:
- Streamline bookings and order management  
- Reduce operational errors and staff workload  
- Improve customer satisfaction and increase revenue  
- Leverage **AWS** for reliability, scalability, and cost-efficiency  



## Next Steps / Future Improvements
- Add **online payment integration**  
- Introduce **loyalty program features**  
- Enhance customer analytics and reporting  
- Automate website deployment via **AWS CI/CD tools**  
