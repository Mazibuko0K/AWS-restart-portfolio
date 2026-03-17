# Lab Overview and Objectives


In this lab, I work with a relational database instance to practice fundamental database operations. I focus on creating, modifying, viewing, and deleting databases and tables using SQL commands.


This lab demonstrates how to use common database and table operations.

---

# Task 1: Connect to the Command Host

In this task, I connect to an EC2 instance configured with a database client. This client allows me to run structured query language (SQL) queries against a relational database. This instance is referred to as the Command Host.

In the AWS Management Console, I choose the **Services** menu, then select **Compute**, and then **EC2**.

In the left navigation menu, I choose **Instances**.

Next to the instance labeled **Command Host**, I select the check box and then choose **Connect**.

**Note:** If I do not see the Command Host, the lab is likely still being provisioned, or I may be using a different Region.

For **Connect to instance**, I choose the **Session Manager** tab.

I choose **Connect** to open a terminal window.

**Note:** If the Connect button is not available, I wait a few minutes and try again.

To configure the terminal to access all required tools and resources, I run the following commands:

```
sudo su
cd /home/ec2-user/
```

## Recall Linux commands

To connect to the relational database instance, I run the following command in the terminal. A password was configured when the database was installed:

```
mysql -u root --password='re:St@rt!9'
```

The MySQL command-line client is an SQL shell that I use to interact with database engines.

| Switch           | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| -u or --user     | The MySQL user name used to connect to a database instance |
| -p or --password | The MySQL password used to connect to a database instance  |

**Tip:** At any stage of the lab, if the Session Manager window is not responsive or if I need to reconnect to the database instance, I follow these steps:

1. Close the Session Manager window and reconnect using the previous steps.
2. Run the following commands in the terminal:

```
sudo su
cd /home/ec2-user/
mysql -u root --password='re:St@rt!9'
```

---

# Task 2: Create a Database and a Table

To display the existing databases, I run the following query:

```
SHOW DATABASES;
```

I use this command to determine the available databases and ensure that I am working with the correct database instance.

To create a new database named `world`, I run:

```
CREATE DATABASE world;
```

To verify that the `world` database has been created, I run:

```
SHOW DATABASES;
```

To store data in a database, it must contain one or more tables. In an SQL database, each table requires a well-defined structure known as a schema.

To create a table named `country`, I run:

```
CREATE TABLE world.country (
  `Code` CHAR(3) NOT NULL DEFAULT '',
  `Name` CHAR(52) NOT NULL DEFAULT '',
  `Conitinent` enum('Asia','Europe','North America','Africa','Oceania','Antarctica','South America') NOT NULL DEFAULT 'Asia',
  `Region` CHAR(26) NOT NULL DEFAULT '',
  `SurfaceArea` FLOAT(10,2) NOT NULL DEFAULT '0.00',
  `IndepYear` SMALLINT(6) DEFAULT NULL,
  `Population` INT(11) NOT NULL DEFAULT '0',
  `LifeExpectancy` FLOAT(3,1) DEFAULT NULL,
  `GNP` FLOAT(10,2) DEFAULT NULL,
  `GNPOld` FLOAT(10,2) DEFAULT NULL,
  `LocalName` CHAR(45) NOT NULL DEFAULT '',
  `GovernmentForm` CHAR(45) NOT NULL DEFAULT '',
  `HeadOfState`
```
# Task 3: Delete a Database and Tables

In this task, I delete the `world` database and the `country` table.

The `DROP TABLE` command is used to delete (drop) a table in a database. Once a table has been dropped, it cannot be recovered unless a backup is available. To drop the `city` table, I run the following command:

```
DROP TABLE world.city;
```

---

# Conclusion

In this lab, I accomplished the following:

* I used the `CREATE` statement to create databases and tables
* I used the `SHOW` statement to view available databases and tables
* I used the `ALTER` statement to modify the structure of a table
* I used the `DROP` statement to delete databases and tables
