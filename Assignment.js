class Person {
    constructor (name, number) {
        this.name = name;
        this.number = number;
    }
}

class Dog {
    constructor (name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Adoption {
    constructor (person, dog, date) {
        this.person = person;
        this.dog = dog;
        this.date = date;
    }
}

class Menu {
    constructor () {
        this.dogs = [];
        this.people = [];
        this.adoptions = [];
        this.selectedOption = null;
    }

    start () {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    selection = this.showDogsMenu();
                    if (selection == 1){
                        this.addDog();
                    }
                    else if (selection == 2){
                        this.deleteDog();
                    }
                    else if (selection == 3){
                        this.showDogs();
                    }
                    else{
                        selection = 0;
                    }
                    break;
                case '2':
                    selection = this.showPeopleMenu();
                    if (selection == 1){
                        this.addPerson();
                    }
                    else if (selection == 2){
                        this.deletePerson();
                    }
                    else if (selection == 3){
                        this.showPeople();
                    }
                    else{
                        selection = 0;
                    }
                    break;
                case "3":
                    selection = this.showAdoptionMenu();
                    if (selection == 1){
                        this.addAdoption();
                    }
                    else if (selection == 2){
                        this.deleteAdoption();
                    }
                    else if (selection == 3){
                        this.showAdoption();
                    }
                    else{
                        selection = 0;
                    }
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) Dogs
        2) People
        3) Adoptions
        `);
    }

    showDogsMenu() {
        return prompt(`
        0) back
        1) add dog
        2) delete dog
        3) show all dogs
        `);
    }

    showPeopleMenu() {
        return prompt(`
        0) back
        1) add person
        2) delete person
        3) show all people`)
    };

    showAdoptionMenu() {
        return prompt(`
        0) back
        1) create adoption pair
        2) delete adoption pair
        3) show adoption pairs
        `);
    }

    addAdoption() {
        let person = prompt('Enter name of the person:');
        let dog = prompt('Enter the name of the dog:')
        let date = prompt('Enter the date of the adoption')
        this.adoptions.push(new Adoption(person, dog, date));
    }

    deleteAdoption() {
        let index = prompt('Enter the index of the person you would like to delete:');
        if (index > -1 && index < this.people.length) {
            this.people.splice(index, 1);
        }
    }

    showAdoption() {
        let AdoptionString = '';
        for (let i = 0; i < this.adoptions.length; i++) {
            AdoptionString += i + ') ' + this.adoptions[i].person + ', ' + this.adoptions[i].dog + ', ' + this.adoptions[i].date + '\n';   
        }
        alert(AdoptionString);
    }

    addPerson() {
        let name = prompt('Enter name of the person:');
        let number = prompt('Enter the phone number of the person:')
        this.people.push(new Person(name, number));
    }

    deletePerson() {
        let index = prompt('Enter the index of the person you would like to delete:');
        if (index > -1 && index < this.people.length) {
            this.people.splice(index, 1);
        }
    }

    showPeople() {
        let PeopleString = '';
        for (let i = 0; i < this.people.length; i++) {
            PeopleString += i + ') ' + this.people[i].name + ', ' + this.people[i].number + '\n';   
        }
        alert(PeopleString);
    }

    addDog() {
        let name = prompt('Enter name of the dog:');
        let breed = prompt('Enter the breed of the dog:')
        this.dogs.push(new Dog(name, breed));
    }

    deleteDog() {
        let index = prompt('Enter the index of the dog you would like to delete:');
        if (index > -1 && index < this.dogs.length) {
            this.dogs.splice(index, 1);
        }
    }

    showDogs() {
        let dogsString = '';
        for (let i = 0; i < this.dogs.length; i++) {
            dogsString += i + ') ' + this.dogs[i].name + ', ' + this.dogs[i].breed + '\n';   
        }
        alert(dogsString);
    }
}

let menu = new Menu();
menu.start();
