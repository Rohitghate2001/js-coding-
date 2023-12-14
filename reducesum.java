public class reducesum {
    static int mod = 0;

    static int sumer(int num) {
        int sum = 0;
        while (num != 0) {
            mod = num % 10;
            sum = sum + mod;
            num = num / 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        int number = 81;
        String nums = "99";

        do {
            number = sumer(number);

        } while (number > 9);

        System.out.println(number);
    }
}
