CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
   FOR acct IN (SELECT account_id, balance FROM accounts WHERE account_type = 'SAVINGS') LOOP
      UPDATE accounts
      SET balance = balance + (balance * 0.01)
      WHERE account_id = acct.account_id;
   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/
