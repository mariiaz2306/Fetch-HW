
const fetchUsers = (id, callback) => {
    fetch(`https://dummyjson.com/users/${id}`)
        .then(response => response.json())
        .then((data) => {
        console.log(data);
        callback(data)

})
};


const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

function displayUsers(userData) {

document.body.append(mainContainer)

const userImage = document.createElement('img');
userImage.src = userData.image;
userImage.alt = 'User Image';
userImage.classList.add('user-image');

    // const usering = document.createElement('div')
    // usering.classList.add("user-info");
    // mainContainer.append(usering)
    
const userInfo = document.createElement('div');
 userInfo.classList.add('user-info__content');
userInfo.innerHTML = `
    <p><strong>Name:</strong> ${userData.firstName}
    <p><strong>Last Nmane:</strong> ${userData.lastName}</p>
    <p><strong>Age:</strong> ${userData.age}</p>
    <p><strong>Email :</strong> ${userData.email}</p>
    <p><strong>Phone:</strong> ${userData.phone}</p>
`;
    userInfo.appendChild(userImage);
    mainContainer.append(userInfo);
}


fetchUsers(5, (users) => displayUsers(users))
fetchUsers(1, (users) => displayUsers(users))
fetchUsers(2, (users) => displayUsers(users))
fetchUsers(3, (users) => displayUsers(users))
fetchUsers(4, (users) => displayUsers(users))
fetchUsers(6, (users) => displayUsers(users))
fetchUsers(7, (users) => displayUsers(users))
fetchUsers(8, (users) => displayUsers(users))
fetchUsers(9, (users) => displayUsers(users))
fetchUsers(10, (users) => displayUsers(users))
fetchUsers(11, (users) => displayUsers(users))
fetchUsers(12, (users) => displayUsers(users))
fetchUsers(13, (users) => displayUsers(users))
fetchUsers(14, (users) => displayUsers(users))
fetchUsers(15, (users) => displayUsers(users))










    







