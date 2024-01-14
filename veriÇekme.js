const url = "https://randomuser.me/api"
const container = document.querySelector(".container")

const getData = async () => {
   try {
      let res = await fetch(url).then((res) => res.json())
      createPerson(res)

      } catch (error) {
      console.log(error)
   }
}

const createPerson = (res) => {
   container.innerHTML =`<img src=${res.results[0].picture.thumbnail} width="100px" height="100px">
<p>
    <i class="bi bi-person-fill"></i> Name:
    <span class="name">${res.results[0].name.first}</span>
</p>
<p>
    <i class="bi bi-person-fill"></i> LastName:
    <span class="name">${res.results[0].name.last}</span>
</p>
<p>
    <i class="bi bi-geo-alt-fill"></i> Location:
    <span class="name">${res.results[0].location.city}</span>
</p>
<p>
    <i class="bi bi-telephone-fill"></i> Phone:
    <span class="name">${res.results[0].phone}</span>
</p>
<p>
    <i class="bi bi-envelope-fill"></i> Email:
    <span class="name">${res.results[0].email}</span>
</p>
` 
}

document.querySelector("button").addEventListener("click",getData);