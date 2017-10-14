function showHelper(elementID, theMessage){
    
    // get the parent element (li) for the message to be added to 
    var parentContainer = document.getElementById(elementID);
    
    //  change the border style for the element 
    parentContainer.style.border = "4px solid #666";
    

    //remove the blank field notification 
    //when field is clicked on
    if(parentContainer.lastChild.className == "fieldBlankNotification"){
        parentContainer.removeChild(parentContainer.lastChild);
    }
    
    
    
    //<div class='speechcontainer'><div class="speech"><p>Please enter your first name.</p></div></div>
    
    //create div element to hold the div with the message
    var messageContainer = document.createElement('div');
    messageContainer.className = 'speechcontainer';
    messageContainer.id = 'messageContainer';
    
    
    //create div element to hold the message itself
    var speechBubble = document.createElement('div');
    speechBubble.className = 'speech';
    
    
    //create paragraph element to put the message text in
    var pMessage = document.createElement('p');
    
    //create text element to hold the text
    //give it the message from the text
    var textNode = document.createTextNode(theMessage);
    
    //add text to the paragraph
    pMessage.appendChild(textNode);
    
    //add paragraph to the speech div
    speechBubble.appendChild(pMessage);
   
    //add speech div to the speech container div
    messageContainer.appendChild(speechBubble);
    
    //finally add the whole thing to the parent div
    parentContainer.appendChild(messageContainer);
    
}


function removeHelper(elementID){
    
    //get the parent element so we can remove the child elementvar
    //and change the style back
    parentContainer = document.getElementById(elementID);
    parentContainer.style.border = "4px solid transparent";
    
    //get element to be removed
    var elementToRemove = document.getElementById('messageContainer');
    parentContainer.removeChild(elementToRemove);
    
}


function checkPasswordLength(theID, theDesiredLength){
    var passwordText = document.getElementById(theID).value;
     var messageBox = document.getElementById('messageBox');
    if(passwordText.length < theDesiredLength){
        var difference = theDesiredLength - passwordText.length;
         messageBox.className = 'messageBoxClass';
        messageBox.className += ' messageBoxError';
        messageBox.innerHTML = "<p>The password has " + difference + " characters to go.</p>";
        return false;
    } else {
        messageBox.className = 'messageBoxClass';
        messageBox.className += ' messageBoxSuccess';
        messageBox.innerHTML = "Password is of sufficient length.";
        return true;
    }
    
}




function checkPasswordMatches(passwordIDOne, passwordIDTwo){
    var passwordOne = document.getElementById(passwordIDOne).value;
    var passwordTwo = document.getElementById(passwordIDTwo).value;
    
    var messageBox = document.getElementById('messageBox');
    if(passwordTwo== ""){
        messageBox.className = 'messageBoxClass';
        messageBox.className += ' messageBoxError';  
        messageBox.innerHTML = "<p>Please confirm your password.</p>";
    }
    else if(passwordOne !== passwordTwo){
        messageBox.className = 'messageBoxClass';
        messageBox.className += ' messageBoxError';  
        messageBox.innerHTML = "<p>The two passwords do not match.</p>";
        return false;
    } else {
        messageBox.className = 'messageBoxClass';
        messageBox.className += ' messageBoxSuccess';
        messageBox.innerHTML = "The passwords match.";
        return true;
    }  
    
}




function validateForm(){
    
    var theForm = document.getElementById("registerForm");

 
    var firstName = document.getElementById("firstName");

    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var thePassword = document.getElementById("password");
    var theConfirmedPassword = document.getElementById("passwordConfirm");

    var elementsArray = [firstName, lastName, email, thePassword, theConfirmedPassword];
    
    
    var isError = false;
    
    
    for(var i = 0; i < elementsArray.length; i++){
        
        //check to see if the field is empty
        if(elementsArray[i].value == ""){
            //set error flag
            isError = true;
            
            //check empty notification if has already been set
             if(elementsArray[i].parentElement.lastChild.className == "fieldBlankNotification"){
                    //do nothing
             } else {
                    var divEmpty = document.createElement('div');
                    divEmpty.innerHTML = "<p>This field cannot be blank</p>";
                    divEmpty.className = 'fieldBlankNotification';
                    elementsArray[i].parentElement.appendChild(divEmpty);
             }
        }
    }
    
        
    if(isError==true){
        //do not submit the form because 
        //it is true there is an error
        return false;   
    } else {
        //submit the form
        //because it is false there is an error
        return true;   
    }
    
}

