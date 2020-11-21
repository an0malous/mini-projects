import User from './User';
import Company from './Company';
const user = new User();
const company = new Company();
const map = document.querySelector('.map');
new google.maps.Map(map, {zoom: 2, center: {
    lat: 0,
    lng: 0  
    }
});