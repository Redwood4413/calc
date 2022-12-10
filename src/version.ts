export {}

const title = document.querySelector("title") as HTMLTitleElement;
title.innerHTML += ` // v.${__APP_VERSION__}`;
