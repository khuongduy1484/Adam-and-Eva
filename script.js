let Person = function (names,gender,age,weight) {
    this.Names = names;
    this.Gender =gender;
    this.Age = age;
    this.Weight =weight
    this.getname =function () {
        return this.Names
    }
    this.getgender = function () {
        return this.Gender
    }
    this.getage = function () {
        return this.Age;
    }
    this.getweight = function () {
        return this.Weight;
    }
}
let Apple = function (weight2) {
    this.Weight2 = weight2;
    this.getWeight =function () {
        return this.Weight2;
    }
}
let apple = new Apple(10);
let a = apple.getWeight();
//Adam
let adam = new Person('Adam', 'nam', 30,70);
let names = adam.getname();
let genders = adam.getgender();
let ages = adam.getage();
let weights = adam.getweight();
function kiem_tra_tuoi_Adam() {

    alert(" name " + names + " gender " + genders + " age " + ages + " weight " + weights);
}
//EVA
let eva = new Person("Eva","nữ",28,45);
let names1 = eva.getname();
let ages1 = eva.getage();
let genders1 = eva.getgender();
let weights1 = eva.getweight();
function kiem_tra_tuoi_Eva() {
    alert(' name ' + names1 +" tuổi " + ages1 + " gender " + genders1 + " weight " + weights1);
}

    function Adam_ăn_táo() {
        if (a > 0) {
            weights++;
            a--;

            alert("weight of Adam " + weights);
            alert("weight of Apple " + a);
        } else {
            alert("het tao");
        }
    }

    function Eva_ăn_tao() {
        if (a > 0) {
            weights1++;
            a--;
            alert("weight  of Adam" + weights1);
            alert("weight of Apple " + a);
        } else {
            alert("het tao");
        }
    }












