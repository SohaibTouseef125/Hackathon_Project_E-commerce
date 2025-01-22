"use client";

import { useState } from "react";
import { client } from "@/sanity/lib/client";

export default function BillingDetails() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

      alert("Billing details saved successfully!");
      console.log("Sanity Response:", result);
    } catch (error) {
      console.error("Failed to save billing details:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  console.log(formData);
  
  return (
    <div className="w-full max-w-lg bg-white p-6 shadow-md">
      <h2 className="text-lg font-bold mb-4">Billing Details</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-3 rounded w-full"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-3 rounded w-full"
            required
          />
        </div>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name (Optional)"
          value={formData.companyName}
          onChange={handleChange}
          className="border p-3 rounded w-full"
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
        >
          <option value="">Country / Region</option>
          <option value="Sri Lanka">Sri Lanka</option>
        </select>
        <input
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            placeholder="Town / City"
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded w-full"
            required
          />
          <input
            type="text"
            name="province"
            placeholder="Province"
            value={formData.province}
            onChange={handleChange}
            className="border p-3 rounded w-full"
            required
          />
        </div>
        <input
          type="text"
          name="zipCode"
          placeholder="ZIP Code"
          value={formData.zipCode}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
        />
        <textarea
          name="additionalInfo"
          placeholder="Additional Information"
          value={formData.additionalInfo}
          onChange={handleChange}
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
