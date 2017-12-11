
const router = new VueRouter({
    props:['id'],
    routes: [
        {
            path: "/Region",
            component: regions,
            props: {name:"one"},
            children:[
               {
                    path:"Child1",
                    component: Child1,
                    props: {name:"North"}

                },
                {
                    path:"Child2",
                    component: Child1,
                    props: {name:"South"}

                },
                {
                    path:"child3",
                    component: Child1,
                    props: {name:"West"}

                },
                {
                    path:"child4",
                    component: Child1,
                    props: {name:"East"}

                }
            ]

        },
        {
            path: "/Second",
            component: Second,
            props: {name:"two"}
        },
        {
            path: "/Third",
            component: Third,
            props: {name:"three"}
        }
    ]
})
