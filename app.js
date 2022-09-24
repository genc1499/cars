// namespace app

const app = {}

app.init=()=>{
    app.getCurrentDay();
    app.logIn();
    app.qSearch();
    // h3 that will be appeneded to counter section 
    app.x=0;
    app.years=25;
    app.sold=1000;
    app.satisfaction=98;
    app.users = 2000;
    app.sortCars();
    app.getPriceSort()
}

// Array of objects for each car

app.cars = [
    {make:'audi', type:'Audi A4', price:25000, miles:20000, hp: '210 kw (280 hp)',src:'./assets/audi.jpg', reg:'04-2015', year:2015, sold:false},

    {make:'audi', type :'Audi TT-S', price:45000, miles:0, hp: '200 kw (260 hp)', src:'./assets/audiGreen.jpg', reg:'07-2019', year:2019, sold:false},

    {make:'bmw', type:'BMW 3 Series', price:30000, miles:5000, hp: '220 kw (300hp)', src:'./assets/BMW.jpg', reg:'10-2016', year:2016, sold:false},

    {make:'chevrolet',type:'Corvette Stingray', price:75000, miles:0, hp:'250 kw (320hp)', src:'./assets/corvette.jpg', reg:'03-2020', year:2020, sold:false},

    {make:'fiat', type:'Fiat 500',price:30000,miles:50000, hp:'150 kw (190hp)',src:'./assets/fiat.jpg', reg:'03-2015', year:2015, sold:false},

    {make:'mercedes', type: 'Mercedes-Benz G-Class', price:80000, miles:30000, hp: '220 kw (300hp)',src:'./assets/gWagon.jpg', reg:'08-2020', year:2020, sold:false},

    {make:'jeep', type:'Jeep Wrangler', price:50000, miles:0, hp:'200 kw (260hp)', src:'./assets/jeep.jpg', reg:'12-2016', year:2016, sold:false},

    {make:'rangrover', type:'Range Rover Sport', price:20000, miles:50000, hp:'230 kw (280hp)',src:'./assets/landrover.jpg', reg:'01-2017', year:2017, sold:false},

    {make:'mercedes', type:'Mercedes-Benz AMG',price:60000, miles:10000, hp:'210 kw (260hp)', src:'./assets/mercedesAMGGT.jpg', reg:'06-2018', year:2018, sold:false},

    {make:'subaru', type:'Subaru WRX', price:35000, miles:20000, hp: '220 kw (300hp)',src:'./assets/subaruWRX.jpg', reg:'09-2020', year:2020, sold:false},

    {make:'volkswagon', type:'VW Westfalia', price:40000, miles:50000, hp: '160kw (210hp)',src:'./assets/vwWestfalia.jpg', reg:'07-2019', year:2019, sold:false},

    {make:'mercedes', type:'Mercedes-Benz Sprinter', price:25000, miles:40000, hp:'180kw (220hp)', src:'./assets/mercedesSprinter.jpg', reg:'08-2021', year:2021}
];

// Method to get user selection for price sorting
app.getPriceSort=()=>{
    const priceSort = document.getElementById('switchPrice')
    priceSort.addEventListener('change',(e)=>{
        e.preventDefault();
        app.sortPrice = e.target.value
        console.log(e.target.value);
        app.sortCars();
    })
}

// Method to dynamically display cars
app.displayCars=(array)=>{
    let listOfCars=document.getElementById('displayCars');
    listOfCars.innerHTML=``;
    if(array.length>6){
    array.slice(0,6).forEach(item=>{
        // Create New Elements for each property
        let list = document.createElement('li');

    list.innerHTML= 
        `<div class = "carCard">

        <div class= "carImg">
            <img src =${item.src} alt=${item.type}>
        </div>

    
            <h3>$${item.price.toLocaleString("en-US")}</h3>
            <div class="icons">
                <button><span class="fa-solid fa-plus"></span></button>
                <button><span class="fa-regular fa-star"></span></button>
            </div>
 

        <div class = 'carInfo'>
            <h4>${item.type}</h4>
            <p><span class="fa-solid fa-calendar-days"></span>${item.reg}</p>
            <p><span class="fa-solid fa-gauge"></span>${item.miles.toLocaleString("en-US")}</p>
            <p><span class="fa-solid fa-horse"></span>${item.hp}</p>
        </div>

    </div>`
    
    listOfCars.append(list);
    

    })
}
}

// Method tro sort cars (price:low to high)
app.sortCars=()=>{
    if(app.sortPrice==='default' || app.sortPrice==='low'){
        app.lowHighArray = app.cars.sort((a,b)=>a.price-b.price);
        app.displayCars(app.lowHighArray);
    }
    
    else{
        app.highLowArray = app.cars.sort((a,b)=>b.price-a.price);
        app.displayCars(app.highLowArray);
    }

}























// Method to find todays day and highight day in contact section above footer
app.getCurrentDay = () =>{
    const date = new Date().toLocaleString("en", { weekday: "long" }).toLowerCase();
    let days = document.querySelectorAll('.day');
    days.forEach(item=>{
        if (item.id===date){
            item.style.color='#EA3546';
        }
    })
}

// Method to display log-in modal
app.logIn=()=>{
    let open = false
    const logInPage = document.querySelector('.logInBtn')
    logInPage.addEventListener ('click',()=>{
       const logInModal = document.querySelector('.logIn')
       if(!open){
        logInModal.style.visibility='visible';
        open =true
       }

       else{
        logInModal.style.visibility='hidden';
        open=false;
       }
    })
}

// Method to open up query Search
app.qSearch = ()=>{
    let open = false
    const search = document.querySelector('.searchBtn')
    search.addEventListener('click',(e)=>{
        console.log(e);
       const openSearch = document.querySelector('.searchBar')
       if(!open){
        openSearch.style.visibility='visible';
        open =true
       }
       else{
        openSearch.style.visibility='hidden';
        open=false;
       }
    })
}

// Method to show counters incrementing by 1
app.displayCount =()=>{
    const headingYear = document.querySelector('.yearsIn');
    const headingSold = document.querySelector('.carsSold');
    const headingHappy = document.querySelector('.satisfaction');
    const headingUsers = document.querySelector('.users');

    if(app.x<=app.years){
        headingYear.textContent=`${app.x}`;
    }
        
    if(app.x<=app.sold){
        headingSold.textContent=`${app.x}+`;
    }

    if(app.x<=app.satisfaction){
        headingHappy.textContent=`${app.x}%`;
    }

    if(app.x<=app.users){
        headingUsers.textContent=`${app.x}+`;
    }

    else{
        clearInterval(app.count);
    }

    app.x++;
}


app.count=setInterval(()=>{
    app.displayCount();
},5)

// Intialize APP
app.init();