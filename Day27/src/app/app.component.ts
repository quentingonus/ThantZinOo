import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day27';
  mmMovieList = [
    { name: 'From Bangkok to Mandalay', order_key: 1, type: "drama", description: "From Bangkok to Mandalay is the film cast by Myanmar and Thailand for the goodwill..." },
    { name: 'Mya Mya', order_key: 1, type: "horror", description: "Mya Mya is a 2020 Burmese horror film starring Thinzar Wint Kyaw, Min Taw Win, Dee Dee, and Win Tha Pyay Tun..." },
    { name: 'The Dark Cinema', order_key: 1, type: "comedy", description: "Four filmmaker friends rent a once grand but long decommissioned cinema which is steeped in a dark and horrific history that they are not fully aware of..." },
    { name: 'Lord of the ring', order_key: 1, type: "comedy", description: "Lorem Lorem Lorem" },
    { name: "The king's daughter", order_key: 1, type: "comedy", description: "Lorem Lorem Lorem" },
    { name: 'The White Cinema', order_key: 1, type: "horror", description: "Lorem Lorem Lorem" },
    { name: 'Maung Maung', order_key: 1, type: "horror", description: "Lorem Lorem Lorem" },
    { name: 'Aye Aye', order_key: 1, type: "drama", description: "Lorem Lorem Lorem" },
    { name: 'Win Win', order_key: 1, type: "drama", description: "Lorem Lorem Lorem" },
  ]

  drama: any = []
  comedy: any = []
  horror: any = []

  constructor() {
    //Checking if localstorage has movie object
    if (!localStorage.getItem("mmMovieList")) {
      //LocalStorage has no movie object
      this.drama = this.mmMovieList.filter(item => item.type == "drama")
      this.comedy = this.mmMovieList.filter(item => item.type == "comedy")
      this.horror = this.mmMovieList.filter(item => item.type == "horror")
      this.saveItemsOnLocalStorage()

    } else {
      this.drama = JSON.parse(localStorage.getItem("drama") ? localStorage.getItem("drama")! : "[]")
      this.comedy = JSON.parse(localStorage.getItem("comedy") ? localStorage.getItem("comedy")! : "[]")
      this.horror = JSON.parse(localStorage.getItem("horror") ? localStorage.getItem("horror")! : "[]")
    }
    this.itemSorter()
  }

  saveItemsOnLocalStorage() {
    localStorage.setItem("mmMovieList", JSON.stringify(this.mmMovieList))
    localStorage.setItem("drama", JSON.stringify(this.drama))
    localStorage.setItem("comedy", JSON.stringify(this.comedy))
    localStorage.setItem("horror", JSON.stringify(this.horror))
  }

  changeType(event: CdkDragDrop<string[]>) {
    event.container.data == this.drama ? this.drama[event.currentIndex].type = "drama" : event.container.data == this.comedy ? this.comedy[event.currentIndex].type = "comedy" : this.horror[event.currentIndex].type = "horror"
  }

  itemSorter() {
    for (let i = 0; i < this.drama.length; i++) {
      this.drama[i].order_key = i + 1
    }
    for (let i = 0; i < this.comedy.length; i++) {
      this.comedy[i].order_key = i + 1
    }
    for (let i = 0; i < this.horror.length; i++) {
      this.horror[i].order_key = i + 1
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    this.changeType(event)
    this.itemSorter()
    this.saveItemsOnLocalStorage()
  }

}
