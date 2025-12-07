class Weapon{ 
    constructor(_name, attack, durability,  range){
        this._name = _name;
        this.attack = attack;
        this.durability = durability;
        this.init_durability = durability;
        this.range = range;
    }

    takeDamage(damage){
        if (this.durability - damage > 0){
            this.durability -= damage;
        }
        else{
            this.durability = 0
        }
    }
    getDamage(){
        console.log(this.isBroken())
        if (this.isBroken() == true){
            return 0
        }
        if (this.durability > this.init_durability*0,3){
            return this.attack
        } else{
            return this.attack/2
        }
    }

    isBroken(){
        console.log(damage)
        if (damage == 0){
            return true
        } else{
            return false
        }
    }
}

class Arm extends Weapon{
    constructor(){
        super('Рука', 1, Infinity, 1)
    }
}

class Bow extends Weapon{
    constructor(){
        super('Лук', 10, 200, 3)
    }
}

class Sword extends Weapon{
    constructor(){
        super('Меч', 25, 500, 1)
    }
}

class Knife extends Weapon{
    constructor(){
        super('Нож', 5, 300, 1)
    }
}

class Staff extends Weapon{
    constructor(){
        super('Посох', 8, 300, 2)
    }
}

class LongBow extends Bow{
    constructor(){
        super()
        this._name = 'Длинный лук';
        this.attack = 15
        this.range = 4
    }
}

class Axe extends Sword{
    constructor(){
        super()
        this._name = 'Секира';
        this.attack = 27
        this.durability = 800
        this.init_durability = 800
    }
}

class StormStaff extends Staff{
    constructor(){
        super()
        this._name = 'Посох Бури';
        this.attack = 10
        this.range = 3
    }
}

class Player{
    constructor (position, name){
        this.life = 100
        this.magic = 20
        this.speed = 1
        this.attack = 10
        this.agility = 5
        this.luck = 10
        this.description = 'Игрок'
        this.weapon = new Arm()
        this.position = position
        this.name = name
    }

    getLuck(){
        return (Math.floor(Math.random() * 100) + 1 + this.luck) / 100
    }
}

let bow = new Bow();
console.log(bow.getDamage(), bow.durability); // 10 200
bow.takeDamage(100);
console.log(bow.getDamage(), bow.durability); // 10 100
bow.takeDamage(50);
console.log(bow.getDamage(), bow.durability); // 5 50
bow.takeDamage(150);
console.log(bow.getDamage(), bow.durability); // 0 0