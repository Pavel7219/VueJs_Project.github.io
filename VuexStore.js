const store = new Vuex.Store({
    state:{
        pictures:[
            { url:"http://edinstvennaya.ua/uploads/files/Depositphotos_48319749_m-2015.jpg",

            } ,
            {url:"http://nv.ua/img/gallery/1980/49/134766_main.jpg",

            },
            {url:"http://edinstvennaya.ua/uploads/files/Depositphotos_31202309_m-2015.jpg",

            },
            {url:"http://edinstvennaya.ua/uploads/files/Depositphotos_29980283_m-2015.jpg",

            },
            {url:"http://edinstvennaya.ua/uploads/files/Depositphotos_5734735_m-2015.jpg",

            }
        ],
        currentCounterValue: 0,
        transitionName: "slide-left",
    },
    mutations:  {
        nextPicture: state => {
        state.transitionName = "slide-right",
        state.currentCounterValue  = (state.currentCounterValue === (state.pictures.length - 1) ? 0 : (state.currentCounterValue + 1))

        },
    previousPicture: state => {
    state.transitionName = "slide-left",
    state.currentCounterValue  = state.currentCounterValue === 0 ? state.pictures.length - 1 :
        state.currentCounterValue - 1
        }
    },
})