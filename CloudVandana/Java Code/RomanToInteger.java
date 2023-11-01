import java.util.*;   
import java.io.*;   
public class RomanToInteger{
  public static int value(char s)   
  {   
    if (s == 'I')   
      return 1;   
    if (s == 'V')   
      return 5;   
    if (s == 'X')   
      return 10;   
    if (s == 'L')   
      return 50;   
    if (s == 'C')   
      return 100;   
    if (s == 'D')   
      return 500;   
    if (s == 'M')   
      return 1000;   
    return -1;   
  }   
  
  public static int convertRomanToInt(String str)   
  {   
    int total = 0;   
    
    for (int i=0; i<str.length(); i++)   
    {   
      int s1 = value(str.charAt(i));   
      if (i+1 <str.length())   
      {   
        int s2 = value(str.charAt(i+1));   
        if (s1 >= s2)   
        {   
          total = total + s1;   
        }   
        else  
        {   
          total = total - s1;   
        }   
      }   
      else  
      {   
        total = total + s1;   
      }   
    }   
    return total;   
  }   
  public static void main(String args[])   
  {  
      Scanner scan=new Scanner(System.in);
    String romanStr=scan.next();
    System.out.println(convertRomanToInt(romanStr));   
  }   
}  