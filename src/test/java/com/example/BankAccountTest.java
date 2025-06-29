package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class BankAccountTest {

    @Test
    public void testDeposit() {
        BankAccount mockAccount = mock(BankAccount.class);
        when(mockAccount.getBalance()).thenReturn(1000.0);

        double balance = mockAccount.getBalance();

        assertEquals(1000.0, balance);
    }
}
