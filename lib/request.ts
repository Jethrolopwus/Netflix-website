import axios from 'axios';

export const getApiResponse = async (sub_url: string) => {
    const apiKey = '5d47ad05609e34ed42d84e7d12d13b30'; 
    const baseUrl = 'https://api.themoviedb.org/3';

    try {
        const response = await axios.get(`${baseUrl}${sub_url}`, {
            params: { api_key: apiKey }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data from API:', error);
        throw error;
    }
};



// export async function getApiResponse(sub_url: "string") : Promise<{ results: any[] }>{
 
//   try {
//     const url =
//       `${process.env.NEXT_PUBLIC_API_URL}${sub_url}`;
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           `Bearer${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
//       },
//     };
   

    

//     const res = await fetch(url, options);
//     const data = res.ok ? await res.json() : Promise.reject(res);

//     return data;

//   } catch (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// }


