# PostgreSQL Cheat Sheet

##### Get Help
```sql
\?
```

##### Show Databases
```sql
\l
```

##### Create Database
```sql
CREATE DATABASE database_name;
```

##### Delete Database
```sql
DROP DATABASE database_name;
```

##### Select Database
```sql
\c database_name;
```

##### Create Table
```sql
CREATE TABLE table_name(
  column_name TYPE column_constraints,
);
```

##### Delete / Drop Table
```sql
DROP TABLE table_name;
```

##### Show Tables
```sql
\d
```

##### Show Table Schemas
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


