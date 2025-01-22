const Sidebar = () => {
    return (
      <aside className="bg-gray-50 p-4 shadow rounded-lg">
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Crafts</a></li>
          <li><a href="#" className="hover:underline">Design</a></li>
          <li><a href="#" className="hover:underline">Handmade</a></li>
          <li><a href="#" className="hover:underline">Interior</a></li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  