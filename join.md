# Joins
<img src="./doc/PostgreSQL-Joins.png" alt="Postgresql joins" />

<br />

#### Tables
We have 4 tables namely; Employee, Project, Department, Manager. Thier relations given below.

<br />

`employees`
```sql
employees (
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL, 
  dept_id BIGINT NOT NULL REFERENCES departments(id),
  project_id BIGINT NOT NULL REFERENCES projects(id),
  manager_id BIGINT NOT NULL REFERENCES managers(id)
);
```

<br />

`departments`
```sql
departments (
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL
);
```

<br />

`managers`
```sql
managers (
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL, 
  dept_id BIGINT NOT NULL REFERENCES departments(id)
);
```

<br />

`projects`
```sql
projects (
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL, 
  manager_id BIGINT NOT NULL REFERENCES managers(id)
);
```

<br />


