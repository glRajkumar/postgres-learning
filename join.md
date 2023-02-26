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
(only common in both tables)

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


### LEFT JOIN
(Inner join + all datas from Left table)

`Query`
```sql
SELECT e.name AS emp_name, d.name AS dept_name FROM employees e LEFT JOIN departments d ON e.dept_id = d.id
```

`Response`
| emp_name | dept_name |
| -------- | --------- |
| Raj 1    | Production |
| Raj 2    | Management |
| Vasanth  | Management |
| Mari     | Management |


### RIGHT JOIN
(Inner join + all datas from Right table)

`Query`
```sql
SELECT e.name AS emp_name, d.name AS dept_name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.id
```

`Response`
| emp_name | dept_name |
| -------- | --------- |
| Raj 1    | Production   |
| Raj 2    | Management   |
| Vasanth  | Management   |
| Mari     | Management   |
| null     | Marketing    |
| null     | Recruitment  |
| null     | Developers   |
| null     | Supply chain |
| null     | Develepment  |


### Multiple JOINs
(combined multiple joins)

`Query`
```sql
SELECT e.name AS emp_name, d.name AS dept_name, 
m.name AS manager_name, p.name AS project_name 
FROM employees e 
JOIN departments d ON e.dept_id = d.id
JOIN managers m ON e.manager_id = m.id
JOIN projects p ON e.project_id = p.id
```

`Response`
| emp_name | dept_name  | manager_name | project_name |
| -------- | ---------  | ------------ | ------------ |
| Raj 1    | Production | Raj     | Dev 1 |
| Raj 2    | Management | Vasanth | Dev 2 |
| Vasanth  | Management | Vasanth | Dev 2 |
| Mari     | Management | Vasanth | Dev 2 |


### FULL JOIN
(everything from both table) (inner + left + right)

`Query`
```sql
SELECT e.name AS emp_name, d.name AS dept_name FROM employees e FULL JOIN departments d ON e.dept_id = d.id
```

`Response`
| emp_name | dept_name |
| -------- | --------- |
| Raj 1    | Production   |
| Raj 2    | Management   |
| Vasanth  | Management   |
| Mari     | Management   |
| null     | Marketing    |
| null     | Recruitment  |
| null     | Developers   |
| null     | Supply chain |
| null     | Develepment  |


### CROSS JOIN (Cartesian product)
(no condition required) (each record will associate with other record)

`Query`

```sql
SELECT e.name AS emp_name, d.name AS dept_name FROM employees e CROSS JOIN departments d
```

`Response`
| emp_name | dept_name |
| -------- | --------- |
| Raj 1    | Production    |
| Raj 2    | Production    |
| Vasanth  | Production    |
| Mari     | Production    |
| Raj 1    | Management    |
| Raj 2    | Management    |
| Vasanth  | Management    |
| Mari     | Management    |
| Raj 1    | Supply chain  |
| Raj 2    | Supply chain  |
| Vasanth  | Supply chain  |
| Mari     | Supply chain  |
| Raj 1    | Developers    |
| Raj 2    | Developers    |
| Vasanth  | Developers    |
| Mari     | Developers    |
| Raj 1    | Marketing     |
| Raj 2    | Marketing     |
| Vasanth  | Marketing     |
| Mari     | Marketing     |
| Raj 1    | Recruitment   |
| Raj 2    | Recruitment   |
| Vasanth  | Recruitment   |
| Mari     | Recruitment   |
| Raj 1    | Develepment   |
| Raj 2    | Develepment   |
| Vasanth  | Develepment   |
| Mari     | Develepment   |

<br />
in above example we have, 4 employees and 7 depts so we got 28 record.