export const searchYoutube = async(query) => {
    const { result } = await window.gapi.client.youtube.search.list({
        "part": "id, snippet",
        "q": query
    });
    return result
}