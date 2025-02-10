"use client";

import { client } from "@/sanity/lib/client";
// import useMyContext from "@/context/MyContext";
import { useState } from "react";
import Swal from "sweetalert2";

    export default function BillingDetails() {
  // const { formData, handleBillingChange, handleBillingSubmit } = useMyContext();
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

  return (
    <div className="w-full max-w-lg bg-white p-6 shadow-md">
      <h2 className="text-lg font-bold mb-4">Billing Details</h2>
      <form className="space-y-4" onSubmit={handleBillingSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleBillingChange}
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleBillingChange}
            className="border p-3 rounded w-full"
          />
        </div>
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Company Name (Optional)"
          value={formData.companyName}
          onChange={handleBillingChange}
          className="border p-3 rounded w-full"
        />
        <select
          typeof="text"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleBillingChange}
          className="border p-3 rounded w-full"
        >
          <option value="">Country / Region</option>
          <option value="Sri Lanka">Sri Lanka</option>
        </select>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={handleBillingChange}
          className="border p-3 rounded w-full"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Town / City"
            value={formData.city}
            onChange={handleBillingChange}
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            name="province"
            id="province"
            placeholder="Province"
            value={formData.province}
            onChange={handleBillingChange}
            className="border p-3 rounded w-full"
          />
        </div>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          placeholder="ZIP Code"
          value={formData.zipCode}
          onChange={handleBillingChange}
          className="border p-3 rounded w-full"
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleBillingChange}
          className="border p-3 rounded w-full"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleBillingChange}
          className="border p-3 rounded w-full"
        />
        <textarea
          name="additionalInfo"
          placeholder="Additional Information"
          id="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleBillingChange}
          className="border p-3 rounded w-full"
          rows={4}
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded mt-4 hover:bg-yellow-600"
        >
          Submit & Checkout
        </button>
      </form>
    </div>
  );
}
