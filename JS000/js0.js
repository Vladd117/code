
let user = {
    age: null,
    name: 'Vlad',
    sname: 'Suhanov',
    birth: {
        day: 17,
        month: 6,
        year: 1981,
    },
    age: function(){ //Вычисляем возраст по дате рождения
        let i;
        let now = new Date(); 
        //console.log(now.getDate() + ' ' + now.getMonth()+1 + ' ' + now.getFullYear() + ' --- ' + this.birth.day + ' ' + this.birth.month + ' ' + this.birth.year);
        if (this.birth.month < now.getMonth()+1){i=(now.getFullYear() - this.birth.year)};
        if (this.birth.month > now.getMonth()+1){i=(now.getFullYear() - this.birth.year -1)};
        if (this.birth.month === now.getMonth()+1){
            if (this.birth.day <= now.getDate()){i=(now.getFullYear() - this.birth.year)} else {i=(now.getFullYear() - this.birth.year - 1)};     
        };    
    
    return i;
    }
        
    }

console.log(user.age());