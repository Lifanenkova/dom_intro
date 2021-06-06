'use strict';
const users = [{
    id: 1,
    firstName: 'User1',
    lastName: 'Userovich1',
    imgSrc: 'https://www.google.com/search?q=rfhnbyrf&tbm=isch&source=iu&ictx=1&fir=bPlxidVrXgqXEM%252CY8aPgLiWAdVUBM%252C_&vet=1&usg=AI4_-kTV6tYiSLd9NOZFaS8DxmHrH1amgg&sa=X&ved=2ahUKEwjS6Pbsr4PxAhX3g_0HHbHRBbkQ9QF6BAgDEAE#imgrc=bPlxidVrXgqXEM',
},
{
    id: 2,
    firstName: 'User2',
    lastName: 'Userovich2',
    imgSrc: 'https://www.google.com/search?q=rfhnbyrf&tbm=isch&source=iu&ictx=1&fir=6FhVWLhHi76P-M%252CJFJaTfL0feLwCM%252C_&vet=1&usg=AI4_-kRMDh_wybOlq41LAAsyodAWkbYznw&sa=X&ved=2ahUKEwjS6Pbsr4PxAhX3g_0HHbHRBbkQ9QF6BAgHEAE#imgrc=6FhVWLhHi76P-M',
},
{
    id: 3,
    firstName: 'User3',
    lastName: 'Userovich3',
    imgSrc: 'https://www.google.com/search?q=rfhnbyrf&tbm=isch&source=iu&ictx=1&fir=YbeikspyZFdsAM%252C1BVwT7JrPPoryM%252C_&vet=1&usg=AI4_-kSsFwUNg_q1XfTlbetvIWZ7nSsrkA&sa=X&ved=2ahUKEwjS6Pbsr4PxAhX3g_0HHbHRBbkQ9QF6BAgFEAE#imgrc=YbeikspyZFdsAM'
},
];

const altImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9D9yUd9_4Kx9nrwX4SEVZBJYm1wkAMJp_Q&usqp=CAU';
const userList = document.getElementById('userList');

users.forEach(user => userList.append(generateUserListItem(user)));

function generateUserListItem({imgSrc, firstName, lastName}){
    const userListItem = document.createElement('li');
    const imageWrapper = document.createElement('div');
    userListItem.append(imageWrapper);
    const image = document.createElement('img');
    image.setAttribute('src', imgSrc)? imageSrc:altImage;
    image.setAttribute('alt', 'user photo');
    imageWrapper.append(image);
    const userInfo = document.createElement('div');
    userInfo.append(`${firstName} ${lastName}`)
    userListItem.append(userInfo);


    return userListItem;
}