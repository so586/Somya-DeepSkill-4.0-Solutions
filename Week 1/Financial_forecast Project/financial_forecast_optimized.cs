public class FinancialForecastOptimized {

public static double Calculate(double currentValue, double growthRate, int years) {
for (int i = 0; i < years; i++)
currentValue *= (1 + growthRate);

return currentValue;
}
}
