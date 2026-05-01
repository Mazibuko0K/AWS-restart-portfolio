# Networking Concepts

The goal of this project was to design and implement a secure VPC network architecture for a bank using public and private subnets, route tables, Internet Gateways, and NAT Gateways to control which resources can communicate with the internet while keeping sensitive systems isolated.

## Theory & the "Why"

**Network Segmentation & Controlled Internet Access (Defense in Depth for Financial Data):**
This is the primary reason for understanding VPC networking fundamentals. Banks must strictly control which resources are exposed to the internet and which remain completely private. Public subnets host internet-facing resources like web servers, while private subnets protect sensitive databases and application servers that should never accept direct internet connections. This enables use cases such as:

* Public subnets with Internet Gateways for customer-facing web applications
* Private subnets for databases and internal application servers with no direct internet access
* NAT Gateways allowing private subnet resources to initiate outbound connections (for updates, API calls)
* Route tables defining traffic flow and network boundaries between subnet types

The bank did not want their customer databases or internal systems directly exposed to the internet, so a segmented network architecture with public/private subnets works well here especially when regulatory compliance (PCI-DSS, SOC 2) requires strict network isolation. Due to VPC's routing architecture, you get security: private subnet resources cannot receive inbound internet traffic, but can still download patches or call external APIs through NAT Gateways. AWS also provides security groups and network ACLs as additional layers of traffic control.

In essence, you implement networking concepts when you need to build secure, compliant network architectures that protect sensitive financial data while still enabling necessary internet connectivity for public-facing services and outbound communication from internal systems.

<img width="1054" height="717" alt="Screenshot 2026-02-04 064257" src="https://github.com/user-attachments/assets/fbd30144-9963-40ff-82de-87180730ca07" />
