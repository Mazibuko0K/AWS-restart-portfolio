# Task 1: Patch Linux Instances Using Default Baselines

In this task, I patched Linux EC2 instances using the default baselines available for the operating system.

Patch Manager provides predefined patch baselines for each supported OS. I can use these baselines as they are, or I can create my own custom baselines for greater control over which patches are approved or rejected in my environment.

1. In the AWS Management Console, I enter **Systems Manager** in the search box and select it. This takes me to the Systems Manager console page.
2. In the left navigation pane under **Node Management**, I choose **Fleet Manager**.

Here, I can see the pre-configured EC2 instances — three Linux instances and three Windows instances. These instances have an IAM role associated with them that allows me to manage them using Systems Manager, which is why I can view them in Fleet Manager.

3. I select the checkbox next to **Linux-1**, choose the **Node actions** dropdown, and select **View details**. Here, I can view details such as platform type, node type, OS name, and IAM role.
4. At the top of the page, I click **AWS Systems Manager** to return to the homepage.
5. In the left navigation pane, I choose **Patch Manager**.
6. I select **Start with an overview** (or proceed to the next step if this option does not appear).
7. I choose **Patch now** to patch the Linux instances using `AWS-AmazonLinux2DefaultPatchBaseline`.

Under **Basic configuration**, I set:

* **Patching operation:** Scan and install
* **Reboot option:** Reboot if needed
* **Instances to patch:** Patch only the target instances I specify
* **Target selection:** Specify instance tags

  * **Tag key:** Patch Group
  * **Tag value:** LinuxProd

I then choose **Add** and **Patch now**.

I observe the status of the patching. In the **AWS-PatchNowAssociation** panel, the **Status** field shows that three instances will be affected and their progress. The **Scan/Install operation summary** panel provides a visual overview of the affected EC2 instances. I monitor this page until the patch operation completes for all three instances.

---

# Task 2: Create a Custom Patch Baseline for Windows Instances

In this task, I create a custom patch baseline for Windows instances to focus on security updates.

1. I return to the **Systems Manager** console and select **Patch Manager** in the left navigation pane.
2. I select **Start with an overview** (or proceed to the next step).
3. I go to the **Patch baselines** tab and choose **Create patch baseline**.

For **Patch baseline details**, I configure:

* **Name:** WindowsServerSecurityUpdates
* **Description (optional):** Windows security baseline patch
* **Operating system:** Windows
* **Default patch baseline:** Leave unchecked

For **Approval rules for operating systems**, I configure the first rule:

* **Products:** WindowsServer2019 (deselect All)
* **Severity:** Critical
* **Classification:** SecurityUpdates
* **Auto-approval:** 3 days
* **Compliance reporting (optional):** Critical

I then **Add rule** for the second rule:

* **Products:** WindowsServer2019 (deselect All)
* **Severity:** Important
* **Classification:** SecurityUpdates
* **Auto-approval:** 3 days
* **Compliance reporting (optional):** High

Finally, I choose **Create patch baseline**.

Next, I modify a patch group to associate it with this baseline:

1. In **Patch baselines**, I select **WindowsServerSecurityUpdates**.
2. From the **Actions** dropdown, I choose **Modify patch groups**.
3. Under **Patch groups**, I enter **WindowsProd**, click **Add**, and then **Close**.

---

# Task 3: Patching the Windows Instances

## Task 3.1: Tagging Windows Instances

To target Windows instances for patching, I tag them:

1. In the AWS Management Console, I search for **EC2** and select it.
2. I select **Windows-1**, go to the **Tags** tab, and choose **Manage tags** → **Add new tag**:

   * **Key:** Patch Group
   * **Value:** WindowsProd
3. I click **Save** and repeat for **Windows-2** and **Windows-3**.

Linux instances were already tagged as `LinuxProd`.

---

## Task 3.2: Patching Windows Instances

1. I return to **Systems Manager** → **Patch Manager** → **Start with an overview**.
2. I choose **Patch now** and configure:

   * **Patching operation:** Scan and install
   * **Reboot option:** Reboot if needed
   * **Instances to patch:** Patch only the target instances I specify
   * **Target selection:** Specify instance tags

     * **Tag key:** Patch Group
     * **Tag value:** WindowsProd
3. I click **Add**, then **Patch now**.

A new page displays. When available, I click the **Execution ID** link to open the State Manager page. I choose the **Output** link for an instance marked **InProgress**.

By expanding the **Output panel**, I observe details of the patch operation. Behind the scenes, Patch Manager uses Run Command to execute `PatchBaselineOperations`, showing the **PatchGroup: WindowsProd** details.

---

# Task 4: Verifying Compliance

1. In Systems Manager, under **Patch Manager**, I select the **Dashboard** tab.
2. Under **Compliance summary**, I confirm **Compliant: 6**, verifying all Linux and Windows instances are compliant.
3. In **Compliance reporting**, I review all running instances with SSM to ensure the compliance status of all Linux and Windows instances is **Compliant**.
4. I scroll through the **Node patching details** panel to review for each instance:

   * Critical noncompliant count
   * Security noncompliant count
   * Other noncompliant count
   * Last operation date
   * Baseline ID
5. I select a **Node ID** for a Windows instance, go to the **Patch** tab, and verify what patches were applied and their installed time.

---

# Conclusion

* I patched Linux instances using the default baseline.
* I created a custom patch baseline for Windows instances.
* I used patch groups to patch Windows instances using the custom baseline.
* I verified that all instances are compliant.

