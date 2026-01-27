# EC2 Instance Setup Lab
## Objective
The task was to deploy, monitor, and manage an EC2 instance. The objective was to launch an EC2 instance, with termination protections enabled using a User data script to deploy a simple web server.

## Key Concepts Covered
- Launching a web server with termination protection enabled
- Monitoring EC2 instances
- Modifying security groups to allow HTTP access
- Resizing Amazon EC2 instances to scale resources
- Testing termination protection
- Terminating EC2 instances

Step 1

---

## EC2 Instance Creation and Configuration

### Accessing EC2

![Screenshot_27-1-2026_75055_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/952d33f4-5ca1-48ad-9425-ff6f3bc9104e)

I accessed the AWS Management Console and selected the **EC2** service. From the EC2 dashboard, I navigated to **Running instances** and selected **Launch instances** to begin creating a new EC2 instance.

![Screenshot_27-1-2026_75130_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/642bd7a5-2d36-47fd-a539-d92ea95297b6)


### Instance Configuration

![Screenshot_27-1-2026_8136_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/4b5f4dec-b50e-41c6-aeb8-69843706fb28)

I named the instance **Web Server**.
The **Amazon Linux 2023 Kernel 6.1 AMI** was preselected as it is included in the free tier, so I kept the default selection.

![Screenshot_27-1-2026_75319_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/5960e304-2850-4770-86ce-562a62287f31)

![Screenshot_27-1-2026_75448_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/ecdda7ab-be23-4dd7-bdfb-92ab93b6ce2b)

For the instance type, I selected **t3.micro**, as it met my requirements.
I proceeded without creating a key pair, as one was not required.

![Screenshot_27-1-2026_75555_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/1463a07d-c032-406a-8c85-ddbe0350ed20)

![Screenshot_27-1-2026_75756_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/be56603b-0fae-45a8-ae9b-e5f709c2ffe9)

### Networking and Security

![Screenshot_27-1-2026_75956_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/c43c00ec-6d4b-4392-bd60-771025653183)

Under **VPC settings**, I selected **Lab VPC**.
I created and named a new security group and added appropriate descriptions. All default inbound security group rules were removed at this stage.

![Screenshot_27-1-2026_806_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/13089f1c-e203-450d-9d38-a2a0e6809f2d)



### Storage and Advanced Settings




I kept the default storage configuration to minimize costs.
In **Advanced details**, I enabled **termination protection** to prevent accidental deletion of the instance.

![Screenshot_27-1-2026_8454_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/6164d5d1-65fe-4613-a547-5260c72f23b2)

### User Data Script

In the **User data** section, I added a startup script to automate web server configuration. This script:

* Installs the Apache web server (httpd)
* Configures the service to start on boot
* Starts the web server
* Creates a basic web page

![Screenshot_27-1-2026_8856_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/11cca34f-6a22-4c78-8ff5-ccfd148d2a93)


After completing these settings, I selected **Launch instance**.

![Screenshot_27-1-2026_8924_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/4025a516-97e3-4d27-af4e-383ce75e6d41)

### Instance Verification

The instance launched successfully and passed all status checks.
While monitoring the instance, I used the EC2 console options to capture a screenshot of the running instance.

![Screenshot_27-1-2026_81725_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/58bcb59f-4d60-4e9a-b95c-4f014e67ef2d)

### Public Access Configuration

I copied the instance’s **public IPv4 address**.
Next, I navigated to **Security Groups**, selected the **Web Server security group**, and edited the inbound rules. I added a rule allowing **HTTP traffic** from **Anywhere (IPv4)** and saved the changes.

![Screenshot_27-1-2026_82733_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/676e9d93-d405-4874-9404-2058805ed5e0)

![Screenshot_27-1-2026_82854_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/b1ec521b-458c-43de-882e-6efef7231dd0)



---

## Instance Modification

### Stopping and Resizing the Instance

![Screenshot_27-1-2026_83059_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/c5042a62-9799-4234-a9ca-a7f2b772ae0f)

To resize the instance and modify storage, I first stopped the instance.
From **Actions -> Instance settings -> Change instance type**, I changed the instance type from **t3.micro** to **t3.small** and applied the update.

![Screenshot_27-1-2026_83314_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/b8bab5a9-d807-4fea-b5b6-c35144b02600)

### Modifying the EBS Volume

![Screenshot_27-1-2026_83415_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/9e257a8f-1f5b-4aca-80d7-0bfede7c7412)

![Screenshot_27-1-2026_83443_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/b6e7c710-1c99-45f0-a525-dbe433f8ee2a)

From the left navigation pane, I selected **Volumes**, chose the attached volume, and selected **Modify volume**.
I increased the volume size from **8 GB to 10 GB** and submitted the request.

![Screenshot_27-1-2026_83517_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/a44e8472-1b51-4b82-970f-39b89f5eb355)

![Screenshot_27-1-2026_83527_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/8516de3f-f446-4f08-89b9-12699b12e26d)


After the modification completed, I restarted the instance.

![Screenshot_27-1-2026_83817_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/625fab46-d9d2-4e97-b42b-3fe754378a98)

![Screenshot_27-1-2026_83836_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/cfe8de20-9fdb-4a4e-9c71-c27b864d634e)

---

## Termination Protection Validation and Cleanup

To confirm that termination protection was working, I attempted to terminate the instance via **Instance state -> Terminate instance**. The action failed as expected due to termination protection being enabled.

![Screenshot_27-1-2026_83941_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/8286bc2b-e4b4-4aac-a1ce-b293c914ddb7)

![Screenshot_27-1-2026_84012_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/dbc7b882-e706-46a3-bdf8-c45a9825efe4)

![Screenshot_27-1-2026_84218_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/589d83cb-0a6a-4835-90cd-30cd50fec5df)

I then disabled termination protection by editing the instance settings and saving the change.
Once disabled, I successfully terminated the instance.

![Screenshot_27-1-2026_84239_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/3faf0451-f7bb-4d20-b343-f81a2baea08b)

![Screenshot_27-1-2026_84527_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/5d2282db-e5c9-4532-a004-b6b1de557625)

![Screenshot_27-1-2026_84539_us-west-2 console aws amazon com](https://github.com/user-attachments/assets/2f66ea91-340d-44ed-a9aa-542ae4155a03)





