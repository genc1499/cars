// namespace app

const app = {}

app.init=()=>{
    app.carZ=[...app.cars];
    app.getCurrentDay();
    app.logIn();
    app.qSearch();
    app.listOfCars=document.getElementById('displayCars');
    app.listOfPages=document.getElementById('pages');
    // Query elements for slide out menu
        app.burger = document.querySelector('.burger');
        app.topp = document.querySelector('.top');
        app.middle = document.querySelector('.middle');
        app.bottom = document.querySelector('.bottom');
        app.slide = document.querySelector('.slideMenu');
    app.paginate();
    // h3 that will be appeneded to counter section 
        app.x=0;
        app.years=25;
        app.sold=1000;
        app.satisfaction=98;
        app.users = 2000;
    app.currentPage=1;
    app.displayCars(app.cars);
    // app.sortCars();
    app.getPriceSort();
    app.getSearchInputs();
    app.getSelections();
    app.make="";
    app.price="";
    app.mile="";
    app.year="";
    // Slide out menu method + boolean to track activity
        app.showSlideOutMenu();
        app.isOpen=false;
    app.mobileSearch();
    app.searchPage(); 
}

// Array of objects for each car

app.cars = [
    {make:'audi', type:'Audi A4', price:25000, miles:20000, hp: '210 kw (280 hp)',src:'./assets/audi.jpg', reg:'04-2017', year:2017, sold:true},

    {make:'audi', type :'Audi TT-S', price:45000, miles:0, hp: '200 kw (260 hp)', src:'./assets/audiGreen.jpg', reg:'07-2019', year:2019, sold:false},

    {make:'bmw', type:'BMW 3 Series', price:30000, miles:5000, hp: '220 kw (300hp)', src:'./assets/BMW.jpg', reg:'10-2016', year:2016, sold:false},

    {make:'chevrolet',type:'Corvette Stingray', price:75000, miles:0, hp:'250 kw (320hp)', src:'./assets/corvette.jpg', reg:'03-2020', year:2020, sold:false},

    {make:'fiat', type:'Fiat 500',price:30000,miles:50000, hp:'150 kw (190hp)',src:'./assets/fiat.jpg', reg:'03-2015', year:2015, sold:true},

    {make:'mercedes', type: 'Mercedes-Benz G-Class', price:80000, miles:30000, hp: '220 kw (300hp)',src:'./assets/gWagon.jpg', reg:'08-2020', year:2020, sold:false},

    {make:'jeep', type:'Jeep Wrangler', price:50000, miles:0, hp:'200 kw (260hp)', src:'./assets/jeep.jpg', reg:'12-2016', year:2016, sold:false},

    {make:'rangerover', type:'Range Rover Sport', price:20000, miles:50000, hp:'230 kw (280hp)',src:'./assets/landrover.jpg', reg:'01-2017', year:2017, sold:false},

    {make:'mercedes', type:'Mercedes-Benz AMG',price:60000, miles:10000, hp:'210 kw (260hp)', src:'./assets/mercedesAMGGT.jpg', reg:'06-2018', year:2018, sold:false},

    {make:'subaru', type:'Subaru WRX', price:35000, miles:20000, hp: '220 kw (300hp)',src:'./assets/subaruWRX.jpg', reg:'09-2020', year:2020, sold:false},

    {make:'volkswagon', type:'VW Westfalia', price:40000, miles:50000, hp: '160kw (210hp)',src:'./assets/vwWestfalia.jpg', reg:'07-2019', year:2019, sold:false},

    {make:'mercedes', type:'Mercedes-Benz Sprinter', price:25000, miles:40000, hp:'180kw (220hp)', src:'./assets/mercedesSprinter.jpg', reg:'08-2021', year:2021}

    // {make:'mercedes', type:'Mercedes-Benz Sprinter', price:25000, miles:40000, hp:'180kw (220hp)', src:'./assets/mercedesSprinter.jpg', reg:'08-2021', year:2021}
];

// Search Page
app.searchPage=()=>{
    const userSearch = document.getElementById('pageSearch');
    const userSearchMobile = document.getElementById('mobileQForm');
    app.desktopID = 'searchInput';
    app.mobileID = 'mobileQ';
    userSearch.addEventListener('submit',(e)=>{
        e.preventDefault();
        app.q = e.target.childNodes[3].value;
        !app.q?alert("Enter a search term"):app.findQuery(`${app.desktopID}`);
    })
    userSearchMobile.addEventListener('submit',(e)=>{
        e.preventDefault();
        app.middle.classList.remove('sr-only');
        app.slide.style.visibility='hidden';
        app.slide.classList.remove('open');
        app.topp.classList.remove('atOpenTop');
        app.bottom.classList.remove('atBottom');
        app.isOpen=false;
        app.q = e.target.childNodes[3].value;
        !app.q?alert("Enter a search term"):app.findQuery(`${app.mobileID}`);
    })
}

// Method to search for users query
app.findQuery = (inputID)=>{
    let search = document.getElementById(`${app.q}`);
    if(search){
        search.scrollIntoView();
        search.style.backgroundColor = "#FDFF47"
    }
    else{
        let qInput = document.getElementById(`${inputID}`);
        qInput.value="";
        qInput.placeholder="No results found"; 
    }

}

// Method to show login modal for mobile

app.mobileSearch =()=>{
    const mobileLogin = document.querySelector('.mobileLogin');
    // const mobileSearch = document.querySelector('.mobileSearch');
    let isOpen=false
    mobileLogin.addEventListener('click',(e)=>{
        e.preventDefault();
        const openSearch = document.querySelector('.logIn')
        if(!isOpen){
            openSearch.style.visibility='visible';
            isOpen=true
        }
       else{
            openSearch.style.visibility='hidden';
            isOpen=false;
       }
    })
}

// Method to display slide out menu

app.showSlideOutMenu = ()=>{

    app.burger.addEventListener('click',()=>{
        if(!app.isOpen){
            app.middle.classList.add('sr-only');
            app.slide.style.visibility='visible';
            app.slide.classList.add('open');
            app.topp.classList.add('atOpenTop');
            app.bottom.classList.add('atBottom');
            app.isOpen=true;
            const allClicks= document.querySelectorAll('.slideMenu li');
            allClicks.forEach(item=>{
                item.addEventListener('click',(e)=>{
                    console.log(e);
    
                    // Any clicks will result in the menu closing 
                    if(e.isTrusted && e.target.parentNode.className==='slideClose'){
                        app.middle.classList.remove('sr-only');
                        app.slide.style.visibility='hidden';
                        app.slide.classList.remove('open');
                        app.topp.classList.remove('atOpenTop');
                        app.bottom.classList.remove('atBottom');
                        app.isOpen=false;
                    }
                })
            })
        }
        else{
            app.middle.classList.remove('sr-only');
            app.slide.style.visibility='hidden';
            app.slide.classList.remove('open');
            app.topp.classList.remove('atOpenTop');
            app.bottom.classList.remove('atBottom');
            app.isOpen=false;
        }
    })
}

// Method to get user's selection in form 

app.getSelections = () =>{
    const make = document.getElementById('make')
    const year = document.getElementById('year')
    const miles = document.getElementById('miles')
    const price = document.getElementById('maxPrice')

    make.addEventListener('change',(e)=>{
        console.log(e.target.value)
        app.make=e.target.value
    })

    year.addEventListener('change',(e)=>{
        console.log(e.target.value);
        app.year=e.target.value
    })

    miles.addEventListener('change',(e)=>{
        console.log(e.target.value);
        app.mile=e.target.value
    })

    price.addEventListener('change',(e)=>{
        console.log(e.target.value);
        app.price=e.target.value
    })

}

// Method that sets up submit event listner and checks data based on user's selections
app.getSearchInputs = () =>{
    const searchResults = document.getElementById('searchCars')
    searchResults.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(app.make && app.make!=='all'){
            app.carZ = app.cars.filter(item=>{
                return item.make==app.make;
            })
        }

        else if(app.make==='all'){
            app.carZ=[...app.cars];
        }
    
        app.displayCars(app.carZ);
 
    })
}

// Method to get user selection for price low to high/high to low selection
app.getPriceSort=()=>{
    const priceSort = document.getElementById('switchPrice')
    priceSort.addEventListener('change',(e)=>{
        e.preventDefault();
        app.sortPrice = e.target.value
        console.log(e.target.value);
        app.currentPage=1;
        app.sortCars(app.carZ);
    })
}

// Method that will paginate app on intitialization

app.paginate = () =>{
    
    app.listOfCars.innerHTML=``;
    let pages = Math.ceil(app.cars.length/6);

    for(let x=1;x<=pages;x++){
        app.pageNum = document.createElement('button');
        app.pageNum.textContent=`${x}`;
        app.listOfPages.append(app.pageNum);
    }

    app.allPages = document.querySelectorAll('#pages button')
    app.allPages.forEach(item=>{
         item.addEventListener('click',(e)=>{
            app.currentPage=e.target.textContent;    
        app.sortCars(app.carZ);
        },{once:true});
    });
}
  
app.displayCars=(array)=>{
    app.listOfCars.innerHTML='';
    app.listOfPages.innerHTML=``;
    let pages = Math.ceil(array.length/6);

    for(let x=1;x<=pages;x++){
        app.pageNum = document.createElement('button');
        app.pageNum.textContent=`${x}`;
        app.pageNum.setAttribute('id', `${x}`)
        app.listOfPages.append(app.pageNum);
    }

    app.allPages = document.querySelectorAll('#pages button')
    app.allPages.forEach((item, index)=>{
    
    item.addEventListener('click',(e)=>{
        app.currentPage=e.target.textContent;
        app.sortCars(array);
        })
    })

    // Slice method will separte data into a max. of 6 items per page
    array.slice(6*(app.currentPage-1), Math.min(array.length, 6 * app.currentPage)).forEach(item=>{
    // Create New Elements for each property
        let list = document.createElement('li');
        if(!item.sold){
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
        }

        else{
            list.innerHTML= 
            `<div class = "carCard">
                <div class="sold">
                    <p>Sold</p>
                </div>
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

        }
    
    app.listOfCars.append(list);
    

    })
}



// Method to sort cars (price:low to high and high to low)
app.sortCars=(array)=>{
    
    if(app.sortPrice==='default' || app.sortPrice==='low'){
        app.lowHighArray = array.sort((a,b)=>a.price-b.price);
        app.displayCars(app.lowHighArray);
    }
    
    else{
        app.highLowArray = array.sort((a,b)=>b.price-a.price);
        app.displayCars(app.highLowArray);
    }

}

// Method to find todays day and highight day in contact section above footer
app.getCurrentDay = () =>{
    const date = new Date().toLocaleString("en", { weekday: "long" }).toLowerCase();
    let days = document.querySelectorAll('.day');
    days.forEach(item=>{
        if (item.id===date){
            item.style.fontWeight="bolder";
            item.style.color='white';
        }
    })
}

// Method to display log-in modal
app.logIn=()=>{
    let open = false
    const logInPage = document.querySelector('.logInBtn')

    logInPage.addEventListener ('click',()=>{
        const logInModal = document.querySelector('.logIn')
        const closeLogIn = document.querySelector('#closeLogin')
        if(!open){
            logInModal.style.visibility='visible';
            open =true;

            // Close login modal
            closeLogIn.addEventListener('click',(e)=>{
                e.preventDefault(e);
                    console.log(e);
                    logInModal.style.visibility='hidden';
                    open=false;
                
            })
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
    const search = document.querySelector('.searchBtn');
    search.addEventListener('click',(e)=>{
    
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
        headingSold.textContent=`${app.x.toLocaleString("en-US")}+`;
    }

    if(app.x<=app.satisfaction){
        headingHappy.textContent=`${app.x}%`;
    }

    if(app.x<=app.users){
        headingUsers.textContent=`${app.x.toLocaleString("en-US")}+`;
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


