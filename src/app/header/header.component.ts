import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state("true" , style({ 
        width: '200px'
      })), 
      state("false", style({ 
        width: '0px'
      })),
      transition('* => *', animate('400ms ease-in')), 
    ])
  ]
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  isVisible = false;
  searchString: string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    // this.myControl.valueChanges.subscribe(data => {
    //   this.searchString = data
    //   this.router.navigate(['search/'+this.searchString])
    // })
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  show() {
    this.isVisible = true;
  }

  hidden() {
    this.isVisible = false;
  }
  viewWishList()
  {
    this.router.navigate(['/wishList-info']);
  }
  viewCart()
  {
    this.router.navigate(['/cartInfo'])
  }
logOut()
{
localStorage.setItem('userId','');
this.router.navigate(['/login']);
}
  
}
