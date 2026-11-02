import java.util.Scanner;

public class Myclass2 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Student[] students = new Student[2];
        for (int i = 0; i < 2; i++) {
            String firstName = sc.nextLine();
            String lastName = sc.nextLine();
            int age = sc.nextInt();
            sc.nextLine();
            char gender = sc.nextLine().charAt(0);

            String rollNo = sc.nextLine();
            String course = sc.nextLine();
            int semester = sc.nextInt();
            sc.nextLine();
            double GPA = sc.nextDouble();
            sc.nextLine();

            students[i] = new Student(firstName, lastName, age, gender, rollNo, course, semester, GPA);
        }

        Faculty[] faculties = new Faculty[2];

        for (int i = 0; i < 2; i++) {
            String firstName = sc.nextLine();
            String lastName = sc.nextLine();
            int age = Integer.parseInt(sc.nextLine());
            char gender = sc.nextLine().charAt(0);

            String employeeId = sc.nextLine();
            String department = sc.nextLine();
            String designation = sc.nextLine();
            double salary = sc.nextDouble();
            sc.nextLine();
            faculties[i] = new Faculty(firstName, lastName, age, gender, employeeId, department, designation, salary);
        }

        Student highestGPAStudent = findHighestGPAStudent(students);
        if(highestGPAStudent != null){
           System.out.println( highestGPAStudent.getRollNo());
            System.out.println(highestGPAStudent.getCourse());
            System.out.println(highestGPAStudent.getGPA());
        } else {
            System.out.println("Sorry - No student is available");
        }

        Faculty highestPaidFaculty = findHighestPaidFaculty(faculties);
        if(highestPaidFaculty != null){
            System.out.println(highestPaidFaculty.getEmployeeId());
            System.out.println(highestPaidFaculty.getDepartment());
            System.out.println(highestPaidFaculty.getSalary());
        } else {
            System.out.println("Sorry - No faculty is available");
        }

    }

    public static Student findHighestGPAStudent(Student[] arr) {
        if (arr.length == 0) {
            return null;
        }

        Student highestGPAStudent = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i].getGPA() > highestGPAStudent.getGPA()) {
                highestGPAStudent = arr[i];
            }
        }

        return highestGPAStudent;
    }

    public static Faculty findHighestPaidFaculty(Faculty[] arr) {
        if(arr.length == 0 ){
            return null;
        }

        Faculty higeshtpaid = arr[0];
        for(int i = 0 ; i < arr.length ; i++){
            if(arr[i].getSalary() > higeshtpaid.getSalary()){
                higeshtpaid = arr[i];
            }
        }

        return higeshtpaid;
    }

}

class Person {

    private String firstName;
    private String lastName;
    private int age;
    private char gender;

    public Person(String firstName, String lastName, int age, char gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getAge() {
        return age;
    }

    public char getGender() {
        return gender;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

}

class Student extends Person {

    private String rollNo;
    private String course;
    private int semester;
    private double GPA;

    public Student(String firstName, String lastName, int age, char gender, String rollNo, String course, int semester,
            double GPA) {

        super(firstName, lastName, age, gender);

        this.rollNo = rollNo;
        this.course = course;
        this.semester = semester;
        this.GPA = GPA;
    }

    public String getRollNo() {
        return rollNo;
    }

    public String getCourse() {
        return course;
    }

    public int getSemester() {
        return semester;
    }

    public double getGPA() {
        return GPA;
    }

    public void setRollNo(String rollNo) {
        this.rollNo = rollNo;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public void setGPA(double GPA) {
        this.GPA = GPA;
    }
}

class Faculty extends Person {

    private String employeeId;
    private String department;
    private String designation;
    private double salary;

    public Faculty(String firstName, String lastName, int age, char gender, String employeeId, String department,
            String designation, double salary) {
        super(firstName, lastName, age, gender);
        this.employeeId = employeeId;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}