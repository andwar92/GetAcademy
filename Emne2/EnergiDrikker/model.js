const model = {
    app: {
        currentpage: ['dashBoard', 'addDrink', 'drinkAndMoneyOverview', 'savingsAndGoalsOverview']
    },
    input: {
        addDrink: {
            type: '',
            amount: '',
            price: '',
            date: '',
            id: null,
        },
        drinkAndMoneyOverview: {
            layout: ['week', 'month', 'year']

        },
        savingsAndGoals: {
            dailyGoal: null,
        },
        loginUser: {
            email: '',
            passord: '',
        },
        users: {
            Id: null,
            firstName: '',
            lastName: '',
            age: null,
            email: '',
            password: '',
            mål: '',
            dagligKoffein: '',
        },
    },
    log: {

    },
    data: {
        dashBoard: {
        },
        addDrink: {
            drinkTypes: [
                { id: 1, name: 'Redbull', amountId: [1, 2, 3], caffeinePrMl: 0.32 },
                { id: 2, name: 'Monster', amountId: [1, 3], caffeinePrMl: 0.35 },
                { id: 3, name: 'Battery', amountId: [1, 3], caffeinePrMl: 0.28 },
                { id: 4, name: 'Burn', amountId: [1, 3], caffeinePrMl: 0.31 }
            ],
            amount: [
                { id: 1, amount: 250 },
                { id: 2, amount: 330 },
                { id: 3, amount: 500 }
            ],


        },
        drinkAndMoneyOverview: [
            { drinkId: 1, amountId: 3, price: 23, caffeine: 160, date: "20.03.2025", time: "10:40" }
        ] ,
        users: [
            {
                Id: 1,
                firstName: 'Kjell',
                lastName: 'Turid',
                age: 31,
                email: 'Kjell.Turid@gmail.no',
                password: 'heipådeg12',
                mål: '0,5L',
                dagligKoffein: '160mg',
            }
        ],

    }

}
