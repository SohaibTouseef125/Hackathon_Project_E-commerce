"use client";
import useMyContext from "@/context/MyContext";

const ContactForm = () => {
  const {contactForm,handleChange,handleSubmit} = useMyContext();
  

    return (
      <form className="space-y-4 bg-white p-6 shadow-md rounded-md" onSubmit={handleSubmit} >
        <input
          type="text"
          name="name"
          value={contactForm.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          required
          value={contactForm.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="subject"
          required
          value={contactForm.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          name="message"
          value={contactForm.message}
          onChange={handleChange}
          required
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-md h-32"
        ></textarea>
        <button className="py-2 px-4 rounded-md" >
          Submit
        </button>
      </form>
    );
  };


  
  export default ContactForm;
