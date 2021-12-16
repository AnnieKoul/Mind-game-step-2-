class Screen{
    constructor(){
        
        this.animalButton=createButton("")
        this.foodButton=createButton("")
} 
handleElements(){
    this.animalButton.position(width/2,height/2)
    this.animalButton.class("aButton")
}
  handlemousePressed(){
      this.animalButton.mousePressed(()=>{
      this.animalButton.hide()  
      animal= new Animal()
    

      })
  }
display(){
    background("pink")
    this.handleElements()
    this.handlemousePressed()
}
   
    
    
   
}
    


