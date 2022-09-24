// namespace app

const app = {}

app.init=()=>{
    app.getCurrentDay();
    app.logIn();
    app.qSearch();
    // numbers for count section
    app.x=0;
    app.years=25;
    app.sold=1000;
    app.satisfaction=98;
    app.users = 2000;
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

// Method to display log in modal
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

// Method to show counters going up

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