"use strict";
class ViewModel {
    constructor(id) {
        this.id = id;
    }
}
class NewConstructorViewModel extends ViewModel {
    constructor(id, data) {
        super(id);
        this.data = data;
    }
}
// Error
const viewModel3 = new NewConstructorViewModel();
// Error
const viewModel4 = new NewConstructorViewModel('my-id');
const viewModel5 = new NewConstructorViewModel('my-id', 'important info');
