// Create a div element
const footer = document.createElement('footer');

// Add a class to the div using classList
footer.classList.add('footer');

// Append the div to the body of the document (you can append it to any other element as needed)
document.body.appendChild(footer);

const footerMain = document.createElement('div');
footerMain.classList.add('footer-main');
footer.appendChild(footerMain);

const footerBottom = document.createElement('div');
footerBottom.classList.add('footer-bottom');
footer.appendChild(footerBottom);

footerJSON.columns.forEach(column => {
  const title = column.title;
  const listData = column.data;

  const about = document.createElement('div');
  about.classList.add('about');
  footerMain.appendChild(about);

  const aboutTitle = document.createElement('h2');
  aboutTitle.textContent = title;
  about.appendChild(aboutTitle);

  if (column.dataType === 'ARRAY') {
    const list = document.createElement('ul');
    listData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
    about.appendChild(list);
  } else if (column.dataType === 'MAIL_ADDRESS' || column.dataType === 'REGISTERED_ADDRESS') {
    const address = document.createElement('p');
    address.textContent = listData;
    about.appendChild(address);
  }
});


footerJSON.bottomColumns.forEach(column => {
  const img = column.img;
  const text = column.text;

  const misc = document.createElement('div');
  misc.classList.add("misc");
  footerBottom.appendChild(misc);

  if (img && img.trim() !== "") {
    const image = document.createElement("img");
    image.src = img;
    image.alt = text;
    misc.appendChild(image);
  }

  const miscLink = document.createElement("a");
  miscLink.href = "#";
  miscLink.textContent = text;
  misc.appendChild(miscLink);

});

