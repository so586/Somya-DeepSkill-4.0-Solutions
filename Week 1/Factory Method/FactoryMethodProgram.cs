using System;

public class FactoryMethodProgram
{
    public static void Main(string[] args)
    {
        DocumentFactory factory;

        factory = new WordFactory();
        Document word = factory.createDocument();
        word.open();

        factory = new PdfFactory();
        Document pdf = factory.createDocument();
        pdf.open();

        factory = new ExcelFactory();
        Document excel = factory.createDocument();
        excel.open();

        Console.ReadLine();
    }
}
