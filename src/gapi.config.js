export async function gapiConfig(callback) {
  // Load google API client
  await window.gapi.client.init({
    'apiKey': 'AIzaSyDbIsLa0IvjUCFL-gCatgwjCLR2lBTpOBc'
  });
  //Load Youtube API after google API client has been loaded
  await window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
  // Invoke given callback function after Youtube API has been loaded
  callback()
}

