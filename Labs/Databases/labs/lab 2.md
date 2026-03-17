

# Task 1: Connect to a Database

In this task, I connect to an instance containing a database client, which I use to connect to a database. This instance is referred to as the Command Host.

In the AWS Management Console, I choose the **Services** menu. Under **Compute**, I select **EC2**.

In the left navigation pane, I choose **Instances**.

Next to the instance labeled **Command Host**, I select the check box and then choose **Connect**.

**Note:** If I do not see the Command Host, the lab may still be provisioning, or I may be using a different Region.

For **Connect to instance**, I choose the **Session Manager** tab.

I choose **Connect** to open a terminal window.

To configure the terminal to access all required tools and resources, I run:

```
sudo su
cd /home/ec2-user/
```

To connect to the database instance, I run:

```
mysql -u root --password='re:St@rt!9'
```

The MySQL command-line client is an SQL shell that I use to interact with database engines.

| Switch           | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| -u or --user     | The MySQL user name used to connect to a database instance |
| -p or --password | The MySQL password used to connect to a database instance  |

**Tip:** If the Session Manager window is not responsive or I need to reconnect:

1. I close the Session Manager window and reconnect.
2. I run:

```
sudo su
cd /home/ec2-user/
mysql -u root --password='re:St@rt!9'
```

To display existing databases, I run:

```
SHOW DATABASES;
```

---

# Task 2: Insert Data into a Table

To verify that the `country` table exists, I run:

```
SELECT * FROM world.country;
```

To insert rows into the `country` table, I run:

```
INSERT INTO world.country VALUES ('IRL','Ireland','Europe','British Islands',70273.00,1921,3775100,76.8,75921.00,73132.00,'Ireland/Éire','Republic',1447,'IE');

INSERT INTO world.country VALUES ('AUS','Australia','Oceania','Australia and New Zealand',7741220.00,1901,18886000,79.8,351182.00,392911.00,'Australia','Constitutional Monarchy, Federation',135,'AU');
```

To verify that the rows were inserted, I run:

```
SELECT * FROM world.country WHERE Code IN ('IRL', 'AUS');
```

---

# Task 3: Update Rows in a Table

To update the `Population` column for all rows, I run:

```
UPDATE world.country SET Population = 0;
```

To verify the update:

```
SELECT * FROM world.country;
```

To update both `Population` and `SurfaceArea`, I run:

```
UPDATE world.country SET Population = 100, SurfaceArea = 100;
```

To confirm the changes:

```
SELECT * FROM world.country;
```

---

# Task 4: Delete Rows from a Table

I use caution when running data manipulation statements because changes may not be reversible.

To delete all rows from the table, I run:

```
SET FOREIGN_KEY_CHECKS = 0;
DELETE FROM world.country;
```

To verify deletion:

```
SELECT * FROM world.country;
```

---

# Task 5: Import Data Using an SQL File

To exit the MySQL terminal:

```
QUIT;
```

To verify the SQL file exists:

```
ls /home/ec2-user/world.sql
```

To import data from the SQL file:

```
mysql -u root --password='re:St@rt!9' < /home/ec2-user/world.sql
```

To reconnect:

```
mysql -u root --password='re:St@rt!9'
```

To verify the import:

```
USE world;
SHOW TABLES;
```

I observe three tables: `city`, `country`, and `countrylanguage`.

To verify data was loaded:

```
SELECT * FROM country;
```

I can also query the `city` and `countrylanguage` tables using similar SELECT statements.

---

# Conclusion

In this lab, I accomplished the following:

* I inserted rows into a table
* I updated rows in a table
* I deleted rows from a table
* I imported rows from a database backup file
