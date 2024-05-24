import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoffeeData from "../data/CoffeData";
import BeansData from "../data/BeansData";

export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeansList: BeansData,
            CartPrice: 0,
            FavouriteList: [],
            Cart: [],
            OrderHistoryList: [],
            addToCart: (cartItem: any) => set(produce(state => {
                let found = false;
                for (let i = 0; i < state.Cart.length; i++) {

                    if (state.Cart[i].id == cartItem.id) {
                        found = true;
                        let size = false;
                        for (let j = 0; j < state.Cart[i].prices.length; j++) {
                            if (state.Cart[i].prices[j].size == cartItem.prices[0].size) {
                                size = true;
                                state.Cart[i].prices[j].quantity++;
                                break;
                            }
                        }
                        if (size == false) {
                            state.Cart[i].prices.push(cartItem.prices[0]);
                        }
                        state.Cart[i].prices.sort((a: any, b: any) => {
                            if (a.size > b.size) {
                                return -1;
                            }
                            if (a.size < b.size) {
                                return 1;
                            }
                            return 0;
                        });
                        break;
                    }
                }
                if (found == false) {
                    state.Cart.push(cartItem);
                    console.log("CARt..",state.Cart);
                    
                }
            }),
            ),

            calculateCartPrice: () => set(produce(state => {
                let totalPrice = 0;
                for (let i = 0; i < state.Cart.length; i++) {
                    let tempPrice = 0;
                    for (let j = 0; j < state.Cart[i].prices.length; j++) {
                        tempPrice = tempPrice + parseFloat(state.Cart[i].prices[j].price) * state.Cart[i].prices[j].quantity;
                    }
                    state.Cart[i].ItemPrice = tempPrice.toFixed(2).toString();
                    totalPrice = totalPrice + tempPrice;
                }
                state.Cart = totalPrice.toFixed(2).toString();
            })
            ),

            addTofavouriteList: (type: string, id: string) =>
                set(
                    produce(state => {
                        if (type == "Coffee") {
                            for (let i = 0; i < state.CoffeeList.length; i++) {
                                if (state.CoffeeList[i].id == id) {
                                    if (state.CoffeeList[i].favourite == false) {
                                        state.CoffeeList[i].favourite = true;
                                        state.FavouriteList.unshift(state.CoffeeList[i])
                                    }
                                    break;
                                }
                            }
                        } else if (type == "Bean") {
                            for (let i = 0; i < state.BeansList.length; i++) {
                                if (state.BeansList[i].id == id) {
                                    if (state.BeansList[i].favourite == false) {
                                        state.BeansList[i].favourite = true;
                                        state.FavouriteList.unshift(state.BeansList[i])
                                    }
                                    break;
                                }
                            }
                        }
                    })
                ),

            deleteFromfavouriteList: (type: string, id: string) =>
                set(produce(state => {
                    if (type == "Coffee") {
                        for (let i = 0; i < state.CoffeeList.length; i++) {
                            if (state.CoffeeList[i].id == id) {
                                if (state.CoffeeList[i].favourite == true) {
                                    state.CoffeeList[i].favourite = false;

                                }
                                break;
                            }
                        }
                    } else if (type == "Bean") {
                        for (let i = 0; i < state.BeansList.length; i++) {
                            if (state.BeansList[i].id == id) {
                                if (state.BeansList[i].favourite == true) {
                                    state.BeansList[i].favourite = false;
                                }
                                break;
                            }
                        }
                    }
                    let spliceIndex = -1;
                    for (let i = 0; i < state.FavouriteList.length; i++) {
                        if (state.FavouriteList[i].id == id) {
                            spliceIndex = i;
                            break;
                        }
                    }
                    state.FavouriteList.splice(spliceIndex, 1)
                }))
        }),
        {
            name: 'coffee-app',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)