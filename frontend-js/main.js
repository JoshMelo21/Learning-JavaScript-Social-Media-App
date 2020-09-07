import Search from "./modules/search.js";
import Chat from "./modules/chat.js"
import registrationForm from "./modules/registrationForm.js"

if(document.querySelector("#chat-wrapper")){  new Chat();}


if(document.querySelector(".header-search-icon")){new Search();}

if(document.querySelector("#registration-form")){new registrationForm();}