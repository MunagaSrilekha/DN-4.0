public class FinancialForecast {

    // Recursive method to calculate future value
    public static double forecast(double amount, double rate, int years) {
        if (years == 0) {
            return amount;
        }
        return forecast(amount, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double startingAmount = 10000;
        double annualGrowthRate = 0.05; // 5%
        int years = 5;

        double futureValue = forecast(startingAmount, annualGrowthRate, years);
        System.out.printf("Future value after %d years: ₹%.2f\n", years, futureValue);
    }
}
