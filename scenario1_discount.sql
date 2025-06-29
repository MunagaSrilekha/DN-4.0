BEGIN
   FOR cust_rec IN (SELECT customer_id FROM customers WHERE age > 60) LOOP
      UPDATE loans
      SET interest_rate = interest_rate - 1
      WHERE customer_id = cust_rec.customer_id;
   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('1% discount applied to customers over 60.');
END;
/
