import ProductDetailSkeleton from "@/components/common/skeleton/ProductDetailSkeleton";
import { Button } from "@/components/ui/button";

import { useSingleProductQuery } from "@/redux/api/productsApi";
import { Heart, ShoppingBagIcon, SquareChevronDown } from "lucide-react";
import  {  useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ProductImageViewer from "./ProductImageViewer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, updateQuantity, useCart } from "@/redux/features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) => useCart(state));
  const findCart = cartItem.find((cart) => cart.id === productId);
  const [quantity, setQuantity] = useState<number>(findCart?.quantity || 1);

  const handleIncQuantity = () => {
    setQuantity(prev => prev + 1);
  };


  const handleDecQuantity = () => {
    setQuantity(prev => prev > 0 ? prev - 1 : prev);
  };

  const { data, isLoading, isSuccess, status } = useSingleProductQuery(
    productId as string
  );
  if (isLoading) {
    return <ProductDetailSkeleton />;
  }
  if (status === "rejected" || !isSuccess) {
    return <Navigate to="*" />;
  }




  const handleAddToProduct = () => {
    if(findCart){
      dispatch(updateQuantity({ id: findCart.id, quantity: quantity }));
    }else{
      dispatch(
        addToCart({
          id: data?._id,
          name: data?.name,
          description: data?.description,
          image: data?.img,
          quantity: quantity,
          price:data.discountedPrice
        })
      );
    }
    toast.success("product add to cart successfully", {
      position: "top-right",
    });
  };

  return (
    <section className="md:container pt-12 pb-24 bg-white overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-14 md:mb-24">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="relative w-full ml-auto mb-16">
              {data && <ProductImageViewer images={data?.images} />}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h1 className="mb-4 text-primary text-2xl font-heading font-medium">
              {data?.name}
            </h1>
            <p className="flex items-start mb-2">
              <span className="flex justify-between items-center text-2xl text-secondary font-heading font-medium">
                <span> ${data?.price}</span>
              </span>
              <span className="ml-4 text-gray-300 font-heading font-medium line-through">
                ${data?.discountedPrice}
              </span>
            </p>
            <div className="p-4">
              <div className="mb-2">
                <span className="font-semibold">Availability:</span>{" "}
                {data?.stock > 0 ? (
                  <span className="text-green-500 ml-2">In-Stock</span>
                ) : (
                  <span className="text-red-500 text-semibold ml-2">
                    Out-Of-Stock
                  </span>
                )}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Brand: </span> {data.brand}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Category:</span> {data.category}
              </div>
              <div className="mb-2">
                <span className="font-semibold">SKU:</span> {data.sku}
              </div>
              <div className="mt-2">
                <span className="text-lg font-semibold text-gray-700">
                  ${data.discountedPrice}
                </span>{" "}
                <span className="text-gray-400 line-through">${data.price}</span>
              </div>
            </div>
            <p className="mb-8 text-base leading-7 text-gray-500">
              {data?.description}
            </p>
            <div className="mb-8">
              <h4 className="mb-3 font-heading font-medium">Qty:</h4>
              <div className="flex items-center  gap-4 col-span-3 ">
                <div className="py-1 px-4 w-1/3 rounded-sm border border-coolGray-200 flex gap-4 items-center bg-white">
                  <Button onClick={handleDecQuantity} className="bg-secondar  w-1/3 hover:bg-secondary text-primary text-[24px] hover:focus-within:bg-secondary">
                    -
                  </Button>
                  <span x-text="quantity" className="text-rhino-800 text-sm">
                    {quantity}
                  </span>
                  <Button onClick={handleIncQuantity} className="bg-white  w-1/3 text-primary  text-[24px] hover:bg-secondary hover:focus-within:bg-secondary">
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-8 md:mb-12">
              <div className="w-full sm:w-1/2 px-3 mb-4 sm:mb-0">
                <label className="block mb-2 text-sm font-medium text-primary">
                  Color
                </label>
                <div className="relative">
                  <select className="appearance-none block w-full px-4 py-3 text-sm leading-4 font-semibold text-gray-400 bg-white border border-gray-100 rounded-md">
                    <option>{data?.color}</option>
                  </select>
                  <svg
                    className="absolute top-1/2 transform -translate-y-1/2 right-3 pointer-events-none"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-12">
              <Button
                onClick={handleAddToProduct}
                className="w-full sm:w-[200px] mr-3 mb-4 bg-secondary hover:bg-secondary text-primary py-4 leading-5">
                <ShoppingBagIcon className="text-primary mr-3" /> Add to Bag
              </Button>
              <Button className="w-full sm:w-[200px] px-2 py-4 leading-5">
                <Heart className="text-secondary mr-3" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-primary font-semibold text-2xl pb-3">
          Description
        </h1>
        <p className="text-gray-600 text-md leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
          non vitae blanditiis corrupti aliquid praesentium? Velit illo suscipit
          aspernatur quibusdam, consequatur tempore accusamus aut obcaecati
          enim, corrupti molestiae quam delectus amet doloribus omnis laudantium
          sit libero nulla voluptatibus maxime fugiat magnam corporis maiores
          dolores. Et expedita dolorem nulla quaerat recusandae autem iure
          pariatur ut, vero debitis perspiciatis aliquid. Dolorum. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Deserunt, non vitae
          blanditiis corrupti aliquid praesentium? Velit illo suscipit
          aspernatur quibusdam, consequatur tempore accusamus aut obcaecati
          enim, corrupti molestiae quam delectus amet doloribus omnis laudantium
          sit libero nulla voluptatibus maxime fugiat magnam corporis maiores
          dolores. Et expedita dolorem nulla quaerat recusandae autem iure
          pariatur ut, vero debitis perspiciatis aliquid. Dolorum. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Deserunt, non vitae
          blanditiis corrupti aliquid praesentium? Velit illo suscipit
          aspernatur quibusdam, consequatur tempore accusamus aut obcaecati
          enim, corrupti molestiae quam delectus amet doloribus omnis laudantium
          sit libero nulla voluptatibus maxime fugiat magnam corporis maiores
          dolores. Et expedita dolorem nulla quaerat recusandae autem iure
          pariatur ut, vero debitis perspiciatis aliquid. Dolorum. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Deserunt, non vitae
          blanditiis corrupti aliquid praesentium? Velit illo suscipit
          aspernatur quibusdam, consequatur tempore accusamus aut obcaecati
          enim, corrupti molestiae quam delectus amet doloribus omnis laudantium
          sit libero nulla voluptatibus maxime fugiat magnam corporis maiores
          dolores. Et expedita dolorem nulla quaerat recusandae autem iure
          pariatur ut, vero debitis perspiciatis aliquid. Dolorum.
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
