# PostgreSQL Cheat Sheet

#### Get Help
```sql
\?
```


#### Show Databases
```sql
\l
```


#### Create Database
```sql
CREATE DATABASE database_name;
```


#### Delete / Drop Database
```sql
DROP DATABASE database_name;
```


#### Select Database
```sql
\c database_name;
```


#### Create Table
```sql
CREATE TABLE table_name(
  column_name TYPE column_constraints,
);
```


#### Delete / Drop Table
```sql
DROP TABLE table_name;
```


#### Show Tables
```sql
\d
```


#### Show Table Schemas
```
\d table_name
```


## Add New Column
```sql
ALTER TABLE table_name ADD new_column column_constraints;
```


## Drop Column
```sql
ALTER TABLE table_name Drop COLUMN column_name;
```


#### Insert Row / Record
```sql
INSERT INTO table_name (column1, column2, ...) values (value1, value2, ...);
```


#### Select
```sql
SELECT * FROM table_name;
SELECT column1, column2 FROM table_name;
SELECT * FROM table_name WHERE some_constraints;
```


#### Update Row
```sql
UPDATE table_name SET row_feild = new_value WHERE some_constraints;
```


#### Delete Row
```sql
DELETE FROM table_name WHERE some_constraints;
```
