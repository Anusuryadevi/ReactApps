export const fetchUser = async () => {
    const res = await fetch('https://randomuser.me/api/')
    const user = await res.json();
    console.log("inside fetch..",user.results[0])
    const data = {};
    data.name = user.results[0].name.first + " " + user.results[0].name.last;
    data.email = user.results[0].email;
    data.phone = user.results[0].phone;
    data.DOB = user.results[0].dob.date;
    data.address = user.results[0].location.city + " " + user.results[0].location.country;
    data.password = user.results[0].login.password;
   data.imgurl = user.results[0].picture.large;
   data.title = "Hi My name is"
   data.info = data.name
   console.log("inside fetchhhh", data)
    return data;
}