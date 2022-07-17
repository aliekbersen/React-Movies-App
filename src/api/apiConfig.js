const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a3297264d26f92196a13af6e6ae759d0',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}


export default apiConfig;