export async function gapiConfig() {
  await window.gapi.client.init({
    'apiKey': 'AIzaSyDbIsLa0IvjUCFL-gCatgwjCLR2lBTpOBc'
  });
  await window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
}

