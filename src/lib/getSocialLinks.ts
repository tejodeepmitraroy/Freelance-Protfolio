const getSocialLinks = async ():Promise<getSocialLinks> => {
    try {
      const response = await fetch(
        "https://mf1p1xx3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22socialLinks%22%5D%5B0%5D"
      );
      const data = await response.json();
      return data.result;
    } catch (error) {
      throw new Error;
    }
  };
  export default getSocialLinks;
  