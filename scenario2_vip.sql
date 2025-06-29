BEGIN
   FOR cust_rec IN (SELECT customer_id FROM customers WHERE balance > 10000) LOOP
      UPDATE customers
      SET isvip = 'TRUE'
      WHERE customer_id = cust_rec.customer_id;
   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('VIP status updated for high balance customers.');
END;
/
