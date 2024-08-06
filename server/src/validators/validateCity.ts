const isValidCity = (city: string): boolean => {
    const cityRegex = /^[a-zA-Z\s\-]+$/;    
    return cityRegex.test(city) && city.length > 0 && city.length <= 100;
  };

export default isValidCity;
