let user = {};

Object.defineProperty(user, 'name', {
  value: 'John',
  writable: false, 
  enumerable: true,
  configurable: false 
});
console.log(Object.getOwnPropertyDescriptor(user, 'name',));

Object.defineProperty(user, 'age', {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: false
});
console.log(Object.getOwnPropertyDescriptor(user, 'age',));

Object.defineProperty(user, 'id', {
  value: '1234',
  writable: false,
  enumerable: true,
  configurable: false
});
console.log(Object.getOwnPropertyDescriptor(user, 'id',));


let dataBase = {
    dbName: 'user',
    dbType: 'MySQL',
}

let configurateDB = {
    token:'123',
    password: '567',
    user:'admin'
}


Object.seal(configurateDB);
delete configurateDB.password;
console.log(configurateDB.password);

Object.freeze(dataBase);
dataBase.dbName = 'coolmen';
console.log(dataBase.dbName);

let salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000
  };
  
  Object.defineProperty(salaries, "sum", {
    get: function () {
      let sum = 0;
      for (salary in this) {
        sum += this[salary];
      }
    
    },
    enumerable: false,
  
    set: function (value) {
      for (let i = 0; i < value.length; i++) { 
        let newData = value[i].split(":"); 
        let property = newData[0].trim();
        let salary = parseInt(newData[1]);
  
        this[property] = salary; 
      }
    }
  });
  
  salaries.addSalaries = ["frontend:2500", "backend:2000", "design:1500", "manager:2000"];
  console.log(salaries);

  let secondUser={
    name: 'Mike',
    surname: 'Davis',
    age: 25,
    }
  
    Object.defineProperty(secondUser, 'userProps',  {
   get info() {
     let userProps = '';
     for (const [key, value] of Object.entries(this)) {
       userProps += `${key}: ${value}, `;
     }
     return userProps.slice(0, -2); 
   },
   enumerable:false,
 })
  
  console.log(secondUser.userProps);