export const usersData = [
    {
        id: '1',
        name: 'Carolyn Perkins',
        email: 'eileen_h@hotmail.com',
        img: '/img/avatars/thumb-1.jpg',
    },
    {
        id: '2',
        name: 'Terrance Moreno',
        email: 'terrance_moreno@infotech.io',
        img: '/img/avatars/thumb-2.jpg',
    },
    {
        id: '3',
        name: 'Ron Vargas',
        email: 'ronnie_vergas@infotech.io',
        img: '/img/avatars/thumb-3.jpg',
    },
    {
        id: '4',
        name: 'Luke Cook',
        email: 'cookie_lukie@hotmail.com',
        img: '/img/avatars/thumb-4.jpg',
    },
    {
        id: '5',
        name: 'Joyce Freeman',
        email: 'joyce991@infotech.io',
        img: '/img/avatars/thumb-5.jpg',
    },
    {
        id: '6',
        name: 'Samantha Phillips',
        email: 'samanthaphil@infotech.io',
        img: '/img/avatars/thumb-6.jpg',
    },
    {
        id: '7',
        name: 'Tara Fletcher',
        email: 'taratarara@imaze.edu.du',
        img: '/img/avatars/thumb-7.jpg',
    },
    {
        id: '8',
        name: 'Frederick Adams',
        email: 'iamfred@imaze.infotech.io',
        img: '/img/avatars/thumb-8.jpg',
    },
    {
        id: '9',
        name: 'Carolyn Hanson',
        email: 'carolyn_h@gmail.com',
        img: '/img/avatars/thumb-9.jpg',
    },
    {
        id: '10',
        name: 'Brittany Hale',
        email: 'brittany1134@gmail.com',
        img: '/img/avatars/thumb-10.jpg',
    },
    {
        id: '11',
        name: 'Lloyd Obrien',
        email: 'handsome-obrien@hotmail.com',
        img: '/img/avatars/thumb-11.jpg',
    },
    {
        id: '12',
        name: 'Gabriella May',
        email: 'maymaymay12@infotech.io',
        img: '/img/avatars/thumb-12.jpg',
    },
    {
        id: '13',
        name: 'Lee Wheeler',
        email: 'lee_wheeler@infotech.io',
        img: '/img/avatars/thumb-13.jpg',
    },
    {
        id: '14',
        name: 'Gail Barnes',
        email: 'gailby0116@infotech.io',
        img: '/img/avatars/thumb-14.jpg',
    },
    {
        id: '15',
        name: 'Ella Robinson',
        email: 'ella_robinson@infotech.io',
        img: '/img/avatars/thumb-15.jpg',
    },
]

export const userDetailData = [
    {
        id: '1',
        name: 'Carolyn Perkins',
        email: 'carolyn_h@hotmail.com',
        img: '/img/avatars/thumb-1.jpg',
        role: 'Admin',
        lastOnline: 1623430400,
        status: 'active',
        personalInfo: {
            location: 'New York, US',
            title: 'Product Manager',
            birthday: '10/10/1992',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
                source:"Online"
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Carolyn Perkins',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Carolyn Perkins',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '2',
        name: 'Terrance Moreno',
        email: 'terrance_moreno@infotech.io',
        img: '/img/avatars/thumb-2.jpg',
        role: 'User',
        lastOnline: 1632393600,
        status: 'active',
        personalInfo: {
            location: 'New York, US',
            title: 'Software Engineer',
            birthday: '03/02/1984',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
                source:"Online"
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Terrance Moreno',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Terrance Moreno',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '3',
        name: 'Ron Vargas',
        email: 'ronnie_vergas@infotech.io',
        img: '/img/avatars/thumb-3.jpg',
        role: 'User',
        lastOnline: 1632393600,
        status: 'blocked',
        personalInfo: {
            location: 'New York, US',
            title: 'UI/UX Designer',
            birthday: '07/11/1987',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
                source:"Online"
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Ron Vargas',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Ron Vargas',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '4',
        name: 'Luke Cook',
        email: 'cookie_lukie@hotmail.com',
        img: '/img/avatars/thumb-4.jpg',
        role: 'Admin',
        lastOnline: 1639132800,
        status: 'active',
        personalInfo: {
            location: 'New York, US',
            title: 'HR Executive',
            birthday: '07/11/1987',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
                source:"Online"
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Luke Cook',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Luke Cook',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '5',
        name: 'Joyce Freeman',
        email: 'joyce991@infotech.io',
        img: '/img/avatars/thumb-5.jpg',
        role: 'User',
        lastOnline: 1632416000,
        status: 'active',
        personalInfo: {
            location: 'New York, US',
            title: 'Frontend Developer',
            birthday: '17/11/1993',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Joyce Freeman',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Joyce Freeman',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '6',
        name: 'Samantha Phillips',
        email: 'samanthaphil@infotech.io',
        img: '/img/avatars/thumb-6.jpg',
        role: 'User',
        lastOnline: 1633107200,
        status: 'active',
        personalInfo: {
            location: 'London, UK',
            title: 'Compliance Manager',
            birthday: '17/11/1993',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Samantha Phillips',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Samantha Phillips',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '7',
        name: 'Tara Fletcher',
        email: 'taratarara@imaze.edu.du',
        img: '/img/avatars/thumb-7.jpg',
        role: 'User',
        lastOnline: 1632761600,
        status: 'active',
        personalInfo: {
            location: 'London, UK',
            title: 'Compliance Manager',
            birthday: '17/11/1993',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
                source:"Online"
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
                source:"At Client Place"
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
                source:"In Office"
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
                source:"On site"
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Tara Fletcher',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Tara Fletcher',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '8',
        name: 'Frederick Adams',
        email: 'iamfred@imaze.infotech.io',
        img: '/img/avatars/thumb-8.jpg',
        role: 'User',
        lastOnline: 1639219200,
        status: 'blocked',
        personalInfo: {
            location: 'London, UK',
            title: 'Compliance Manager',
            birthday: '17/11/1993',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
                source:"Online"
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
                source:"At Client Place"
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
                source:"In Office"
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
                source:"On site"
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Frederick Adams',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Frederick Adams',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '9',
        name: 'Carolyn Hanson',
        email: 'carolyn_h@gmail.com',
        img: '/img/avatars/thumb-9.jpg',
        role: 'User',
        lastOnline: 1634489600,
        status: 'blocked',
        personalInfo: {
            location: 'Texas, US',
            title: 'Compliance Manager',
            birthday: '03/06/1991',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
                source:"Online"
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Carolyn Hanson',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Carolyn Hanson',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '10',
        name: 'Brittany Hale',
        email: 'brittany1134@gmail.com',
        img: '/img/avatars/thumb-10.jpg',
        role: 'User',
        lastOnline: 1633452800,
        status: 'active',
        personalInfo: {
            location: 'Texas, US',
            title: 'Compliance Manager',
            birthday: '03/06/1991',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Brittany Hale',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Brittany Hale',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '11',
        name: 'Lloyd Obrien',
        email: 'handsome-obrien@hotmail.com',
        img: '/img/avatars/thumb-11.jpg',
        role: 'User',
        lastOnline: 1634576000,
        status: 'active',
        personalInfo: {
            location: 'London, UK',
            title: 'Software Engineer',
            birthday: '03/06/1991',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Lloyd Obrien',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Lloyd Obrien',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '12',
        name: 'Gabriella May',
        email: 'maymaymay12@infotech.io',
        img: '/img/avatars/thumb-12.jpg',
        role: 'User',
        lastOnline: 1634208000,
        status: 'blocked',
        personalInfo: {
            location: 'London, UK',
            title: 'Software Engineer',
            birthday: '03/06/1991',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Gabriella May',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Gabriella May',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '13',
        name: 'Lee Wheeler',
        email: 'lee_wheeler@infotech.io',
        img: '/img/avatars/thumb-13.jpg',
        role: 'User',
        lastOnline: 1636649600,
        status: 'active',
        personalInfo: {
            location: 'London, UK',
            title: 'Software Engineer',
            birthday: '03/06/1991',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Lee Wheeler',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Lee Wheeler',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '14',
        name: 'Gail Barnes',
        email: 'gailby0116@infotech.io',
        img: '/img/avatars/thumb-14.jpg',
        role: 'User',
        lastOnline: 1633020800,
        status: 'active',
        personalInfo: {
            location: 'London, UK',
            title: 'Software Engineer',
            birthday: '03/06/1991',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Gail Barnes',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Gail Barnes',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
    {
        id: '15',
        name: 'Ella Robinson',
        email: 'ella_robinson@infotech.io',
        img: '/img/avatars/thumb-15.jpg',
        role: 'User',
        lastOnline: 1636217600,
        status: 'active',
        personalInfo: {
            location: 'London, UK',
            title: 'Software Engineer',
            birthday: '03/06/1991',
            phoneNumber: '+12-123-1234',
            facebook: 'facebook.com/sample',
            twitter: 'twitter.com/sample',
            pinterest: 'pinterest.com/sample',
            linkedIn: 'linkedin/sample',
        },
        orderHistory: [
            {
                id: '#36223',
                item: 'Mock premium pack',
                status: 'pending',
                amount: 39.9,
                date: 1639132800,
            },
            {
                id: '#34283',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1636790880,
            },
            {
                id: '#32234',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1634090880,
            },
            {
                id: '#31354',
                item: 'Business board pro subscription',
                status: 'paid',
                amount: 59.9,
                date: 1631532800,
            },
        ],
        paymentMethod: [
            {
                cardHolderName: 'Ella Robinson',
                cardType: 'VISA',
                expMonth: '12',
                expYear: '25',
                last4Number: '0392',
                primary: true,
            },
            {
                cardHolderName: 'Ella Robinson',
                cardType: 'MASTER',
                expMonth: '06',
                expYear: '25',
                last4Number: '8461',
                primary: false,
            },
        ],
        subscription: [
            {
                plan: 'Business board pro',
                status: 'active',
                billing: 'monthly',
                nextPaymentDate: 1639132800,
                amount: 59.9,
            },
        ],
    },
]
