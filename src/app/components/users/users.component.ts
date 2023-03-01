import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserAddAction, UserDeleteAction, UserListRequestAction, UserUpdateAction } from 'src/app/actions/user-action';
import { EUSER_ACTIONS, User } from 'src/app/models/user';
import { getUserLoading, getUsers, RootReducerState } from 'src/app/reducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  users: User[] = [];
  user: User = {
    id: NaN,
    name: '',
    email: ''
  };
  username: string = '';
  buttonLabel: string = '';
  isLoading: boolean = false;
  constructor(private store: Store<RootReducerState>) {
  }

  ngOnInit() {
    this.fetchUserDetails();
  }

  buttonAction(label: string, user?: User) {
    switch(label) {
      case EUSER_ACTIONS.ADD_USER: {
        this.buttonLabel = label;
        break;
      }
      case EUSER_ACTIONS.UPDATE_USER: {
        this.buttonLabel = label;
        if (user) {
          this.user = {...user}
        }
        break;
      }
    }
  }

  trackByFn(index: number, item: User): number {
    return item.id;
  }

  fetchUserDetails() {
    this.store.dispatch(new UserListRequestAction());
    setTimeout(() => {
      this.store.select(getUsers).subscribe((data) => {
        this.users = [...data];
      });
      this.store.dispatch(new UserListRequestAction());
    }, 3000);
  }

  async userAction(action: string, user?: User) {
    this.isLoading = true;
    switch(action) {
      case EUSER_ACTIONS.ADD_USER: {
        if (this.user.name && this.user.email)
        setTimeout(async() => {
          this.store.dispatch(new UserAddAction({data: this.user}));
          this.store.select(getUsers).subscribe((data) => {
            this.users = [...data];
            this.user = {
              id: NaN,
              name: '',
              email: '',
            }
          });
          this.buttonLabel = '';
          this.isLoading = false;
        }, 3000);
        break;
      }
      case EUSER_ACTIONS.UPDATE_USER: {
        if (this.user.name && this.user.email) {
          setTimeout(() => {
            this.store.dispatch(new UserUpdateAction({data: this.user}));
            this.store.select(getUsers).subscribe((data) => {
              this.users = [...data];
            });
            this.user = {
              id: NaN,
              name: '',
              email: '',
            }
            this.buttonLabel = '';
            this.isLoading = false;
          }, 3000);
        }
        break;
      }
      case EUSER_ACTIONS.DELETE_USER: {
        if (user?.id) {
          this.store.dispatch(new UserDeleteAction({id: user?.id}));
          this.store.select(getUsers).subscribe((data) => {
            this.users = [...data];
          });
          this.store.dispatch(new UserListRequestAction());
          this.isLoading = false;
        }
      }
    }
  }

  deleteUser(id: number) {
    
  }
}
