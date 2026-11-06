using System;


Tablica tablica = new Tablica(20);
tablica.Wyswietl();
tablica.Wyszukaj(453);
Console.WriteLine("Liczby nieparzyste: \n");
Console.WriteLine("Razem nieparzystych: " + tablica.Nieparzyste());
Console.WriteLine("Średnia wszystkich elementów: " + tablica.Srednia());

 class Tablica
{
    private int[] tab;
    private int liczbaElementow;

    public Tablica(int rozmiar)
    {
        liczbaElementow = rozmiar;
        tab = new int[rozmiar];

        Random los = new Random();
        for (int i = 0; i < liczbaElementow; i++)
        {
            tab[i] = los.Next(1, 1001);
        }
    }
    /**********************************************
    nazwa metody: Wyswietl
    opis metody: Wyświetlająca wszystkie elementy tablicy w postaci „<index_tablicy>: <wartość>”. Nie zwraca wartośc
    parametry: Brak
    ...
    zwracany typ i opis: Brak
    autor: FL
    ***********************************************/
    public void Wyswietl()
    {
        for (int i = 0; i < liczbaElementow; i++)
        {
            Console.WriteLine(i + ": " + tab[i]);
        }
    }
    /**********************************************
nazwa metody: Wyszukaj
opis metody: Wyszukująca pierwsze wystąpienie wartości, przekazanejjako argument. Metoda zwraca indeks szukanego elementulub liczbę -1, gdy elementu nie znaleziono
parametry: Brak
...
zwracany typ i opis: INT , zwraca wyszukany element, jesli go brak zwraca -1
autor: FL
***********************************************/
    public int Wyszukaj(int liczba)
    {
        for (int i = 0; i < liczbaElementow; i++)
        {
            if (tab[i] == liczba) { return i; }
        }
        return -1;
    }
    /**********************************************
nazwa metody: Nieparzyste
opis metody: Wyświetlająca wszystkie wartości nieparzyste z tablicy i zwracająca ich liczbę
parametry: Brak
...
zwracany typ i opis: INT , zwraca ilosc cyfr nieparzystych
autor: FL
***********************************************/
    public int Nieparzyste()
    {
        int ilosc_niepa = 0;

        for(int i = 0;i < liczbaElementow; i++)
        {
            if (tab[i] % 2 != 0)
            {
                Console.WriteLine(tab[i]+"\n");
                ilosc_niepa++;
            }
        }
        return ilosc_niepa;
    }
    /**********************************************
nazwa metody: Srednia
opis metody: Licząca średnią arytmetyczną wartości w tablicy i zwracająca tą wartość
parametry: Brak
...
zwracany typ i opis: Double , zwraca srednia liczb z tablicy
autor: FL
***********************************************/
    public double Srednia()
    {
        double suma = 0;

        for(int i = 0; i < liczbaElementow; i++)
        {
            suma = suma + tab[i];
        }
        double srednia = suma / liczbaElementow;
        return srednia;
    }
}
