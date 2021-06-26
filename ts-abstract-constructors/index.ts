abstract class ViewModel {
    id: string;
   
    constructor(id: string) {
        this.id = id;
    }
}

class NewConstructorViewModel extends ViewModel {
    data: string;
    constructor(id: string, data: string) {
          super(id);
          this.data = data;
     }
  }
  
  // Error
  const viewModel3 = new NewConstructorViewModel();
  
  // Error
  const viewModel4 = new NewConstructorViewModel('my-id');
  
  const viewModel5 = new NewConstructorViewModel('my-id', 'important info');
  