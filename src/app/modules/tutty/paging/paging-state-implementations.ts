import {PagingState} from './paging-state-interface';
import {PagingComponent} from './paging.component';

export class PagingStateFirstElement implements PagingState {

    pressNextButton(context: PagingComponent): void {
        if (context.numberOfHints === 2) {
            context.disablePrevButton = false;
            context.nextButtonText = 'Close';
            context.setState(new PagingStateLastElement());
            return;
        }

        context.disablePrevButton = false;
        context.setState(new PagingStateMiddleElement());
    }

    pressPrevButton(context: PagingComponent): void {
         // nothing happens
    }
}


export class PagingStateMiddleElement implements PagingState {

    pressNextButton(context: PagingComponent): void {
        if (context.currentHintIndex === context.numberOfHints - 2) {
            context.nextButtonText = 'Close';
            context.setState(new PagingStateLastElement());
        }
    }

    pressPrevButton(context: PagingComponent): void {
        if (context.currentHintIndex === 1) {
            context.disablePrevButton = true;
            context.setState(new PagingStateFirstElement());
        }
    }
}


export class PagingStateLastElement implements PagingState {

    pressNextButton(context: PagingComponent): void {
        context.setState(new PagingStateFirstElement());
    }

    pressPrevButton(context: PagingComponent): void {

        if (context.numberOfHints === 2) {
            context.disablePrevButton = true;
            context.nextButtonText = 'Next';
            context.setState(new PagingStateFirstElement());
            return;
        }

        context.nextButtonText = 'Next';
        context.setState(new PagingStateMiddleElement());
    }
}
