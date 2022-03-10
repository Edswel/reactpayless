import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Edward",
            email: "admin@example.com",
            password: bcrypt.hashSync("12345"),
            isAdmin: true
        },
        {
            name: "John",
            email: "user@example.com",
            password: bcrypt.hashSync("1234567"),
            isAdmin: false
        }
    ],
    products: [
        {
            // _id: "1",
            name: "Air Jordan",
            slug: "jordan-sneakers",
            category: "sneakers",
            image: "/images/pic1.jpg", // 679 x 829
            price: 250,
            countInStock: 12,
            brand: "Nike",
            rating: 5,
            numReviews: 7,
            description: "High Quality Sneakers"
        },
        {
            // _id: "2",
            name: "Red Bottoms",
            slug: "heels-shoes",
            category: "shoes",
            image: "/images/pic2.jpg",
            price: 150,
            countInStock: 20,
            brand: "Louboutin",
            rating: 4.5,
            numReviews: 5,
            description: "Good Quality Shoes"
        },
        {
            // _id: "3",
            name: "Men's Business Suit",
            slug: "suits",
            category: "suits",
            image: "/images/pic3.jpg",
            price: 350,
            countInStock: 7,
            brand: "Gucci",
            rating: 5,
            numReviews: 3,
            description: "High Quality Suit"
        },
        {
            // _id: "4",
            name: "Women's Dress",
            slug: "fitted-dress",
            category: "dress",
            image: "/images/pic4.jpg",
            price: 100,
            countInStock: 18,
            brand: "Chanel",
            rating: 4,
            numReviews: 9,
            description: "Nice Fitted Dress"
        },
        {
            // _id: "5",
            name: "Cap",
            slug: "fancy-cap",
            category: "cap",
            image: "/images/pic5.jpg",
            price: 50,
            countInStock: 25,
            brand: "D & G",
            rating: 4.5,
            numReviews: 3,
            description: "Premium Cap"
        },
        {
            // _id: "6",
            name: "Men's Casual",
            slug: "casual-casual",
            category: "t-shirt",
            image: "/images/pic6.jpg",
            price: 5,
            countInStock: 0,
            brand: "Lacoste",
            rating: 4,
            numReviews: 13,
            description: "Medium Grade"
        }
    ]
}

export default data;