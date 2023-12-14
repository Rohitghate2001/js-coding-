class sumer {

    String result = "";

    public String sumi(String str) {
        int sum = 0;
        for (int i = 0; i < str.length(); i++) {
            int n = str.charAt(i) - '0';
            sum = sum + n;
            result = String.valueOf(sum);

        }
        if (sum > 9) {
            sumi(result);
        }
        return result;
    }
}

public class reducesum12 {
    public static void main(String args[]) {

        sumer obj = new sumer();

        String sttt = "8888888888888888888888888";
        String re = obj.sumi(sttt);

        System.out.println(re);

    }
}
