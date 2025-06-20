using System;

public interface Document
{
    void open();
}

public class WordDocument : Document
{
    public void open()
    {
        Console.WriteLine("Opening a Word Document...");
    }
}

public class PdfDocument : Document
{
    public void open()
    {
        Console.WriteLine("Opening a Pdf Document...");
    }
}

public class ExcelDocument : Document
{
    public void open()
    {
        Console.WriteLine("Opening an Excel Document...");
    }
}

public abstract class DocumentFactory
{
    public abstract Document createDocument();
}

public class WordFactory : DocumentFactory
{
    public override Document createDocument()
    {
        return new WordDocument();
    }
}

public class PdfFactory : DocumentFactory
{
    public override Document createDocument()
    {
        return new PdfDocument();
    }
}

public class ExcelFactory : DocumentFactory
{
    public override Document createDocument()
    {
        return new ExcelDocument();
    }
}
