class Calculator{
    constructor(previousTextElement,currentTextElement){
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }

    clear(){
        this.currentOperand= ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){

    }
    appendNumber(num){
        if(num === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + num.toString();
    }
    chooseOperation(operation){
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ' '
    }

    compute(){

    }
    updateDisplay(){
         this.currentTextElement.innerText = this.currentOperand
         this.previoustTextElement.innerText = this.previousOperand
    } 
} 
 
 
 
 const numberButtons = document.querySelectorAll('[data-number]')
 const operationButtons = document.querySelectorAll('[data-operation]')
 const equalButton = document.querySelector('[data-equals]')
 const deleteButton = document.querySelector('[data-delete]')
 const clearButton = document.querySelector('[data-clear]')
 const previousTextElement = document.querySelector('[data-previous-operand]')
 const currentTextElement = document.querySelector('[data-current-operand]')


 const calculator = new Calculator(previousTextElement,currentTextElement)

 numberButtons.forEach(button =>{
     button.addEventListener('click', () =>{
         calculator.appendNumber(button.innerText)
         calculator.updateDisplay()
     })
 })


 operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})