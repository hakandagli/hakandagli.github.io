    if (true)
    {
        Console.WriteLine("Hello World");
    }

    //Single Line İf ile çalışmak

    var number = 11;
    Console.WriteLine(number == 10 ? "Number is 100" : "Number is not 10");

    switch (number)
    {
        case 10:
            Console.WriteLine("Number is 10");
            break;
        case 9:
            Console.WriteLine("Number is 9");
            break;
        default:
            Console.WriteLine("Case'de olmayan sayılar tanımlanmış ise burası çalışır");
            break;
    }