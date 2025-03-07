// script.js

console.log('init');

// Wait for the DOM to be fully loaded

document.addEventListener("DOMContentLoaded", function() {
                          
                          
                          
                          document.body.style.backgroundColor = "#121212"; // Dark background
                          
                          document.body.style.color = "#ffffff"; // Light text color
                          
                          
                          
                          // Apply styles to all elements
                          
                          const elements = document.querySelectorAll('*');
                          
                          elements.forEach((element) => {
                                           
                                           element.style.backgroundColor = "#121212";
                                           
                                           element.style.color = "#ffffff";
                                           
                                           });
                          
                          
                          
                          console.log("Dark theme applied to all elements");
                          
});
