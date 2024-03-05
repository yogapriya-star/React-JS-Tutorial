const URL ="https://api.lyrics.ovh/v1";
const artist = "Coldplay";
const title = "Adventure of a Lifetime";

const request1 = fetch(`${URL}/${artist}/${title}`);
const request2 = fetch(`${URL}/${artist}/${title}`).then((res) => res.json());
const request3 = fetch(`${URL}/${artist}/${title}`).then((res) => res.json())
    .then((data) => console.log(data.lyrics))
    .catch((error) =>
        console.error(`Error fetching lyrics for ${artist} - ${title}:`, error),
    );
console.log(request1);
console.log(request2);
console.log(request3);