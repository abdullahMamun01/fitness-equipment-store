import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Type for the hook parameters
interface UseQueryParamOptions {
  paramName: string;
}

const useQueryParam = ({ paramName }: UseQueryParamOptions) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Initialize queryParams from location.search
  const [queryParams, setQueryParams] = useState<URLSearchParams>(() => new URLSearchParams(location.search));

  // Function to update a single query parameter
  const updateQueryParam = (value: string | string[] | null) => {
    setQueryParams(prevParams => {
      const newParams = new URLSearchParams(prevParams);
      if (value === null || value.length == 0) {
        newParams.delete(paramName);
      } else if (Array.isArray(value)) {
        // Convert array to a comma-separated string
        newParams.set(paramName, value.join('|'));
      } else {
        newParams.set(paramName, value);
      }
      console.log(newParams.get('category'))
      // Navigate with the updated query params
      navigate({ search: newParams.toString() });

      return newParams;
    });
  };

  // Sync queryParams state with URL changes
  useEffect(() => {
    setQueryParams(new URLSearchParams(location.search));
  }, []);

  // Retrieve a single parameter value
  const getParamValue = () => {
    const value = queryParams.get(paramName);
    return value?.split("|");
  };

  return {
    queryParams,
    updateQueryParam,
    getParamValue,
    navigate
  };
};

export default useQueryParam;
