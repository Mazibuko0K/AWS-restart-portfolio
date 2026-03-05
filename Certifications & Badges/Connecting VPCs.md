# Connecting VPCs

The goal of this project was to implement VPC peering connections for a marketing team to enable inter-departmental communication while maintaining network isolation, demonstrating how to securely connect separate Virtual Private Clouds without merging them into a single network.

## Theory & the "Why"

**Network Segmentation with Controlled Communication (Security Through Isolation):**
This is the primary reason for using VPC peering. Organizations often need to separate departments or environments into distinct VPCs for security, compliance, or organizational boundaries, but those VPCs still need to communicate. VPC peering creates private connections between VPCs without exposing traffic to the public internet. This enables use cases such as:

* Department-specific VPCs with selective cross-department access
* Development, staging, and production environment separation with controlled connectivity
* Shared services VPCs (like Active Directory) accessible from multiple application VPCs
* Multi-account architectures where different teams own separate VPCs

The marketing team did not want a flat network where all departments could access everything, so VPC peering with route table configurations works well here especially when security policies require departmental isolation with explicit, auditable connections. Due to VPC peering's architecture, you get both separation and connectivity: each department maintains its own isolated network environment while route tables control exactly which resources can communicate across VPC boundaries. AWS also keeps peered VPC traffic on the private AWS backbone, never traversing the public internet.

In essence, you implement VPC peering when you need the best of both worlds strong network boundaries between departments for security and compliance, while enabling the specific cross-VPC communication patterns required for collaboration and shared resources.

![Screenshot_23-2-2026_113341_](https://github.com/user-attachments/assets/74b7cd18-b83b-4319-8a3c-8d8e0a491564)
