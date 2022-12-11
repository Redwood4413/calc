export {};

const title = document.querySelector('title') as HTMLTitleElement;
// @ts-ignore
title.innerHTML += ` // v.${__APP_VERSION__}`;
