import { useEffect, useState } from "react";
import axios from "axios";

const useMenuData = () => {
    const [menuData, setMenuData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const {data} = await axios.get('menu.json');   
            setMenuData(data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
      
  return  [menuData, loading, error];
}

export default useMenuData
