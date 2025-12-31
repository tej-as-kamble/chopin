import RestaurantHeader from "@/components/user/RestaurantPage/RestaurantHeader";
import RestaurantMenu from "@/components/user/RestaurantPage/RestaurantMenu";
import FloatingCart from "@/components/user/RestaurantPage/FloatingCart";
import RestaurantFooter from "@/components/user/RestaurantPage/RestaurantFooter";
import "@/components/user/RestaurantPage/RestaurantPage.css";

const RestaurantPage = () => {
  const items = [
    { id: 1, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/8/0821fd59-ab1f-49a0-9d95-e596084e254a_dcd6f090-cd4e-4f76-95e0-6a7ee9e2b141.jpg" },
    { id: 2, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/20/17df5e10-45e5-4ae5-b330-a1b172d08fbf_4cbe5323-9a21-46ba-8925-c46eb1db76ce.png_compressed" },
    { id: 3, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/7/e4a3d9a3-9997-4b73-accc-b029abeb1cc9_83eb91d8-7d3d-4463-8e7e-9188ba95bcf7.jpg_compressed" },
    { id: 1, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/8/0821fd59-ab1f-49a0-9d95-e596084e254a_dcd6f090-cd4e-4f76-95e0-6a7ee9e2b141.jpg" },
    { id: 2, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/20/17df5e10-45e5-4ae5-b330-a1b172d08fbf_4cbe5323-9a21-46ba-8925-c46eb1db76ce.png_compressed" },
    { id: 3, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/7/e4a3d9a3-9997-4b73-accc-b029abeb1cc9_83eb91d8-7d3d-4463-8e7e-9188ba95bcf7.jpg_compressed" },
    { id: 1, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/8/0821fd59-ab1f-49a0-9d95-e596084e254a_dcd6f090-cd4e-4f76-95e0-6a7ee9e2b141.jpg" },
    { id: 2, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/20/17df5e10-45e5-4ae5-b330-a1b172d08fbf_4cbe5323-9a21-46ba-8925-c46eb1db76ce.png_compressed" },
    { id: 3, img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/7/e4a3d9a3-9997-4b73-accc-b029abeb1cc9_83eb91d8-7d3d-4463-8e7e-9188ba95bcf7.jpg_compressed" },
  ]
  return (
    <div className="restaurant-page">
      <FloatingCart
        items={items}
        onRemove={(id) =>
          setCartItems((prev) => prev.filter((i) => i.id !== id))
        }
      />

      <RestaurantHeader />
      <RestaurantMenu />
      <RestaurantFooter />
    </div>
  );
};

export default RestaurantPage;



