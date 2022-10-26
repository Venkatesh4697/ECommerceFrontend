import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { catchError, map } from 'rxjs/operators';
import { Coupons } from './coupons';
import { User } from './user';

@Injectable({
    providedIn: 'root'
  })
export class Service {
    private registerUrl = 'http://localhost:8080/registerUser';
  private loginUrl = 'http://localhost:8080/login';
  private productsUrl = 'http://localhost:8080/products-list';
  private mobileDetailsUrl = 'http://localhost:8080/get-Product-Details';
  private addToCartUrl = 'http://localhost:8080/saveToCart';
  private addToCartMultipleUrl = 'http://localhost:8080/saveToMultipleCountToCart';
  private addToWishList = 'http://localhost:8080/saveToWishList';
  private cartDetailsUrl = 'http://localhost:8080/retrieveCart';
  private removeFromCartUrl ='http://localhost:8080/deleteItemFromCart ';
  private retrieveUser='http://localhost:8080/retrieveUser';
  private wishListDetails='http://localhost:8080/retrieveWishList';
  private deleteWishListDetails='http://localhost:8080/deleteItemFromWishList';
  private updateAddress='http://localhost:8080/changeAddress';
  private updateUserUrl='http://localhost:8080/updateUser';
  private getValidCouponUrl='http://localhost:8080/checkCouponValidity';
  private getValidRewardUrl='http://localhost:8080/checkValidRewards';
  private getFullCart='http://localhost:8080/retrieveCartIncludingPrice';
  private getFullCartPrice='http://localhost:8080/cartPrice';
  private saveOrders='http://localhost:8080/orderUserDetails';
  private getAllCoupons='http://localhost:8080/getAllCoupons';
  private getAllRewardsForUser='http://localhost:8080/getAllRewards';
  private getActiveRecordsForUser='http://localhost:8080/fetchAllActiveOrders';
  private returnOrderUrl='http://localhost:8080/returnOrder';
  private myreturnOrders='http://localhost:8080/fetchAllReturnOrder';
  private cancelOrderUrl='http://localhost:8080/cancelOrders';
  private receivedOrders='http://localhost:8080/receivedOrders';
  private allOrders='http://localhost:8080/fetchAllOrders';
  private allCategories='http://localhost:8080/getCategories';
  private allDeals='http://localhost:8080/getDeals';
  private allDealsItems='http://localhost:8080/getAllDealItems';

  constructor(private httpClient: HttpClient) { }

  saveUser(user: User): Observable<User> {
    console.log(user.emailId);
    console.log(user.firstName);
    return this.httpClient.post<User>(this.registerUrl, user);
  }

  loginUser(user: User): Observable<User> {
    console.log(user.emailId);
    console.log(user.password);
    console.log("inside login");
    return this.httpClient.post<User>(this.loginUrl, user);
  }
  getCategories(): Observable<User> 
    {
      let name=localStorage.getItem('userId');
      return this.httpClient.post<User>(this.allCategories, name);
    }

  updateUser(user:User): Observable<User>{
    return this.httpClient.post<User>(this.updateUserUrl, user);
  }
  getDeals(): Observable<User> 
  {
    let name=localStorage.getItem('userId');
    return this.httpClient.post<User>(this.allDeals, name);
  }
  fetchDealItems(dealId:any): Observable<User>{

    return this.httpClient.post<User>(this.allDealsItems, dealId);
  }

  getUserDetails(emailId:any ): Observable<any> {
      console.log(emailId);
    return this.httpClient.post<any>(this.retrieveUser,emailId);
  }

  returnOrder(details:any):Observable<any>{
    return this.httpClient.post<any>(this.returnOrderUrl,details)
  }

  getReceivedOrders():Observable<any>{
    let name=localStorage.getItem('userId');
    return this.httpClient.post<any>(this.receivedOrders,name)
  }

  getAllOrders():Observable<any>{
    let name=localStorage.getItem('userId');
    return this.httpClient.post<any>(this.allOrders,name)
  }

  getProductList(user:any): Observable<any> {
  return this.httpClient.post<any>(this.updateUserUrl,user);
}

getValidCoupons(emailId:any):Observable<any>
{
  // console.log("coupons");
  return this.httpClient.post<any>(this.getValidCouponUrl,emailId);
}



getValidUserRewards(emailId:any):Observable<any>
{
  return this.httpClient.post<any>(this.getValidRewardUrl,emailId);
}

  getMobileDetails(): Observable<any> {
    return this.httpClient.get<any>(this.productsUrl);
  }
  getMobileProductDetails(pid: any): Observable<any> {
    return this.httpClient.post<any>(this.mobileDetailsUrl,pid);
  }
  fetchProducts(categoryId:any): Observable<any>
  {
      console.log(categoryId);
    return this.httpClient.post<any>(this.productsUrl,categoryId);
  }
  addToCart(details: any): Observable<any> {
   /** return this.httpClient.post<any>(this.addToCartUrl, details).pipe(
       map(response => {
         if (response !== '') {
           return JSON.parse(response);
         } else {
           return {}
         }
       })
     );*/
    return this.httpClient.post<any>(this.addToCartUrl, details);
    //return of(1);
  }

  saveToOrders(details:any): Observable<any>
  {
    
    return this.httpClient.post<any>(this.saveOrders, details);
  }
  getCoupons():Observable<any>
  {
    let name=localStorage.getItem('userId');
    // alert("inside get all");
return this.httpClient.post<any>(this.getAllCoupons,name);
  }

  getActiveOrdersForUser():Observable<any>
  {
    let name=localStorage.getItem('userId');
   // alert("inside get all");
return this.httpClient.post<any>(this.getActiveRecordsForUser,name);
  }

  getReturnOrdersForUser():Observable<any>
  {
    let name=localStorage.getItem('userId');
    // alert("inside get all");
 return this.httpClient.post<any>(this.myreturnOrders,name);
  }

  getAllRewards():Observable<any>
  {
    let name=localStorage.getItem('userId');
    // alert("inside get all");
return this.httpClient.post<any>(this.getAllRewardsForUser,name);
  }

  cancelOrder(details:any)
  {
    return this.httpClient.post<any>(this.cancelOrderUrl,details)
  }

  addToCartMultiple(details: any): Observable<any> {
    /** return this.httpClient.post<any>(this.addToCartUrl, details).pipe(
        map(response => {
          if (response !== '') {
            return JSON.parse(response);
          } else {
            return {}
          }
        })
      );*/
     return this.httpClient.post<any>(this.addToCartMultipleUrl, details);
     //return of(1);
   }
 
getCartForCheckout(emailId:any):Observable<any>
{
  return this.httpClient.post<any>(this.getFullCart,emailId);
}

getCartPrice(emailId:any):Observable<any>
{
  return this.httpClient.post<any>(this.getFullCartPrice,emailId);
}

  addItemsToWishList(details:any): Observable<any> {
    /** return this.httpClient.post<any>(this.addToCartUrl, details).pipe(
        map(response => {
          if (response !== '') {
            return JSON.parse(response);
          } else {
            return {}
          }
        })
      );*/
           //   alert(userId);
     return this.httpClient.post<any>(this.addToWishList, details);
     //return of(1);
   }

  getCartDetails(details: any): Observable<any> {
    return this.httpClient.post<any>(this.cartDetailsUrl, details);
  }
  getWishlistDetails(details:any):Observable<any>
  {
    return this.httpClient.post<any>(this.wishListDetails, details);
  }
  removeFromWishList(details:any):Observable<any>
  {
    return this.httpClient.post<any>(this.deleteWishListDetails, details);
  }
  removeFromCart(details: any): Observable<any> {
    return this.httpClient.post<any>(this.removeFromCartUrl, details);
  }

  updateUserAddress(details:any) : Observable<any>{
return this.httpClient.post<any>(this.updateAddress, details);
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }

}
