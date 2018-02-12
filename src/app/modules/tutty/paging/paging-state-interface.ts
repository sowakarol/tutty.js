import { PagingComponent } from './paging.component';

export interface PagingState {
    pressNextButton(context: PagingComponent): void;
    pressPrevButton(context: PagingComponent): void;
}
