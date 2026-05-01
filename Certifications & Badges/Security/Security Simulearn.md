# Core Security Concepts

The goal of this project was to implement AWS Identity and Access Management (IAM) policies, users, groups, and roles for a stock exchange to enforce the principle of least privilege, ensuring support engineers have only the permissions necessary for their specific job functions.

## Theory & the "Why"

**Principle of Least Privilege & Role-Based Access Control (Minimizing Security Risk):**
This is the primary reason for implementing granular IAM policies. Stock exchanges handle extremely sensitive financial data where unauthorized access or accidental misconfigurations could have catastrophic consequences. By granting users only the minimum permissions they need to perform their jobs, organizations reduce attack surface and limit damage from both external breaches and insider threats. This enables use cases such as:

* IAM policies that grant specific permissions (read-only, EC2 restart, S3 access) to defined resources
* IAM groups for organizing users by role (support engineers, developers, administrators)
* IAM roles for temporary, assumable permissions with automatic credential rotation
* Multi-factor authentication (MFA) for additional identity verification layers

The stock exchange did not want support engineers having broad administrative access that could accidentally or maliciously disrupt trading systems, so role-based IAM policies work well here especially in highly regulated financial environments where audit trails and access controls are mandatory. Due to IAM's granular permission model, you get precision: support engineers can restart specific EC2 instances or read CloudWatch logs without gaining broader access to modify security groups or delete databases. AWS also provides policy simulation tools and access analyzer to verify permissions before granting them.

In essence, you implement core security concepts when you need to protect critical systems through identity-based access controls, ensuring the stock exchange's support team can perform their duties efficiently while preventing unauthorized actions that could compromise trading infrastructure or violate regulatory requirements.


<img width="941" height="702" alt="Screenshot 2026-02-16 094934" src="https://github.com/user-attachments/assets/ccfdfd37-946d-45ea-a624-946d19c0e01a" />


<img width="1200" height="668" alt="CoreSecurityConcepts" src="https://github.com/user-attachments/assets/552d20a0-dd32-442d-9274-32f97b3a35e0" />

