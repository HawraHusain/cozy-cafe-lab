//Part 1

// The cafe’s title is a bit too long. Select the #main-title id element and change the text to “Welcome to the Cozy Cafe”. Let’s also improve our page’s appearance by changing the text-align to center on the title as well.

const titleElement= document.querySelector('#main-title')
titleElement.textContent='Welcome to the Cozy Cafe';
titleElement.style.textAlign = 'center';
console.log(titleElement.textContent);

// Part 2

// Select the body element and change the background color to a soothing pastel shade of your choice. (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)

const selectbody=document.querySelector('body')
selectbody.style.backgroundColor='bisque';
console.log(selectbody)


// Part 3

// Select the <p> element which is meant to hold the quote of the day. Update it’s content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).
const paragraphElement = document.querySelector('p');
paragraphElement.textContent = 'Everything has BEAUTY, but not everyone sees it.';
console.log(paragraphElement.textContent);


// Part 4

// Select all elements with the class highlight-title and change their font-style to italic. Remember, you might need to iterate through a collection of elements.

const highlightTitles = document.querySelectorAll('.highlight-title');
highlightTitles.forEach(element => {
  element.style.fontStyle = 'italic';
});
// Part 5

// Let’s add a new item to the Past Menu Items list. Create a new <li> element, set the text to “Rose Cake”, and append it to the list.
const newMenuItem = document.createElement('li');
newMenuItem.textContent = 'Rose Cake';
const pastMenuList = document.querySelector('#past-menu-items');
pastMenuList.appendChild(newMenuItem);

// Part 6

// Select the list of Cafe Specialties and add a list item. Be sure to add content to your newly created <li></li> tags (maybe Karak Tea is on offer now?).
const newSpecialtyItem = document.createElement('li');
newSpecialtyItem.textContent = 'Karak Tea';
const cafeSpecialtiesList = document.querySelector('#cafe-specialties');
cafeSpecialtiesList.appendChild(newSpecialtyItem);


// Part 7

// Create a new blog post for a recent cafe event. You will need to create a new <div> element with the class .blog-post, a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event. Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation and appending.

const newBlogPost = document.createElement('div');
newBlogPost.classList.add('.blog-post');

const blogTitle = document.createElement('h3');
blogTitle.textContent = 'Karak Tea Tasting Event';

const blogDescription = document.createElement('p');
blogDescription.textContent = 'Join us for an authentic Karak Tea tasting experience! Sample traditional flavors and enjoy a cozy atmosphere with fellow tea enthusiasts.';

newBlogPost.appendChild(blogTitle);
newBlogPost.appendChild(blogDescription);

const blogSection = document.querySelector('.blog-post');
blogSection.appendChild(newBlogPost);

// Part 8 - 🚀 Level Up

// It turns out the cafe never served the item “Fish Tacos”. Select the Past Menu Items list and remove “Fish Tacos” from it. Hint: You’ll have to cache both the “Fish Tacos” list item element as well as it’s parent, then use the removeChild() method on the parent to remove the cached <li> element.

const fishTacosItem = document.querySelector('li.fish-tacos'); 
const menuList = fishTacosItem.parentNode;

menuList.removeChild(fishTacosItem);
