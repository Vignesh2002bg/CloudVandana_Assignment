import java.util.*;
public class Pangram {
    static boolean[] alphaList = new boolean[26];
    static int flag = 1;
   public static void main(String[] args) {
     Scanner scan=new Scanner(System.in);
     String str=scan.next();
     PangramString(str);
    for (int i = 0; i <= 25; i++) {
      if (alphaList[i] == false)
      {
         flag = 0; 
      }
    }
   if (flag == 1)
      System.out.print("The above string is a pangram.");
   else
      System.out.print("The above string is not a pangram.");
   }
   public static void PangramString(String str)
   {
      int index = 0;
      
      for (int i = 0; i < str.length(); i++) {
         if ( str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
            index = str.charAt(i) - 'A';
         }else if( str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
            index = str.charAt(i) - 'a';
      }
      alphaList[index] = true;
   }
   }
}