const pageTurnBtn = document.querySelectorAll('.nextprev-btn'); // Correct declaration
pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page'); // Retrieve the data-page attribute
        const pageTurn = document.getElementById(pageTurnId); // Find the page element
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index; // Adjust zIndex after transition
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index; // Adjust zIndex after transition
            }, 500);
        }
    };
});

//contact me button when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index; // Adjust zIndex after the transition
            }, 500);
        }, (index + 1) * 200 + 100); // Delay for each page
    });
};

//create reverse index funstion

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1; // Wrap around to the last page
    }
}

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex(); // Call the reverseIndex function
      pages[pageNumber].classList.remove('turn'); // Remove 'turn' class from the page
      setTimeout(() => {
        reverseIndex(); // Call reverseIndex again
        pages[pageNumber].style.zIndex = 10 + index; // Adjust zIndex dynamically
      }, 500);
    }, (index + 1) * 200 + 100); // Delay for each page in the loop
  });
};

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft=document.querySelector('.book-page.page-left')
// Opening animation (cover right animation)
setTimeout(() => {
  coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

// Opening animation (cover left animation)
setTimeout(() => {
  pageLeft.style.zIndex=20;
}, 3200);

// Opening animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex(); // Ensure reverseIndex is defined and functioning
    pages[pageNumber].classList.remove('turn'); // Remove 'turn' class from page
    setTimeout(() => {
      reverseIndex(); // Ensure reverseIndex is defined and functioning
      pages[pageNumber].style.zIndex = 10 + index; // Adjust zIndex for each page
    }, 500);
  }, (index + 1) * 200 + 2100); // Delay for each page in the loop
});