import React, { Component } from 'react';
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'
import img6 from './Images/img6.jpg'


export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": img1,
                "description": "Lorem Ipsum is simply dummy ",
                "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1

            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": img2,
                "description": "Lorem Ipsum is simply dummy ",
                "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
                "price": 33,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1

            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": img3,
                "description": "Lorem Ipsum is simply dummy ",
                "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
                "price": 43,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1

            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": img4,
                "description": "Lorem Ipsum is simply dummy ",
                "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
                "price": 53,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1

            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": img5,
                "description": "Lorem Ipsum is simply dummy ",
                "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
                "price": 63,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1

            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": img6,
                "description": "Lorem Ipsum is simply dummy ",
                "content": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
                "price": 73,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1

            }

        ],
        cart: [],
        total:0
    };

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })

        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("The product has been added to cart")
        }
    }

    reduction = (id) => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart })
        this.getTotal();
    }
    increase = (id) => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart })
        this.getTotal();
    }

    removeProduct = (id) => {
        if (window.confirm("Do you want to delete this product ?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart });
            this.getTotal();
        }
    }

    getTotal = ()=>{
        const{cart}=this.state;
        const res = cart.reduce((prev,item)=>{
            return prev + (item.price * item.count);
        },0)
        this.setState({total:res});
    }


    render() {
        const { products, cart,total } = this.state;
        const { addCart, reduction, increase, removeProduct,getTotal } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart, reduction, increase, removeProduct,total ,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
