class Cat
{
    constructor(food) {
        this.food = food;
    }

    feed() {
        this.food += 10;
        if(this.food >= 100){
            this.food = 100;
        }
    }

    checkState() {
        if (cat.food > 50) {
            document.querySelector('.pet_img').src = 'images.JFIF'
        }else {
            document.querySelector('.pet_img').src = 'images1.PNG'
        }
        document.querySelector('.food').textContent = cat.food;
    }
}

const cat = new Cat(100);

let intervalId = setInterval(() => {
    cat.food -= Math.floor(Math.random() * 5);
    if (cat.food <= 0){
        cat.food = 0;
        clearInterval(intervalId);
    }
    cat.checkState();
    console.log(cat.food);
}, 3000);

const btnFeed = document.querySelector('.feed');
btnFeed.addEventListener('click', () => {
    cat.feed();
    console.log(cat.food);
});

