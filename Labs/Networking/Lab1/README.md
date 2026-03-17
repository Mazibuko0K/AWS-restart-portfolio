# Task 1: Investigate My Environment

I recall that I previously covered public and private IP addresses and CIDRs. As I go through this lab, I will pay attention to the differences between public and private IP addresses for this task. For task 2, I will consider the importance of using private IP ranges rather than public IP ranges.

> **Note:**
> For this lab, I have already checked the AWS architecture, and everything is routed and attached correctly. This lab does not cover any AWS architecture.

In this scenario, Jess, the customer requesting assistance, has two EC2 instances in one VPC. Instance A cannot reach the internet, while instance B can, even though they are configured the same within the VPC. Currently, the AWS architecture seems sound because one of the instances works. Jess suspects that the instance configuration may be the issue.

Jess also asked about using a public range of IP addresses for the new VPC and requested further insight.

I currently have one VPC with a CIDR of `10.0.0.0/16` and two instances — instance A and instance B — with the same configurations as the customer. When troubleshooting networking and AWS, I can use a method where I start from the top and work my way down, or start from the bottom and work my way up. I choose to start troubleshooting from the bottom and work up in layers, similar to the OSI model. At the very bottom of this architecture is the EC2 instance. Although the cloud architecture does not directly map to the OSI model, this analogy helps me understand the troubleshooting steps.

Once I am in the AWS console, I type **EC2** in the search bar at the top-left corner and select **EC2** from the list.

I am now in the Amazon EC2 dashboard. In the left navigation menu, I choose **Instances**. This shows me my current EC2 instances — I should see two instances.

I copy and paste the names and IP addresses of both instances into a text editor for reference. I then select the checkbox next to instance A, go to the **Networking** tab at the bottom, and note the Public and Private IPv4 addresses. After copying the information, I deselect instance A and repeat the same steps for instance B. I then compare them and note any differences.

---

# Task 2: Use SSH to Connect to an Amazon Linux EC2 Instance

In this task, I will connect to an Amazon Linux EC2 instance using an SSH utility.

## Windows Users: Using SSH to Connect

1. I select the **Details** drop-down menu above these instructions and then select **Show**. A **Credentials** window appears.
2. I select the **Download PPK** button and save the `labsuser.ppk` file. Typically, my browser saves it to the **Downloads** folder.
3. I make a note of the **Public IP address**.
4. I exit the **Details** panel by selecting the X.
5. I download **PuTTY** to SSH into the Amazon EC2 instance. If I don’t have PuTTY installed on my computer, I download it from the provided link.
6. I open `putty.exe`.
7. I configure my PuTTY session by following the directions in this guide: [Connect to your Linux instance using PuTTY](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html).


