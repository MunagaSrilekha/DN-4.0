-- Create customers table
CREATE TABLE customers (
   customer_id   NUMBER PRIMARY KEY,
   name          VARCHAR2(50),
   age           NUMBER,
   balance       NUMBER,
   isvip         VARCHAR2(5)
);

-- Create loans table
CREATE TABLE loans (
   loan_id        NUMBER PRIMARY KEY,
   customer_id    NUMBER,
   interest_rate  NUMBER,
   due_date       DATE,
   FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert test customers
INSERT INTO customers VALUES (1, 'Alice', 65, 15000, 'FALSE');
INSERT INTO customers VALUES (2, 'Bob', 45, 8000, 'FALSE');
INSERT INTO customers VALUES (3, 'Carol', 70, 12000, 'FALSE');

-- Insert test loans
INSERT INTO loans VALUES (101, 1, 8.5, SYSDATE + 10);
INSERT INTO loans VALUES (102, 2, 9.0, SYSDATE + 40);
INSERT INTO loans VALUES (103, 3, 7.5, SYSDATE + 5);

-- Commit changes
COMMIT;

SELECT * FROM customers;
SELECT * FROM loans;