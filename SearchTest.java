public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Shoes", "Fashion"),
            new Product(2, "Laptop", "Electronics"),
            new Product(3, "T-shirt", "Fashion"),
            new Product(4, "Headphones", "Electronics"),
            new Product(5, "Watch", "Accessories")
        };

        System.out.println("🔎 Linear Search:");
        Product foundLinear = SearchEngine.linearSearch(products, "Laptop");
        System.out.println(foundLinear != null ? foundLinear : "Not Found");

        System.out.println("\n🔎 Binary Search:");
        SearchEngine.sortProducts(products);
        Product foundBinary = SearchEngine.binarySearch(products, "Laptop");
        System.out.println(foundBinary != null ? foundBinary : "Not Found");
    }
}
