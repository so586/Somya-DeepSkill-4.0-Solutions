using NUnit.Framework;
using CalcLibrary;

namespace CalcLibraryTests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator _calculator;

        [SetUp]
        public void init()
        {
            _calculator = new Calculator();
            TestContext.WriteLine("Setup created");
        }

        [TearDown]
        public void CleanUp()
        {
            TestContext.WriteLine("TearDown: Test Complete");
        }

        [Test]
        public void Add_TwoPositiveNums_ReturnSum()
        {
            int result = _calculator.add(24, 26);
            Assert.That(result, Is.EqualTo(50));
        }

[TestCase(15, 35, 50)]
[TestCase(-7, -13, -20)]
[TestCase(100, -50, 50)]
[TestCase(0, 25, 25)]
[TestCase(250, 250, 500)]
        public void Add_MultipleNums_ReturnSum(int x, int y, int expected)
        {
            int result = _calculator.add(x, y);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [Ignore("This test is ignored for demonstration")]
        public void Add_IgnoreThisTest()
        {
            Assert.Fail("This test is ignored and should not run.");
        }
    }
}
