const headphones = [
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
    },
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
    },
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 9527,
        rate: 4.7,
    },
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 6527,
        rate: 4.7,
    },
    {
        img:"./assets/image/BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 7527,
        rate: 4.7,
    }
]

// Прослушка на всем окне
window.addEventListener('click', function(event){

    let counter;

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        // Находим обертку счетчика
        const bottomAmount = event.target.closest('.bottom__amount');
        // Находим див с числом счетчика
        counter = bottomAmount.querySelector('[data-counter]');

    }

    // Проверяем, является ли элемент кнопкой Плюc
    if(event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // Проверяем, является ли элемент кнопкой Минус
    if(event.target.dataset.action === 'minus') {

        // Проверка счетчика (чтобы было > 1)
        if (parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;

    }
    }
})


