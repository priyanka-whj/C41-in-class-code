class Form
{
    constructor()
    {
        this.title = createElement('h2'); 
        this.input = createInput("Name"); 
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }

    hideForm()
    {
        this.greeting.hide(); //hide() method hides the html element
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display()
    {
        this.title.html("Car Racing Game"); //Change the html content within the elements
        this.title.position(520, 100); //Position the title on the canvas
        this.input.position(450, 200);
        this.button.position(700, 200);

        this.button.mousePressed(() => { //The button element is calling function mousePressed() & this refers to the button element here.
            this.input.hide();                 //We want 'this' to refer to the form object. Using arrow function, this refers to the owner(form object) of the function
            this.button.hide();

            playerCount = playerCount + 1;
            player.index = playerCount;
            player.updateCount(playerCount);

            player.name = this.input.value();
            this.greeting.html("Hello " +player.name);
            this.greeting.position(600, 400);
        });
    }
};