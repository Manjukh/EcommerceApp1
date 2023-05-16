import { TestBed ,async,inject} from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,],
      providers:[CartService],
    });
    service = TestBed.get(CartService);
    httpMock = TestBed.get(HttpTestingController);
  });
   it(`should fetch cart as an Observable`,async(inject([HttpTestingController,CartService],
    (httpClient:HttpTestingController,cartService:CartService)=>{

      const cartItem=[{
        "cartId": 1,
        "products": {
            "productId": 1,
            "productName": "Ethnic Casual Straw Messenger Bag",
            "productDescription": "Bags",
            "productPrice": 13}
      },

      {
        "cartId": 2,
        "products": {
            "productId": 1,
            "productName": "Ethnic Casual Straw Messenger Bag",
            "productDescription": "Bags",
            "productPrice": 13
        }
    },
      
      {
        "cartId": 3,
        "products": {
            "productId": 1,
            "productName": "Ethnic Casual Straw Messenger Bag",
            "productDescription": "Bags",
            "productPrice": 13
        }
      }];

      cartService.getAllCarts().subscribe((carts:any)=>{
        expect(carts.length).toBe(3);
      });
      let req = httpMock.expectOne('http://127.0.0.1:9090/allCarts');
      expect(req.request.method).toBe("GET");
      req.flush(cartItem);
      httpMock.verify();
    })));



    




});
