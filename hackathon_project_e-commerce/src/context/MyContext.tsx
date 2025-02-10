/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const MyContext = createContext("" as any);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const route = useRouter();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [cartItems, setCartItems] = useState<Products[]>([]);
  // console.log("userLogin", userLogin);

  useEffect(() => {
    const fetchData = async () => {
      const queryUrl = `*[_type == "product"] | order(_createdAt asc){
        _id,
        name,
        price,
        "imagePath": image.asset->url,
        description,
        stockLevel,
        discountPercentage,
        isFeaturedProduct,
        category,
        "createdAt": _createdAt
        }`;
      const response = await client.fetch(queryUrl);
      setProducts(response);
      // console.log("response", products);
    };
    fetchData();
  }, [products]);

  const addToCart = async (product: Products) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item._id === product._id
            ? { ...item, qtn: item.stockLevel + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...product, qtn: 1 }]);
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const removeFromCart = (product: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== product));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item removed from cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    e.preventDefault();
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await client.create({
        _type: "contact",
        name: contactForm.name,
        email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message sent successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Sanity Response:", result);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error sending message. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Failed to send message:", error);
    }
  };

  const handleBillingChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBillingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Create a new document in Sanity
      const result = await client.create({
        _type: "billingDetails", // Replace with your Sanity schema's document type
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        country: formData.country,
        streetAddress: formData.streetAddress,
        city: formData.city,
        province: formData.province,
        zipCode: formData.zipCode,
        phone: formData.phone,
        email: formData.email,
        additionalInfo: formData.additionalInfo,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Billing details saved successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Sanity Response:", result);
    } catch (error) {
      console.error("Failed to save billing details:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error saving billing details. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handlerForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };
  const handlerFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await client.create({
        _type: "user",
        name: userRegister.name,
        email: userRegister.email,
        password: userRegister.password,
      });
      if (!result) {
        throw new Error("User Register Failed");
      }

      console.log(result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Register Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      route.push(`/login`);
    } catch (error) {
      console.log("User Register Failed", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "User Register Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handlerLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    
  };
  const handlerLoginFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    
    try {
      const result = await client.create({
        _type: "user",
        name: userRegister.name,
        email: userLogin.email,
        password : userLogin.password
      });
      // if (!result) {
      //   throw new Error("User Register Failed");
      // }
      // console.log("userLogin", userLogin);
      console.log(result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Welcome ${result.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      route.push(`/`);
    } catch (error) {
      console.log("User Register Failed", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "User Login Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  
  const handlerAddToCart = async (product: Products) => {
    try {
      const result = await client.create({
        _type: "cart",
        name: product.name,
        price: product.price,
        "imagePath": product.imagePath,
        description: product.description,
        stockLevel: product.stockLevel,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        category: product.category
        
      })
      console.log("Cart result", result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added to cart successfully!",
        showConfirmButton: false,
        timer: 1500,
      })
      
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error adding product to cart. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      })
      
    }
    console.log("product", product);
    
    
  };
  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
        contactForm,
        handleChange,
        handleSubmit,
        formData,
        handleBillingChange,
        handleBillingSubmit,
        userRegister,
        handlerForm,
        handlerFormSubmit,
        handlerAddToCart
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export default useMyContext;
