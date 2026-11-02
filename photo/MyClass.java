import java.util.Scanner;

class Employee {
    private int empId;
    private String empName;
    private double baseSalary;

    public Employee(int empId, String empName, double baseSalary) {
        this.empId = empId;
        this.empName = empName;
        this.baseSalary = baseSalary;
    }
    public int getEmpId() {
        return empId;
    }
    public void setEmpId(int empId) {
        this.empId = empId;
    }
    public String getEmpName() {
        return empName;
    }
    public void setEmpName(String empName) {
        this.empName = empName;
    }
    public double getBaseSalary() {
        return baseSalary;
    }
    public void setBaseSalary(double baseSalary) {
        this.baseSalary = baseSalary;
    }
    public double calculateBonus() {
        return baseSalary * 0.10;
    }
}

class Manager extends Employee {
    private int teamSize;

    public Manager(int empId, String empName, double baseSalary, int teamSize) {
        super(empId, empName, baseSalary);
        this.teamSize = teamSize;
    }
    public int getTeamSize() {
        return teamSize;
    }
    public void setTeamSize(int teamSize) {
        this.teamSize = teamSize;
    }
    @Override
    public double calculateBonus() {
        return getBaseSalary() * 0.10 + 500 * teamSize;
    }
}

class Solution {
    public static String getHighestBonus(Employee[] arr) {
        Employee highest = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i].calculateBonus() > highest.calculateBonus()) {
                highest = arr[i];
            }
        }
        return highest.getEmpName();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Employee[] arr = new Employee[5];

        // Read 3 Employee objects
        for (int i = 0; i < 3; i++) {
            int id = Integer.parseInt(sc.next().substring(1));
            String name = sc.next();
            double salary = sc.nextDouble();

            arr[i] = new Employee(id, name, salary);
        }

        // Read 2 Manager objects
        for (int i = 3; i < 5; i++) {
            int id = Integer.parseInt(sc.next().substring(1));
            String name = sc.next();
            double salary = sc.nextDouble();
            int teamSize = sc.nextInt();

            arr[i] = new Manager(id, name, salary, teamSize);
        }

        System.out.println(getHighestBonus(arr));

        sc.close();
    }
}