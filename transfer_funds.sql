CREATE OR REPLACE PROCEDURE TransferFunds (
   p_from_account IN NUMBER,
   p_to_account   IN NUMBER,
   p_amount       IN NUMBER
) AS
   v_balance NUMBER;
BEGIN
   -- Check if source account has enough balance
   SELECT balance INTO v_balance FROM accounts WHERE account_id = p_from_account FOR UPDATE;

   IF v_balance < p_amount THEN
      RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
   END IF;

   -- Deduct from source account
   UPDATE accounts
   SET balance = balance - p_amount
   WHERE account_id = p_from_account;

   -- Add to destination account
   UPDATE accounts
   SET balance = balance + p_amount
   WHERE account_id = p_to_account;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount || ' from ' || p_from_account || ' to ' || p_to_account);
END;
/
