﻿using System;

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.GetInstance();
        Logger logger2 = Logger.GetInstance();

        logger1.Log("This is the first log.");
        logger2.Log("This is the second log.");

        if (logger1 == logger2)
        {
            Console.WriteLine("Same instance used.");
        }
        else
        {
            Console.WriteLine("Different instances found.");
        }
    }
}

