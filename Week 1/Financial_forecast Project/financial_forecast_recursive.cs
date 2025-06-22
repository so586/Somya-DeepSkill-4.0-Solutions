public class FinancialForecastRecursive {

public static double Calculate(double currentValue, double growthRate, int years) {
if (years == 0)
return currentValue;

return Calculate(currentValue * (1 + growthRate), growthRate, years - 1);
}
}
