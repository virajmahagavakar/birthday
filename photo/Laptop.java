import java.util.*;
public class Laptop{


//virables initiztion 

    private int laptopId;
    private String brand;
    private String osType;
    private long price;
    private  int rating;

// constructor

    public Laptop(int laptopId , String brand , String osType , long price , int rating ){
        this.laptopId = laptopId;
        this.brand = brand ;
        this.osType = osType;
        this.price = price;
        this.rating = rating;
    }

// getters

    public int getLaptopId(){
        return laptopId;
    }

    public String getBrand(){
        return brand;
    }

    public String getOsType(){
        return osType;
    }

    public long getPrice(){
        return price;
    }

    public int getRating(){
        return rating;
    }

//setters

    public void setLaptopId(int laptopId){
        this.laptopId = laptopId;
    }

    public void setBrand(String brand){
        this.brand = brand ;
    }

    public void setOsType(String osType){
        this.osType = osType;
    }

    public void setPrice(long price){
        this.price = price ;
    }

    public void setRating(int rating){
        this.rating = rating;
    }

//Main class 

public static void main(String[] args){
    Scanner sc = new Scanner(System.in);

    Laptop arr[] = new Laptop[4];
    for(int i = 0 ; i < 4 ; i++){
        
        int laptopId = sc.nextInt();
        String brand = sc.next();
        String osType = sc.next();
        long price = sc.nextLong();
        int rating = sc.nextInt();

        arr[i] = new Laptop(laptopId, brand, osType, price, rating);
    }

    String brand = sc.next();
    String osType = sc.next();

    int count = countOfLaptopsByBrand(arr,brand);
    if(count > 0){
        System.out.println(count);
    } else {
        System.out.println("No Such Laptop found");
    }

    Laptop[] result = searchLaptopByOsType(arr, osType);
    if(result.length > 0){
        for(Laptop laptop : result){
            System.out.println(laptop.getLaptopId());
            System.out.println(laptop.getRating());
        }
    } else {
        System.out.println("The given os is not available");
    }
}

    //function 1
    public static int countOfLaptopsByBrand(Laptop[] arr , String brand){
        int count = 0 ;
        for(int i = 0 ; i < arr.length ; i++){
            if(arr[i].getBrand().equalsIgnoreCase(brand) && arr[i].getRating() > 3){
                count++;
            }
        }

        return count;
    }

    //function 2
    public static Laptop[] searchLaptopByOsType(Laptop[] arr , String osType){
        ArrayList<Laptop> matches = new ArrayList<>();
        for(Laptop laptop : arr){
            if(laptop.getOsType().equalsIgnoreCase(osType)){
                matches.add(laptop);
            }
        }

        matches.sort(Comparator.comparingInt(Laptop::getLaptopId));
        matches.reversed();
        return matches.toArray(new Laptop[0]);
    }

}