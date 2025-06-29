package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.*;

public class BankAccountTest {

    private BankAccount account;

    @Before
    public void setUp() {
        // Arrange: Initialize the test fixture
        account = new BankAccount();
        account.deposit(1000);
    }

    @After
    public void tearDown() {
        // Teardown: Reset after each test
        account = null;
    }

    @Test
    public void testDeposit() {
        // Act
        account.deposit(500);

        // Assert
        assertEquals(1500, account.getBalance());
    }

    @Test
    public void testWithdraw() {
        // Act
        account.withdraw(400);

        // Assert
        assertEquals(600, account.getBalance());
    }
}
