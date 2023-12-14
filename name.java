class name {
    public static void main(String[] args) {
        String str = "aassssddff";
        String emp = "";

        for (int i = 0; i < str.length(); i++) {
            boolean flag = true;
            for (int j = 0; j < emp.length(); j++) {

                if (str.charAt(i) == emp.charAt(j)) {

                    flag = false;
                    break;
                }
            }
            if (flag) {

                emp = emp + str.charAt(i);
            }

        }
        System.out.println("set is : " + emp);

        for (int k = 0; k < emp.length(); k++) {
            int count = 0;
            for (int r = 0; r < str.length(); r++) {
                if (emp.charAt(k) == str.charAt(r)) {
                    count++;
                }
            }
            System.out.println(emp.charAt(k) + " : " + count);
        }
    }

}