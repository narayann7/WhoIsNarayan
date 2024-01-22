import java.util.Scanner;

class MaxMin {
   public static void main(String[] args) {
      int num1, num2, num3;
      Scanner sc = new Scanner(System.in);
      System.out.println("enter first number");
      num1 = sc.nextInt();
      System.out.println("enter second number");
      num2 = sc.nextInt();
      System.out.println("enter third number");
      num3 = sc.nextInt();

      // max
      // n1 =30
      // n2 = 20
      // n3 = 10
      if (num1 > num2 && num1 > num3) {
         System.out.println("The greatest number is " + num1);
      } else if (num2 > num1 && num2 > num3) {
         System.out.println("The greatest number is " + num2);
      } else
         System.out.println("The greatest number is " + num3);

      // min
      if (num1 < num2 && num1 < num3) {
         System.out.println("The smallest number is " + num1);
      } else if (num2 < num1 && num2 < num3) {
         System.out.println("The smallest number is " + num2);
      } else
         System.out.println("The smallest number is " + num3);

      // case 1
      // if(condition){
      // output
      // }

      // case 2
      // if(condition){
      // output
      // }else{
      // output
      // }

      // case 3
      // if(condition){
      // output
      // }else if(condition){
      // output
      // }else{
      // output
      // }

   }
}