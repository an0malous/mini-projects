import faker from 'faker';

class User {
    
    name: string;
    location: {
        lat: Number;
        lng: Number;
    };
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }; 
    };
};

export default User;