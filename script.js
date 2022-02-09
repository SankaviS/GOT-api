async function got() {
    try {
        let x = document.getElementById("userinput").value;
        console.log(x);
        let api = await fetch(`https://thronesapi.com/api/v2/Characters/${x} `);
        console.log(api);
        let result = await api.json();
        console.log(result);
        let image = `${result.imageUrl}`
        let id = `${result.id}`
        let first = `${result.firstName}`
        let last = `${result.lastName}`
        let character = `${result.fullName}`
        let house = `${result.family}`
        let title = `${result.title}`
        let result1 = document.getElementById("result");
        result1.innerHTML = `<b><img
          src="${image}" alt="character image"/> <br> ID: ${id}<br> First Name: ${first}<br>Last Name: ${last} <br> Character Name: ${character} <br> Title: ${title}<br>
            House Name: ${house}<br></b>    `;
    }
    catch (error) {
        console.log(error);
    }
}