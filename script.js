
var displayAddress = ({location}) => {
document.querySelector('.details').innerHTML =
location.street + ", " + location.city + ", " + location.state; 
// `<p>Street: ${location.street}</p>
// <p>City: ${location.city}</p>
// <p>State: ${location.state}</p>`;
};
var displayPhone = ({phone, cell}) => {
document.querySelector('.details').innerHTML = 
phone + " / " + cell; 
// `<p>Phone: ${phone}</p>
// <p>Cell: ${cell}</p>`;
};
var displayBirthdate = ({dob}) => {
document.querySelector('.details').innerHTML =  
dob.age + " years old";
// `<p>Date: ${dob.date}</p>
// <p>Age: ${dob.age}</p>`;
};

var displayExtraUserInfo = (extraUserInfo) => {
document.getElementById('btn-birthdate').addEventListener('click', ()=>{displayBirthdate(extraUserInfo)});
document.getElementById('btn-phone').addEventListener('click', ()=>{displayPhone(extraUserInfo)});
document.getElementById('btn-address').addEventListener('click', ()=>{displayAddress(extraUserInfo)});  
};

//displayExtraUserInfo();


const notify = (msg) => {
const toastr = document.querySelector('.messages');
if(!toastr) return;

toastr.textContent = msg;
if(!toastr.classList.contains('on')) {
    toastr.classList.add('on');
}
};

const clearNotice = () => {
const toastr = document.querySelector('.messages');
if(!toastr) return;

toastr.textContent = '';
toastr.classList.remove('on');
};

const displayUserPhotoAndName = (data) => {
if(!data) return;

// add your code here
const {results} = data;
const [profile] = results;
document.querySelector('.header-text').innerHTML =
profile.name.title + " " + profile.name.last + " " + profile.name.first;
//`<span>${profile.name.title}</span> 
//<span>${profile.name.last}</span> 
//<span>${profile.name.first}</span>`;

document.querySelector('#profile-image').src = profile.picture.large;

displayExtraUserInfo(profile);
clearNotice();
};
    
const getAUserProfile = () => {
const api = 'https://randomuser.me/api/';

// make API call here
fetch(api)
.then((res)=>res.json())
.then((data)=> {
    displayUserPhotoAndName(data)
})        
notify(`requesting profile data ...`);
};

const startApp = () => {

// invoke the getAUserProfile here
getAUserProfile();

};

startApp();
