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

#### Data samples

`departments`

| id | name |
| -- | ---- |
| 1 | Production   |
| 2 | Management   |
| 3 | Supply chain |
| 4 | Developers   |
| 5 | Marketing    |
| 6 | Recruitment  |
| 7 | Develepment  |


`managers`

| id | name | dept_id |
| -- | ---- | ------- |
| 1 | Raj     | 1 |
| 2 | Vasanth | 2 |
| 3 | Laxmi   | 3 |
| 4 | Guru    | 3 |
| 5 | Reka    | 1 |
| 6 | Bharath | 2 |
| 7 | Giri    | 2 |


`projects`

| id | name | manager_id |
| -- | ---- | ---------- |
| 1 | Dev 1 | 1 |
| 2 | Dev 2 | 2 |
| 3 | Dev 3 | 3 |


`employees`

| id | name | dept_id | project_id | manager_id |
| -- | ---- | ------- | ---------- | ---------- |
| 1 | Raj 1   | 1 | 1 | 1 |
| 2 | Raj 2   | 2 | 2 | 2 |
| 3 | Vasanth | 2 | 2 | 2 |
| 4 | Mari    | 2 | 2 | 2 |

<br />

### join samples

### INNER JOIN

`Query`
```sql
SELECT e.name AS emp_name, d.name AS dept_name FROM employees e INNER JOIN departments d ON e.dept_id = d.id
```

`Response`
| emp_name | dept_name |
| -------- | --------- |
| Raj 1    | Production |
| Raj 2    | Management |
| Vasanth  | Management |
| Mari     | Management |

