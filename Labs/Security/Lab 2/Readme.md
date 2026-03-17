# Task 1: Activate Amazon Inspector

In this task, I activated and ran Amazon Inspector to continuously scan my Lambda functions.

1. In the AWS Management Console, I typed **Inspector** in the search bar and selected it.
2. I opened the panel on the left and chose **Activate Inspector** to enable it for my account.
3. Under **Activate Inspector**, I clicked the **Activate Inspector** button.

> 📝 **Note:** This activation is only needed the first time.

After activation, I saw a message at the top: *Welcome to Inspector. Your first scan is underway.*

I canceled the feedback survey if prompted and closed all banner messages on the page.

I periodically refreshed the page until the **Dashboard → Summary → Environment Coverage → Lambda functions** metric reached **100%**.

By default, Inspector scanning is activated for:

* Amazon EC2 instances
* Amazon ECR container images
* AWS Lambda functions (standard scanning)

---

# Task 2: Reviewing the Inspected Resources

While waiting for the scan to complete, I reviewed my lab environment to understand which resources Amazon Inspector was scanning — including EC2 instances and Lambda functions.

## Task 2.1: Reviewing My Lambda Functions

1. In the left navigation pane, I selected **Findings → All Findings**.
2. Three rows appeared, each representing a vulnerability detected within a Lambda function. Key details included:

| Detail                | Description                  |
| --------------------- | ---------------------------- |
| **Severity**          | Medium                       |
| **Impacted Resource** | The affected Lambda function |
| **Title**             | The reason for the finding   |

3. I selected the radio button for **CVE-2023-32681 - requests** to open its detail pane.
4. In the **Vulnerability Details** section, I clicked the external link next to the Vulnerability ID. This opened the National Vulnerability Database (NVD), which provided detailed information including the CVSS score, affected versions, and a description.
5. In the **Remediation** section of the pane, I noted that the `requests` package was vulnerable and outdated, and the recommendation was to upgrade the package.

---

# Task 3: Remediating Vulnerability Findings

In this task, I analyzed the findings reported by Amazon Inspector and updated my Lambda function to remediate the vulnerabilities. I then confirmed the remediation in Inspector.

## Task 3.1: Remediating My Lambda Function’s Package Vulnerabilities

1. In the AWS Management Console, I searched for **Lambda** and selected it.
2. From the list of Lambda functions, I chose the **get-request** function.
3. In the Lambda function code editor, I opened `requirements.txt`.
4. I removed the version number from `requests==2.20.0` so that the line became:

   ```
   requests
   ```

> 📝 **Note:** Without a version number, AWS Lambda installs the latest available version of the package, ensuring my function uses a secure version.

5. I clicked **Deploy** to deploy the updated function. A confirmation banner appeared: *Successfully updated the function get-request.*

This deployment automatically triggered Amazon Inspector to initiate a new scan of the function.

---

## Task 3.2: Confirm Remediation in Amazon Inspector

1. I navigated back to **Amazon Inspector**.
2. In the left navigation pane, under **Findings**, I selected **All Findings**.
3. I changed the **Finding Status** filter from **Active** to **Closed**.

The closed findings list displayed **CVE-2023-32681 - requests**, confirming that the vulnerability was successfully remediated.

> 📝 **Note:** It may take a few minutes for the scan to initiate and complete. I used the refresh button to view the latest status.

4. In the left navigation pane, under **Resources Coverage**, I selected **Lambda Functions**.
5. I expanded the **Last Scanned** column if needed and confirmed that the most recently scanned Lambda function displayed an updated timestamp, indicating that Inspector had re-scanned it post-deployment.

---

# Conclusion

I successfully:

* Activated and configured Amazon Inspector for my AWS account
* Analyzed and interpreted vulnerability findings for Lambda functions
* Remediated the `requests` package vulnerability (CVE-2023-32681)
* Verified that the remediation was recognized in Amazon Inspector
