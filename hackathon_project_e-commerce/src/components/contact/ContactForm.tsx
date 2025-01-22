const ContactForm = () => {
    return (
      <form className="space-y-4 bg-white p-6 shadow-md rounded-md">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-md h-32"
        ></textarea>
        <button className="py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    );
  };
  
  export default ContactForm;
  