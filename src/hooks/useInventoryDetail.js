import { useEffect, useState } from "react";
import axios from "axios";

const useInventoryDetail = (id) => {
  const [inventory, setInventory] = useState({});
  // Load data based on id
  useEffect(() => {
    const getItems = async () => {
      const url = `https://assignment-11-car-store-server.vercel.app/inventory/${id}`;
      const { data } = await axios.get(url);
      setInventory(data);
    };
    getItems();
  }, [id, inventory]);

  return [inventory];
};

export default useInventoryDetail;
