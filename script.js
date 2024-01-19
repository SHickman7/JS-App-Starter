// We start with 0 todos
// lets set up a counter, and start it at 0
let toDoCount = 0;

// it's nice to have a funciton that runs right when the page loads
// by tradition, we call that function "onReady"
function onReady() {
  // in this case, we want the page count to show up as zero when the page loads

  // We'll go get the container where we show the count on the page
  // if you go look at the HTML, it starts out blank!  We want to see that 0!
  let countElement = document.querySelector('span');
  // and we'll replace the text inside, with the current count
  // which is zero, because it started as 0, and nothing has happend yet to change it!
  countElement.textContent = toDoCount;

  console.log('Javascript still works! What a gosh darn relief.');
}

// then, we call the onReady function, so it runs when this script runs
// which happens on page load
onReady();
// notice, none of the other functions here are called in this file.
// they are all called when event listners are triggered, and those listners call our other functions


// goal: when someone clicks the submit button, we add a new todo item to our list
function handleSubmit(event) {
  // When a button is in a form, the browser's default behavior is to refresh the page.
  // we use this command to take controle, and stop that from happening.
  event.preventDefault();

  // get to-do text input element
  let toDoElement = document.getElementById('to_do_text');
  // console.log(toDoElement);

  // get author input element
  let authorElement = document.getElementById('author');
  // console.log(authorElement);

  // Get the element that we want to add our todos inside of (the container)
  let toDoContaier = document.querySelector('ul');

  // add our new todo, (as html) to the container.
  // This adds it to the end, making it the new last thing in the container.
  // We are also adding it in, with it's own click listner,
  // so we can fire the deleteToDo funciton when the delete button is clicked
  toDoContaier.innerHTML += `
    <li>
      <button onClick="deleteToDo(event)">❌</button>
      ${toDoElement.value} (${authorElement.value})
    </li>
  `;

  // we prevented the default behavior (the page reloading)
  // so, now we have the responsability of clearing the input fields.
  // Luckily, we saved the elements (see above!)
  // We can just set their value to blank, since we are done with them :)
  toDoElement.value = '';
  authorElement.value = '';

  // every time we add a todo, we'll increase the counter
  toDoCount++;
  // then, we'll go get the container where we show the count on the page
  let countElement = document.querySelector('span');
  // and we'll replace the text inside, with the updated count
  countElement.textContent = toDoCount;


}

function deleteToDo(event) {

  console.log('the thing that was clicked: ', event.target);

  console.log('the parent of thing that was clicked: ', event.target.parentElement);

  event.target.parentElement.remove();

  // every time we delete a todo, we'll decrease the counter
  toDoCount--;
  // then, we'll go get the container where we show the count on the page
  let countElement = document.querySelector('span');
  // and we'll replace the text inside, with the updated count
  countElement.textContent = toDoCount;


}
