CREATE TABLE accounts (
   account_id   NUMBER PRIMARY KEY,
   customer_id  NUMBER,
   balance      NUMBER,
   account_type VARCHAR2(20)
);
INSERT INTO accounts VALUES (1001, 1, 5000, 'SAVINGS');
INSERT INTO accounts VALUES (1002, 2, 3000, 'SAVINGS');

COMMIT;
